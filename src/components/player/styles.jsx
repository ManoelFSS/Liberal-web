import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 340px;
    min-width: 350px;
    gap: 45px;
    // border: solid 4px #ef280eff;

    .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        position: relative;
        width: 240px;

        .play {
            font-size: 2rem;
            margin-left: 8px;
            margin-top: 5px;
        }

        .pause {
            font-size: 2rem;
            margin-left: 3px;
            margin-top: 5px;
        }

        .icon {
            font-size: 1.5rem;
        }

        .btn-share{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            left: -40px;
            bottom: 10px;
            gap: 15px;

            p {
                font-size: 0.9rem;
                color: #383838ff;
                font-weight: 700;
            }
        }

        .btn-whatsapp {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            right: -40px;
            bottom: 10px;
            gap: 15px;

            p {
                font-size: 0.9rem;
                color: #383838ff;
                font-weight: 700;
            }
        }
    }
    
`   