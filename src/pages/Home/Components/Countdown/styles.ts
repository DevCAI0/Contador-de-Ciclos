import styled from "styled-components";

// Estilização para o contêiner do countdown
export const CountdouwnContainer = styled.div`
    font-family: 'Roboto Mono'; // Fonte usada para o texto do countdown
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme["gray-100"]}; // Cor do texto, obtida do tema

    display: flex;
    gap: 1rem;
    
    span {
        background: ${(props) => props.theme["gray-700"]}; // Cor de fundo do bloco de números, obtida do tema
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;

// Estilização para o separador ":" no countdown
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme["green-500"]}; // Cor do separador, obtida do tema
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;    
`;

// Estilização base para o botão do countdown
export const BaseCountDownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    color: ${(props) => props.theme["gray-100"]}; // Cor do texto, obtida do tema

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }   
`;

// Estilização específica para o botão de iniciar o countdown
export const StartCountDownButton = styled(BaseCountDownButton)`
    background: ${(props) => props.theme["green-500"]}; // Cor de fundo ao iniciar, obtida do tema
    &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]}; // Cor de fundo ao passar o mouse, obtida do tema
    }
`;

// Estilização específica para o botão de parar o countdown
export const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${(props) => props.theme["red-500"]}; // Cor de fundo ao parar, obtida do tema
    &:not(:disabled):hover {
        background: ${(props) => props.theme["red-700"]}; // Cor de fundo ao passar o mouse, obtida do tema
    }
`