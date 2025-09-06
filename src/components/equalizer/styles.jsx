import styled from "styled-components";


export const EqualizerContainer = styled.div`
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 3px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
`;

export const Block = styled.div`
    width: 14px;
    height: 10px;
    border-radius: 3px;
    background-color: ${(props) => props.color};
    transform-origin: bottom;
    will-change: transform;
`;

export const Controls = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`;
