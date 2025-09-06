import { Container } from "./styles"
import Header from "../../components/header"
import Footer from "../../components/footer"   
import Rotas from "../../routes" 
const Layout = () => {

    return (
        <Container>
            <Header />
            <Rotas />
            <Footer />
        </Container>
    )
}

export default Layout
