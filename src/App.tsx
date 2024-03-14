// Importa o provedor de tema da biblioteca styled-components
import { ThemeProvider } from "styled-components";
// Importa o tema padrão da aplicação
import { defaultTheme } from "./styles/themes/default";
// Importa o estilo global da aplicação
import { GlobalStyle } from "./styles/global";
// Importa o componente Router para gerenciar as rotas da aplicação
import { Router } from "./Router";
// Importa o componente de provedor de contexto dos ciclos
import { CyclesContextProvider } from "./contexts/CyclesContext";
// Importa o componente BrowserRouter da biblioteca react-router-dom
import { BrowserRouter } from "react-router-dom";

// Componente principal da aplicação
export const App = () => {
    return (
        // Provedor de tema para estilização com styled-components
        <ThemeProvider theme={defaultTheme}>
            {/* Utiliza o BrowserRouter para fornecer roteamento à aplicação */}
            <BrowserRouter>
                {/* Provedor de contexto para os ciclos */}
                <CyclesContextProvider>
                    {/* Componente Router gerencia as rotas da aplicação */}
                    <Router />
                </CyclesContextProvider>
            </BrowserRouter>
            {/* Aplica o estilo global à aplicação */}
            <GlobalStyle />
        </ThemeProvider>
    );
};
