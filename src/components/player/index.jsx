import { Container } from './styles'
import Logo from '../logo'
import Btn from '../btn'
import { useEqualizer } from '../../context/EqualizerContext'

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";





const Player = () => {

    const { togglePlayPause, isPlaying } = useEqualizer();

    return (
        <Container>
            <Logo />
            <div className='btns'>
                <div className='btn-share'> 
                    <Btn 
                        style='btn-left'
                        width={'55px'} 
                        height={'55px'}
                    >
                        <FaShareAlt  className='icon'/>
                    </Btn>
                    <p>Compartilhar</p>
                </div>
                
                <Btn 
                    width={'65px'} 
                    height={'65px'} 
                    style='btn-center' 
                    onClick={togglePlayPause}
                >
                    {isPlaying ?  <FaPause  className='pause'/> : <FaPlay className='play' /> }
                </Btn>

                <div className='btn-whatsapp'>
                    <Btn 
                        style='btn-right'
                        width={'55px'} 
                        height={'55px'}
                    >
                        <IoLogoWhatsapp  className='icon'/>
                    </Btn>
                    <p>Pedir Musica</p>
                </div>
                
            </div>
        </Container>
    )
}
export default Player