import { Conteiner } from "./styles"
import  Equalizer from "../equalizer"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <Conteiner>
            <Equalizer />
            <section>
                <FaXTwitter className="icon" />
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FiYoutube className="icon" />
            </section>
            <div className="copyright">
                <p>© 2025 Radio Liberal. Todos os direitos reservados.</p>
            </div>
        </Conteiner>
    )
}

export default Footer
