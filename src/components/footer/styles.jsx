import styled from "styled-components";

export const Conteiner = styled.footer`
    width: 100%;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6vh;
        background-color: #005875;
        gap: 30px;

        @media (orientation: landscape) {
            /* estilos só quando a tela estiver em modo paisagem */
            height: 12vh;
        }
        

        .icon {
            font-size: 1.6rem;
            font-weight: 700;
            color: #ffffffff;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
                color: #000000ff;
            }
        }
    }

    .copyright {
        color: #000000ff;
        font-size: 0.7rem;
        background-color: #ffffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3vh;

        @media (orientation: landscape) {
            /* estilos só quando a tela estiver em modo paisagem */
            height: 6vh;
        }
    }
    
`