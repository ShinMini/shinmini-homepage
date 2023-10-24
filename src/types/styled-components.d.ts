import 'styled-components';
import { ThemesType, fonts } from '@src/themes/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemesType['colors'];
    fonts: typeof fonts;
  }
}
