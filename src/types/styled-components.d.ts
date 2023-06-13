import 'styled-components';
import { ThemesType, themes } from '@src/themes/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemesType['colors'];
    fonts: ThemesType['fonts'];
  }
}
