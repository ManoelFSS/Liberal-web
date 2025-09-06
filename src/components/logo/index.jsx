import { Container } from './styles'
import Image from '../../assets/images/Image.png'

const Logo = () => {
    return (
        <Container> 
            <img src={Image} alt="Logo" />
            <div className='text-area'>
                <p className='r-txt'>Rádio</p>
                <p className='l-txt'>Liberal</p>
                <p className='w-txt'>Web</p>
            </div>
        </Container>
    )
}

export default Logo