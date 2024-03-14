import styled from "styled-components";

// Estilização para o contêiner de layout
export const LayoutContainer = styled.div`
    max-width: 74rem; // Largura máxima do contêiner, definida em pixels
    height: calc(100vh - 10rem); // Altura calculada como 100% da altura da viewport menos 10rem
    margin: 5rem auto; // Margens superior e inferior de 5rem e laterais automáticas

    padding: 2.5rem; // Preenchimento interno de 2.5rem

    background: ${props => props.theme["gray-800"]}; // Cor de fundo do contêiner, obtida do tema
    border-radius: 8px; // Raio de borda de 8px para cantos arredondados

    display: flex; // Configuração de exibição do contêiner como flexível
    flex-direction: column; // Layout de coluna para os elementos filhos
`;
