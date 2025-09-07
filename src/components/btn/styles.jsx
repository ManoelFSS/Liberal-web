import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    background-color: #ffffffff;
    border-radius: 50%;
    border: 1px solid #ffffff;
    box-shadow:inset 2px 2px 10px #0000006c, -5px -6px 20px 2px #ffffffff, 
    -2px -2px 2px 5px #ffffff46, 4px 4px 5px 5px  #0000003e;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #005875;
    

    &:hover .icon,  &:hover .play,  &:hover .pause  {
        color: #0096c7;
    }

`;