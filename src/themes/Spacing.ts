/**
 * Spacing theme
 * sp = spacing for media queries
 * @example <caption>
 * import { sp } from '@themes/Spacing';
 *
 * const StyledDiv = styled.div
 * @media ${sp.xl} {... }
 *
 * </caption>
 *
 */
const sp = {
  xl: '(min-width: 1280px)',
  lg: '(min-width: 1024px)',
  md: '(min-width: 768px)',
  sm: '(min-width: 640px)',
  xs: '(min-width: 320px)',
} as const;

export default sp;
