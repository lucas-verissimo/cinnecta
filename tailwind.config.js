/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Cabin', 'sans'],
        'Raleway': ['Raleway', 'sans'],
      },
      colors: {
        'blue-0-33-99': 'rgb(0, 33, 99)',
        'blue-0-85-255': 'rgb(0, 85, 255)',
        'grey-246': 'rgb(246, 246, 246)',
        'grey-109': 'rgb(109, 109, 109)',
      },
      lineHeight: {
        '14': '3.438rem',
      },
      boxShadow: {
        '3xl': 'rgba(0, 33, 99, 0.09) 0px 6px 18px 0px',
      },
      maxWidth: {
        'xxs': '13.2rem',
      }
    },
  },
  plugins: [],
}
