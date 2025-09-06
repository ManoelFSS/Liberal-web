import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(0, 0, 0, 0.14);
    padding: 96px;
    position: relative;
    border-radius: 50%;
    border: 1px solid #ffffff;
    box-shadow:inset 8px 5px 16px #00000050, -5px -6px 40px 2px #ffffffff, 
    0px 0px 8px 20px #ffffffe5, 10px 4px 20px 20px  #0000005f;

    &::after {
        content: '';
        position: absolute;
        top: 20px;
        left: 35px  ;
        transform: rotate(40deg) translateX(-50%);
        width: 15%;
        height: 38%;
        

        /* Fundo semitransparente */
        background: rgba(255, 255, 255, 0.61); 
        box-shadow: inset 0 0 100px 10px rgba(255, 255, 255, 0.34), 0 0 100px 20px rgba(255, 255, 255, 0.34);

        /* Blur para efeito vidro */
        backdrop-filter: blur(1px); 
        -webkit-backdrop-filter: blur(1px); /* suporte Safari */
        filter: blur(10px); /* intensidade do borrão */
        opacity: 0.9;      /* deixa mais translúcido */
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 1);
        z-index: 11;
    }

    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 108%;
        height: 108%;

        /* Blur para efeito vidro */
        backdrop-filter: blur(2px); 
        -webkit-backdrop-filter: blur(2px); /* suporte Safari */

        border-radius: 50%;
        border: 1.5px solid rgba(236, 235, 235, 1);
        z-index: 11;

        /* Reflexos de luz */
        box-shadow:
            inset 15px 15px 20px rgba(255, 255, 255, 0.18),   /* brilho interno superior direito */
            inset -15px -15px 20px rgba(255, 255, 255, 0.14), /* brilho interno inferior esquerdo */
            15px 0px 30px 3px rgba(255, 255, 255, 0.17),           /* glow externo sutil */
            1px 1px 5px 3px rgba(0, 0, 0, 0.17);

        /* Opcional: gradiente diagonal para reflexo */
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.11) 100%);
    }




    @media (min-width: 450px) and (max-width: 900px) {
        padding: 150px;

        &::after {
            width: 20%;
            height: 40%;
            left: 58px;
            top: 40px;
            filter: blur(14px); /* intensidade do borrão */
        }

        &::before {
            width: 104%;
            height: 105%;
        }
    }

    @media (max-width: 450px) {
        padding: 96px;
    }
    

    img {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 0px;  
        z-index: 12;

        @media (max-width: 900px) {
            width: 190px;
            height: 200px;
        }

        @media (max-width: 450px) {
            width: 100px;
            height: 100px;
        }
    }
    
    .text-area {
        height: 120px;
        position: absolute;

        .r-txt {
            font-size: 1rem;
            font-weight: bold;
            color: #383838ff;
            position: relative;
            left: 22px;
            top: 20px;
            z-index: 12;

            @media (max-width: 900px) {
                font-size: 1.5rem;
                left: 52px;
                top: -10px;
            }

            @media (max-width: 450px) {
                font-size: 1rem;
                left: 22px;
                top: 20px;
            }
        }

        .l-txt {
            font-size: 1.8rem;
            font-weight: 900;
            color: #000000ff;
            position: relative;
            left: 20px;
            top: 13px;
            z-index: 12;

            @media (max-width: 900px) {
                font-size: 2.7rem;
                left: 50px;
                top: -16px;
            }

            @media (max-width: 450px) {
                font-size: 1.8rem;
                left: 20px;
                top: 13px;
            }
        }

        .w-txt {
            font-size: 1.3rem;
            font-weight: bold;
            color: #383838ff;
            position: relative;
            left: 47px;
            bottom: -10px;
            z-index: 12;

            @media (max-width: 900px) {
                font-size: 1.9rem;
                left: 97px;
                bottom: 15px;
            }

            @media (max-width: 450px) {
                font-size: 1.3rem;
                left: 47px;
                bottom: -10px;
            }
        }

    }
    
`