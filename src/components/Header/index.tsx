import { HeaderContainer } from "./styles"; // Importa o componente de contêiner de cabeçalho estilizado
import logoIgnite from "../../assets/Logo.svg"; // Importa o logotipo da Ignite a partir dos recursos (assets)
import { Timer, Scroll } from "phosphor-react"; // Importa ícones Timer e Scroll da biblioteca Phosphor
import { NavLink } from "react-router-dom"; // Importa o componente NavLink do react-router-dom para navegação

// Função para renderizar o cabeçalho
export function Header() {
    return (
        // Componente de contêiner de cabeçalho estilizado
        <HeaderContainer>
            {/* Elemento de imagem para o logotipo da Ignite */}
            <img src={logoIgnite} alt="Logo Ignite" />
            {/* Navegação com links NavLink para as rotas Timer e History */}
            <nav>
                <NavLink to="/" title="Timer">
                    {/* Ícone Timer da biblioteca Phosphor */}
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    {/* Ícone Scroll da biblioteca Phosphor */}
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}
