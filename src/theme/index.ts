export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { shadows } from './shadows';
export { radii } from './radii';
export { breakpoints } from './breakpoints';

export const theme = {
  colors: undefined as unknown as typeof import('./colors').colors,
  typography: undefined as unknown as typeof import('./typography').typography,
  spacing: undefined as unknown as typeof import('./spacing').spacing,
  shadows: undefined as unknown as typeof import('./shadows').shadows,
  radii: undefined as unknown as typeof import('./radii').radii,
  breakpoints: undefined as unknown as typeof import('./breakpoints').breakpoints,
};
