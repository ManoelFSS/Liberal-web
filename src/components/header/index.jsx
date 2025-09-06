import { useState, useEffect } from "react"
import { Container } from "./styles"
import Menu from "../menu"
import Mic from "../../assets/images/microf.png"
import Btn from "../btn"
import { BsMusicNoteList } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";



const Header = () => {
        const [closeMenu, setCloseMenu] = useState(true);

    return (
        <Container>
            <Btn 
                    width={'55px'} 
                    height={'55px'} 
                    style='btn' 
                    onClick={() => setCloseMenu(!closeMenu)}
                >
                    <TiThMenu className='icon' />
            </Btn>
            <Menu closeMenu={closeMenu} />
            <img src={Mic} alt="Microfone" />
        </Container>
    )
}
export default Header   