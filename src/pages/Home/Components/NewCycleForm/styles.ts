import styled from "styled-components";

// Estilização base para input
export const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme["gray-100"]}; // Cor da borda inferior, obtida do tema
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["gray-100"]}; // Cor do texto, obtida do tema

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme["green-500"]}; // Cor da borda ao receber foco, obtida do tema
    }

    &::placeholder {
        color: ${(props) => props.theme["gray-500"]}; // Cor do espaço reservado, obtida do tema
        font-size: 1rem;
        text-align: center;
    }
`;

// Estilização específica para o input de tarefa
export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

// Estilização específica para o input de quantidade de minutos
export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;

// Estilização para o contêiner do formulário
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["gray-100"]}; // Cor do texto, obtida do tema
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`;
