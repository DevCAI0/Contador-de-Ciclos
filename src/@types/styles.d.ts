// Importa o módulo 'styled-components'
import 'styled-components';

// Importa o tema padrão (defaultTheme) de '../styles/themes/default'
import { defaultTheme } from '../styles/themes/default';

// Define o tipo do tema com base no formato do defaultTheme
type ThemeType = typeof defaultTheme;

// Declaração de módulo para o 'styled-components'
declare module 'styled-components' {
    // Estende a interface DefaultTheme com o ThemeType
    export interface DefaultTheme extends ThemeType {}
}
