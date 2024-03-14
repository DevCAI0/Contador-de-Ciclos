import styled from "styled-components";

// Estilização do contêiner principal da Home
export const HomeContainer = styled.main`
    flex:1;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    form{
        display: flex;
        flex-direction:column;
        align-items:center;
        gap: 3.5rem;
    }
`;

// Estilização base para botões de contagem regressiva
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
    color: ${(props) => props.theme["gray-100"]};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

// Estilização específica para o botão de iniciar contagem regressiva
export const StartCountDownButton  = styled(BaseCountDownButton)`
    background: ${(props) => props.theme["green-500"]};
    &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
    }
`;

// Estilização específica para o botão de interromper contagem regressiva
export const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${(props) => props.theme["red-500"]};
    &:not(:disabled):hover {
        background: ${(props) => props.theme["red-700"]};
    }
`;
