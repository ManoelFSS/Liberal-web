import { createContext, useContext, useEffect, useRef, useState } from "react";

const EqualizerContext = createContext();
export const useEqualizer = () => useContext(EqualizerContext);

export const EqualizerProvider = ({ children }) => {
    
    const blocksPerColumn = 11;
    

    const containerRef = useRef(null);
    const audioRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const animationRef = useRef(null);
    const smoothHeightsRef = useRef([]);

    // Novos refs para variação da herdagem
    const inheritanceOffsetsRef = useRef([]);
    const inheritancePhaseRef = useRef([]);
    const lastOffsetChangeRef = useRef(performance.now());

    const [isPlaying, setIsPlaying] = useState(false);
    const [columns, setColumns] = useState(14);
    const [userInteracted, setUserInteracted] = useState(false);

    // Ajusta número de colunas dinamicamente
    useEffect(() => {
        const resizeHandler = () => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            const colWidth = 20; // largura aproximada de cada coluna
            setColumns(Math.floor(width / colWidth));
        }
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    // Inicializa alturas e offsets
    useEffect(() => {
        smoothHeightsRef.current = Array.from(
        { length: columns },
        () => Math.random() * blocksPerColumn
        );
        inheritanceOffsetsRef.current = Array.from(
        { length: columns },
        () => Math.floor(Math.random() * columns)
        );
        inheritancePhaseRef.current = Array.from(
        { length: columns },
        () => Math.random()
        );
        lastOffsetChangeRef.current = performance.now();
    }, [columns]);

    // Configura áudio e analyser
    useEffect(() => {
        const audio = new Audio("https://stream-176.zeno.fm/u3xfwcfbt68uv?..."); // coloque seu stream aqui
        audio.crossOrigin = "anonymous";
        audio.loop = true;
        audioRef.current = audio;

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        audioRef.current.audioCtx = audioCtx;

        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 1024;
        analyser.smoothingTimeConstant = 0.5;
        analyserRef.current = analyser;

        const source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        const bufferLength = analyser.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        // Tentar autoplay
        const tryPlay = async () => {
        try {
            await audioRef.current.play();
            setIsPlaying(true);
            setUserInteracted(true);
        } catch (err) {
            console.warn("Autoplay bloqueado:", err);
        }
        };

        tryPlay();

        return () => {
        audio.pause();
        audio.src = "";
        };
    }, []);

    // Função principal de atualização das barras
    const updateEqualizer = () => {
        if (!isPlaying || !containerRef.current) return;

        analyserRef.current.getByteFrequencyData(dataArrayRef.current);

        const normalized = Array.from(dataArrayRef.current).map(
        (v) => (v / 255) * blocksPerColumn
        );

        // Um valor por coluna (map de bins → colunas)
        const colValues = Array.from({ length: columns }, (_, i) => {
        const idx = Math.floor((i / columns) * normalized.length);
        return Math.min(normalized[idx] || 0, blocksPerColumn);
        });

        // Colunas "ativas"
        const ACTIVE_THRESHOLD = 1.5;
        const active = colValues
        .map((v, i) => ({ v, i }))
        .filter((x) => x.v > ACTIVE_THRESHOLD);

        // Randomizar offsets de tempos em tempos
        const now = performance.now();
        if (now - (lastOffsetChangeRef.current || 0) > 800 + Math.random() * 1200) {
        const swaps = Math.max(1, Math.floor(columns * 0.12));
        for (let s = 0; s < swaps; s++) {
            const idx = Math.floor(Math.random() * columns);
            inheritanceOffsetsRef.current[idx] = Math.floor(Math.random() * columns);
        }
        lastOffsetChangeRef.current = now;
        }

        // Calcular novas alturas
        const newHeights = Array.from({ length: columns }, (_, i) => {
        let val = colValues[i];

        if (val < ACTIVE_THRESHOLD) {
            if (active.length === 0) {
            // fallback: pequeno ruído
            val = Math.max(val, Math.random() * 0.6 + 0.2);
            } else {
            // escolhe 1..3 fontes ativas com peso
            const sourcesCount = 1 + Math.floor(Math.random() * 3);
            const totalActive = active.reduce((a, b) => a + b.v, 0);

            const pickWeighted = () => {
                let r = Math.random() * totalActive;
                for (let k = 0; k < active.length; k++) {
                    // Calcula distância do meio
                    const distFromCenter = Math.abs(active[k].i - columns / 2) / (columns / 2);
                    // Boost para quem está mais perto do centro (0 = centro, 1 = borda)
                    const weightBoost = 1 + (1 - distFromCenter) * 0.8; // até +80% de peso
                    r -= active[k].v * weightBoost;
                    if (r <= 0) return active[k].i;
                }
                return active[active.length - 1].i;
            };



            const picks = new Set();
            for (let s = 0; s < sourcesCount; s++) picks.add(pickWeighted());
            const picked = Array.from(picks);
            const pickedVals = picked.map((pi) => colValues[pi] || 0);
            const avg =
                pickedVals.reduce((a, b) => a + b, 0) / (pickedVals.length || 1);

            // Usa offset/phase para variação
            const offset = inheritanceOffsetsRef.current[i] || 0;
            const phaseIdx = (offset + i) % columns;
            const phaseVal = colValues[phaseIdx] || 0;

            inheritancePhaseRef.current[i] =
                (inheritancePhaseRef.current[i] || 0) +
                (Math.random() * 0.08 + 0.02);
            const phase = inheritancePhaseRef.current[i];
            const sine = 0.5 + 0.5 * Math.sin(phase * Math.PI * 2);

            const inherited = avg * 0.6 + phaseVal * 0.4;
            const scale = 0.85 + Math.random() * 0.35;
            val = Math.min(
                blocksPerColumn,
                inherited * scale * (0.9 + sine * 0.1)
            );
            }
        }

        return val;
        });

        // Suavização temporal
        smoothHeightsRef.current = smoothHeightsRef.current.map((prev, i) => {
        const target = newHeights[i];
        return prev + (target - prev) * 0.2;
        });

        // Renderizar blocos
        const blocks = containerRef.current.querySelectorAll("[data-block]");
        blocks.forEach((block, idx) => {
        const col = Math.floor(idx / blocksPerColumn);
        const row = idx % blocksPerColumn;
        const height = smoothHeightsRef.current[col];
        const active = height > row ? Math.min(height - row, 1) : 0;
        block.style.transform = `scaleY(${active})`;
        });

        animationRef.current = requestAnimationFrame(updateEqualizer);
    };

    // Play/pause
    const togglePlayPause = async () => {
        if (!audioRef.current || !analyserRef.current) return;

        if (!isPlaying) {
        if (audioRef.current.audioCtx.state === "suspended") {
            await audioRef.current.audioCtx.resume();
        }
        try {
            await audioRef.current.play();
            setIsPlaying(true);
            setUserInteracted(true);
            updateEqualizer();
        } catch (err) {
            console.error("Erro ao tocar áudio:", err);
        }
        } else {
        audioRef.current.pause();
        cancelAnimationFrame(animationRef.current);
        setIsPlaying(false);
        }
    };

    // Atualiza quando isPlaying mudar
    useEffect(() => {
        if (isPlaying) {
        updateEqualizer();
        } else {
        cancelAnimationFrame(animationRef.current);
        }
    }, [isPlaying]);

    return (
        <EqualizerContext.Provider
        value={{
            togglePlayPause,
            isPlaying,
            containerRef,
            blocksPerColumn,
            columns,
            smoothHeightsRef,
        }}
        >
        {children}
        </EqualizerContext.Provider>
    );
};

