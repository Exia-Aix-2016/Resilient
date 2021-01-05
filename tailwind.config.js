module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
