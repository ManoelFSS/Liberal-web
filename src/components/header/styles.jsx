import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: Center;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 99;

    @media (max-width: 650px) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }

    .btn {
        display: none;
        position: absolute;
        top: 15px;
        left: 15px;
        width: 40px;
        height: 40px;
        z-index: 100;

        @media (max-width: 650px) {
            display: flex;
        }
    }

    img {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 350px;

        @media (max-width: 1000px) {
            display: none;
        }
    }

    .icon {
        font-size: 1.5rem;
        color: #005875;
        font-weight: 900;
    }
`   