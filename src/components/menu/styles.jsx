import styled  from "styled-components";

export const Container = styled.nav`
    height: 8vh;
    background-color: #ffffffff;
    border-radius: 0 0 6px 6px;
    box-shadow: 5px 5px 10px 0.5px #00000050;
    overflow: hidden;
    // border: solid 1px #f50101ff;
    z-index: 99;


    @media (max-width: 650px) {
        position: absolute;
        top: ${props => props.closeMenu ? '-66vh' : '0' };
        width: 100%;
        height: 65vh;
        transition: all 0.3s ease-in-out;
        box-shadow:${props => props.closeMenu ? '5px 5px 10px 0.5px #00000050' : 'none'};
        z-index: 99;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        list-style-type: none;
        font-weight: bold;
        position: relative;
        gap: 20px;



        li {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;
            height: 100%;
            z-index: 2;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            color: #555454ff;
            fnt-size: 1.1rem;
            outline: none;
            user-select: none;

            @media (max-width: 650px) {
                width: 50%;
                font-size: 1.3rem;
                border-bottom: solid 1px #c4c4c4;
            }
        }

        .hover-active {
            color: #ffffff;
        }

        .active {
            background-color: #005875;
            position: absolute;
            left: ${props => props.position};
            width: ${props => props.width};
            top: ${props => props.positionTop};
            height: ${props => props.height};
            z-index: 1;
            transition: all 0.2s ease-in-out;
            padding: 0 ;
            border-radius: 0 0 6px 6px;
            box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.25);

            @media (max-width: 650px) {
                border-radius: 6px;
            }
        }

        .close-sobre {
            display: none;

            @media (max-width: 650px) {
                display: flex;
            }
        }

        @media (max-width: 650px) {
            padding: 10px 0;
            gap: 0px;
            flex-direction: column;
            justify-content: center;
        }
    }
`   