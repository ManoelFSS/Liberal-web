import { Button } from './styles'

const Btn = ({ children, onClick, style, width, height }) => {
    return (
        <Button onClick={onClick} className={style} style={{ width: width, height: height }}>
            {children}
        </Button>
    )
}

export default Btn
