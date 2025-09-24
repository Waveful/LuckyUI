export const colors = {
  // Backward-compatible flat keys
  /**
   * @deprecated Flat color keys are deprecated and will be removed in the next major version.
   * Use the scoped API instead, e.g., colors.scopes.base.white or colors.scopes.brand.dolful_blue
   */
  white: '#ffffff',
  black: '#000000',
  gray: {
    100: '#E1E1E1',
    200: '#C0C0C0',
    300: '#A0A0A0',
    400: '#808080',
    500: '#606060',
    600: '#404040',
    700: '#202020',
  },

  /** @deprecated Use colors.scopes.brand.dolful_blue */
  dolful_blue: '#024EFA',
  /** @deprecated Use colors.scopes.brand.dolful_cyan */
  dolful_cyan: '#00C1FF',

  /** @deprecated Use colors.scopes.brand.dolful_purple_01 */
  dolful_purple_01: '#80A7FF',
  /** @deprecated Use colors.scopes.brand.dolful_purple_02 */
  dolful_purple_02: '#B3CAFF',
  /** @deprecated Use colors.scopes.brand.dolful_purple_03 */
  dolful_purple_03: '#535AFF',

  /** @deprecated Use colors.scopes.brand.super_violet */
  super_violet: '#BB00FF',
  /** @deprecated Use colors.scopes.brand.super_pink_02 */
  super_pink_02: '#FF005E',
  /** @deprecated Use colors.scopes.brand.super_red_03 */
  super_red_03: '#FF0011',

  /** @deprecated Use colors.scopes.semantic.success */
  success: '#05DF72',
  /** @deprecated Use colors.scopes.semantic.danger */
  danger: '#EC003F',
  /** @deprecated Use colors.scopes.semantic.warning */
  warning: '#FFDA00',

  // Grouped scopes for organized access and documentation
  scopes: {
    base: {
      white: '#ffffff',
      black: '#000000',
    },
    neutral: {
      gray: {
        100: '#E1E1E1',
        200: '#C0C0C0',
        300: '#A0A0A0',
        400: '#808080',
        500: '#606060',
        600: '#404040',
        700: '#202020',
      },
    },
    brand: {
      dolful_blue: '#024EFA',
      dolful_cyan: '#00C1FF',
      dolful_purple_01: '#80A7FF',
      dolful_purple_02: '#B3CAFF',
      dolful_purple_03: '#535AFF',
      super_violet: '#BB00FF',
      super_pink_02: '#FF005E',
      super_red_03: '#FF0011',
    },
    semantic: {
      success: '#05DF72',
      danger: '#EC003F',
      warning: '#FFDA00',
    },
  },
};

export type ColorScopes = typeof colors.scopes;
