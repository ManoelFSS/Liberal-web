import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    right: 30px;

    @media (max-width: 1000px) {
        right: 0px;
        top: 20px;
    }

    @media (max-width: 700px) {
        right: 0px;
        top: -10px;
    }

    .locutor {
        display: flex;
        width: 310px;
        min-width: 300px;
        background-color: #ffffff;
        box-shadow: 2px 4px 5px 3px #00000036;
        border-radius: 10px;
        padding: 0;
        position: relative;
        z-index: 2;

        figure {
            max-width: 130px;
            max-height: 150px;
            border-radius: 10px 0 0 0px;
            
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px 0 0 10px;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 100%;
            max-height: 150px;
            padding: 10px;
            gap: 5px;

            div {
                flex:1;
                display: flex;
                flex-direction: column;
                gap: 5px;
                width: 100%;
            }

            h3 {
                font-size: 1.1rem;
                color: #343434ff;
            }

            p {
                font-size: 0.8rem;
                color: #383939ff;
            }

            .views {
                flex: 0;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 10px;
                font-size: 1rem;
                color: #383939ff;
                padding-right: 10px;

                .icon {
                    font-size: 1.5rem;
                    color: #005875;
                    cursor: pointer;
                    transition: color 0.3s;

                    &:hover {
                        color: #0096c7;
                    }
                }

                span {
                    font-weight: bold;
                    font-size: 1.1rem;
                    position: relative;
                    top: 3px;
                }
            }
        }
        
    }

    .redes-sociais {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 35px;
        gap: 15px;
        background-color: #5d5a5a04;
        border-radius: 0 0 10px 10px;
        border: solid #ffffff6b; border-width: 0px 1px 1px 1px;
        cursor: pointer;
        box-shadow: 2px 1px 8px 2px #0000006d;
        padding-top: 5px;

        .icon {
            font-size: 1.2rem;
            color: #005875;

            &:hover {
                color: #0096c7;
            }
        }
    }
`   