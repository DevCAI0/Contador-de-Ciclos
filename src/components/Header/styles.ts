import styled from "styled-components"; // Importa o módulo styled-components para criar estilos

// Componente de contêiner de cabeçalho estilizado
export const HeaderContainer = styled.header`
    display: flex; // Configura a exibição do contêiner como flexível
    align-items: center; // Centraliza os itens verticalmente
    justify-content: space-between; // Distribui o espaço entre os itens

    nav {
        display: flex; // Configura a exibição da navegação como flexível
        gap: 0.5rem; // Define o espaçamento entre os itens

        a {
            width: 3rem; // Define a largura dos itens de navegação
            height: 3rem; // Define a altura dos itens de navegação

            display: flex; // Configura a exibição dos itens de navegação como flexíveis
            justify-content: center; // Centraliza os itens horizontalmente
            align-items: center; // Centraliza os itens verticalmente

            color: ${(props) => props.theme["gray-100"]}; // Configura a cor do texto com base no tema
            border-top: 3px solid transparent; // Adiciona uma borda superior transparente
            border-bottom: 3px solid transparent; // Adiciona uma borda inferior transparente

            &:hover {
                border-bottom: 3px solid ${(props) => props.theme["green-500"]}; // Adiciona uma borda inferior ao passar o mouse
            }

            &.active {
                color: ${(props) => props.theme["green-500"]}; // Configura a cor do texto quando o link está ativo
            }
        }
    }
`;
