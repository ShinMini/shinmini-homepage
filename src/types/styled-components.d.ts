import 'styled-components';
import { ThemesType } from '@src/themes/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemesType['colors'];
    fonts: ThemesType['fonts'];
    shadows: ThemesType['shadows'];
  }
}
