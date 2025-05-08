/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
        heading: 'var(--color-heading)',
        'gray-light': 'var(--color-gray-light)',
        'gray-lighter': 'var(--color-gray-lighter)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
} 