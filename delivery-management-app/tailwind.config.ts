import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins-Regular', 'Poppins-Bold', 'Poppins-Regular']
    },
    extend: {
      spacing: {
        '28': '28rem',
        '36': '36.063rem'
      },
      colors: {
        'primary': {
          100: 'var(--primary-color-100)',
          90: 'var(--primary-color-90)',
          80: 'var(--primary-color-80)',
          70: 'var(--primary-color-70)',
          60: 'var(--primary-color-60)',
          50: 'var(--primary-color-50)',
          40: 'var(--primary-color-40)',
          30: 'var(--primary-color-30)',
          20: 'var(--primary-color-20)',
          10: 'var(--primary-color-10)',
        },
        'secondary': {
          100: 'var(--secondary-color-100)',
          90: 'var(--secondary-color-90)',
          80: 'var(--secondary-color-80)',
          70: 'var(--secondary-color-70)',
          60: 'var(--secondary-color-60)',
          50: 'var(--secondary-color-50)',
          40: 'var(--secondary-color-40)',
          30: 'var(--secondary-color-30)',
          20: 'var(--secondary-color-20)',
          10: 'var(--secondary-color-10)',
        },
        'black': {
          100: 'var(--black-color-100)',
          90: 'var(--black-color-90)',
          80: 'var(--black-color-80)',
          70: 'var(--black-color-70)',
          60: 'var(--black-color-60)',
          50: 'var(--black-color-50)',
          40: 'var(--black-color-40)',
          30: 'var(--black-color-30)',
          20: 'var(--black-color-20)',
          10: 'var(--black-color-10)',
        },
        'green': 'var(--green-color-100)',
        'red': 'var(--red-color-100)',
        'bg-color': 'var(--bg-color)',
        'blur-color': 'rgba(0, 0, 0, 0.5)',
        'input-defaut-color': 'var(--input-color-defaut)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
