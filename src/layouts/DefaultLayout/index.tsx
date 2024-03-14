import { Outlet } from "react-router-dom"; // Importa o componente Outlet do react-router-dom, que renderiza as rotas aninhadas
import { Header } from "../../components/Header"; // Importa o componente Header
import { LayoutContainer } from "./styles"; // Importa o componente de contêiner de layout estilizado

// Função para renderizar o layout padrão
export function DefaultLayout() {
    return (
        // Componente de contêiner de layout estilizado
        <LayoutContainer>
            {/* Componente de cabeçalho */}
            <Header />
            {/* Outlet para renderizar as rotas aninhadas */}
            <Outlet />
        </LayoutContainer>
    );
}
