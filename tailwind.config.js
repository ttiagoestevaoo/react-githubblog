/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      blue: '#3294F8',
      'base-title': '#E7EDF4',
      'base-subtitle': '#C4D4E3',
      'base-text': '#AFC2D4',
      'base-span': '#7B96B2',
      'base-label': '#3A536B',
      'base-border': '#1C2F41',
      'base-post': '#112131',
      'base-profile': '#0B1B2B',
      'base-background': '#071422',
      'base-input': '#040F1A',
    },
    fontFamily: {sans: ['Nunito']},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['1rem', '1.6'],
      lg: ['1.25rem', '1.6'],
      xl: ['1.5rem', '1.4'],
    }
  },
  plugins: [],
}

