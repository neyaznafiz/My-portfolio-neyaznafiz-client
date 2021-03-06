module.exports = {
  content: [
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff",
          "secondary": "#dca54c",
          "accent": "#d69224",
          "neutral": "#202020",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
} 
