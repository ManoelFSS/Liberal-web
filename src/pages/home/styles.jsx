import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    // border: solid 4px #ef280eff;
    padding: 21px 0 10px;



    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        gap: 50px;
    }

    @media (max-width: 500px) {
        padding: 30px 0 10px;
    }


    .area-player {
        display: flex;
        align-items: center;
        justify-content: center;
        // border: solid 4px #15d338ff;
        position: absolute;
        gap: 350px;
        padding: 0 20px;

        @media (max-width: 1000px) {
            gap: 0px;
            flex-direction: column-reverse;
            align-items: start;
            position: relative; 

        }


        .preview-locutor {
            max-width: 300px;
            h2 {
                font-size: 1.5rem;
                color: #005875;
                padding-bottom: 5px;
            }
            // border: solid 4px #15d338ff;


            @media (max-width: 1000px) {
                max-width: 460px;
            }
        }

        .sobre {
            max-width: 260px;
            position: relative;
            top: 100px;


            h2 {
                font-size: 1.5rem;
                color: #005875;
            }

            h4 {
                font-size: 0.9rem;
                color: #38393aff;
                padding-bottom: 5px;
            }

            p {
                font-size: 0.8rem;
                color: #38393aff;
                line-height: 1.1rem;
            }

            @media (max-width: 1000px) {
                display: none;
            }

        }

    }


    

    

`   