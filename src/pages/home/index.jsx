import { Container } from "./styles"
import Player from "../../components/player"
import CardLocutor from "../../components/cardLocutor"


const Home = () => {
    return (
        <Container>
            <section className="area-player">
                <CardLocutor />
                <article className="sobre">
                    <h2>Sobre nós</h2>
                    <h4>Tá na Liberal, tá legal!</h4>
                    <p>
                        Na Rádio Liberal Web, você encontra uma programação feita para curtir o melhor da música, se informar com conteúdos de qualidade e se divertir com muito entretenimento. Aqui a vibe não para: cada programa é pensado para deixar o seu dia mais animado, conectado e cheio de energia positiva.                
                    </p>
                </article>
            </section>
            <Player />
        </Container>
    )
}

export default Home
