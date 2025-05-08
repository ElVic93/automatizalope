/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          dark: '#172E6F',
          light: '#2C4A9A',
        },
        secondary: {
          DEFAULT: '#64B5F6',
          dark: '#4A9CE4',
        },
        accent: '#8E24AA',
        text: {
          DEFAULT: '#000000',
          light: '#374151',
        },
        heading: '#000000',
        'gray-light': '#F3F4F6',
        'gray-lighter': '#E5E7EB',
        background: '#FFFFFF',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
        whatsapp: '#25D366',
      },
      boxShadow: {
        'text-light': '0 0 5px rgba(255, 255, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        'gradient-secondary': 'linear-gradient(120deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)',
        'gradient-accent': 'linear-gradient(120deg, var(--color-accent) 0%, #7B1FA2 100%)',
        'gradient-light': 'linear-gradient(120deg, #FFFFFF 0%, var(--color-gray-light) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 