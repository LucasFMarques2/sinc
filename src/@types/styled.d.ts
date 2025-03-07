import 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-compoents'{
    export interface DefaultTheme extends ThemeType {}
}