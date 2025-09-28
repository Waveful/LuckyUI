export const colors = {
  // Grouped scopes for organized access and documentation
  scopes: {
    base: {
      white: '#ffffff',
      black: '#000000',
    },
    neutral: {
      gray: {
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        500: '#808080',
        600: '#666666',
        700: '#4D4D4D',
        800: '#333333',
        900: '#1A1A1A',
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
