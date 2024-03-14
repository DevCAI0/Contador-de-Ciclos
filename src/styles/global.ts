// Importa a função createGlobalStyle do styled-components
import { createGlobalStyle } from "styled-components";

// Cria um estilo global
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Remove o destaque padrão no foco e aplica uma sombra de caixa verde
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
    }

    // Configurações gerais para o corpo da página
    body {
        background: ${(props) => props.theme["gray-900"]}; // Cor de fundo do corpo
        color: ${(props) => props.theme["gray-300"]}; // Cor do texto
        -webkit-font-smoothing: antialiased;
    }

    // Define a fonte e tamanho padrão para body, input, textarea e botão
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
