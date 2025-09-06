import { useEqualizer } from "../../context/EqualizerContext";
import { EqualizerContainer, Column, Block} from "./styles";

const Equalizer = () => {
    const { containerRef, blocksPerColumn, columns, smoothHeightsRef, isPlaying} = useEqualizer();

    const getBlockColor = (index) => {
        if (!isPlaying) {
        const startColor = [90, 98, 104, 1];
        const endColor = [207, 207, 207, 1];
        const ratio = index / (blocksPerColumn - 1);
        const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
        const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
        const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
        return `rgb(${r},${g},${b})`;
        } else {
        const startColor = [2, 74, 96, 1];
        const endColor = [227, 244, 249, 1];
        const ratio = index / (blocksPerColumn - 1);
        const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
        const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
        const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
        return `rgb(${r},${g},${b})`;
        }
    };

    const initialHeights =
        smoothHeightsRef.current.length === columns
        ? smoothHeightsRef.current
        : Array.from({ length: columns }, () => Math.random() * blocksPerColumn);

    return (
        <EqualizerContainer ref={containerRef}>
            {Array.from({ length: columns }).map((_, colIndex) => (
                <Column key={colIndex}>
                {Array.from({ length: blocksPerColumn }).map((_, blockIndex) => {
                    const color = getBlockColor(blockIndex);
                    const height = initialHeights[colIndex];
                    const active = height > blockIndex ? Math.min(height - blockIndex, 1) : 0;

                    return <Block key={blockIndex} data-block color={color} style={{ transform: `scaleY(${active})` }} />;
                })}
                </Column>
            ))}
        </EqualizerContainer>
    );
};

export default Equalizer;
