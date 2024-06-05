/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'secondary-color': '#FF6732',
      'primary-color': '#6288F1',
      'primary-30': 'rgba(16, 84, 70, 0.30)',
      'primary-50': 'rgba(16, 84, 70, 0.50)',
      'primary-60': 'rgba(16, 84, 70, 0.60)',
      'bg': '#EEF1F1',
      'bg-2': '#c5e1ff',
      'bg-3': '#76d7d7',
      'bg-4': '#daa2fb',
      'white': '#FFFFFF',
      'white-2': '#FAF9F9',
      'white-3': '#F9F9F9',
      'white-10': 'rgba(27, 27, 27, 0.10)',
      'white-20': 'rgba(27, 27, 27, 0.20)',
      'white-29': 'rgba(255, 255, 255, 0.29)',
      'white-50': 'rgba(255, 255, 255, 0.50)',
      'black': '#1B1B1B',
      'black-2': '#525256',
      'black-3': '#A8A8A8',
      'black-4': '#8D8D91',
      'black-5': '#000000',
      'black-5(10)': 'rgba(0, 0, 0, 0.10);',
      'black-10': 'rgba(27, 27, 27, 0.10)',
      'black-20': 'rgba(27, 27, 27, 0.20)',
      'black-40': 'rgba(0, 0, 0, 0.40)',
      'black-50': '#525256',
      'green': '#99cc00',
      'green-50': '#F0FAF0',
      'blue': '#2B59FF',
      'blue-50': '#326BFF',
      'blue-100': '#008EFF',
      'blue-150': '#EDF7FF',
      'blue-200': '#E9F8FF',
      'yellow': '#FFD234',
      'yellow-100': '#FFF9ED',
      'yellow-150': '#FABB18',
      'yellow-200': '#FFC947',
      'yellow-250': '#FFC12C',
      'red': '#FF698F',
      'red-50': '#FF5554',
      'red-100': '#ff8d8c',
      'pink': '#FFC6DE',
      'purple': '#C5D5FF',
      'light-gray': '#edf0f8',
      'gray': '#D0E1EF',
      'gray-2': '#535353',
      'gray-3': '#373737',
      'gray-50': '#88898E',
      'gray-100': '#F1F8FE',
      'gray-150': '#FAFBFE',
      'gray-200': '#F4F4F5',
      'gray-250': '#B7B9BF',
      'gray-300': '#2A2F55',
      'gray-350': '#F0F4F9',
      'gray-400': '#E3E3E6',
      'gray-500': '#ccc',
      'gray-600': '#D5DCDC',
      'orange-50': '#FF8B35',
      'orange-100': '#FF730C',
      'orange-150': '#FEF3EF',
      'cyan': '#DDEBFF',
      'cyan-50': '#75808F',
      'cyan-100': '#DDEBFF',
      'cyan-200': '#F8F9FC',
      'cyan-250': '#E4E4E7',
      'cyan-300': '#E4E8EF',
      'cyan-350': '#E2E8F0',
      'cyan-400': '#EEF1FD',
      'cyan-450': '#9AAFCD',
      'cyan-500': '#2A325A',
    },
    fontFamily: {
      bodyFont: ["Epilogue", 'sans-serif'],
      playfair: ["Playfair Display", 'serif'],
      plus: ["Plus Jakarta Sans", 'sans-serif'],
    },
    fontSize: {
      '95px': ['5.938rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '72px': ['4.5rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '64px': ['4rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '52px': ['3.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '48px': ['3rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '42px': ['2.625rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '36px': ['2.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '32px': ['2rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '28px': ['1.75rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '27px': ['1.688rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '24px': ['1.5rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '22px': ['1.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '20px': ['1.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '18px': ['1.125rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '16px': ['1rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '14px': ['0.875rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
    },
    screens: {
      'xxl': { 'max': '1599px' },
      'xl': { 'max': '1399px' },
      'lg': { 'max': '1199px' },
      'md': { 'max': '991px' },
      'sm': { 'max': '767px' },
      'xs': { 'max': '576px' },
    },
    borderRadius: {
      '0': '0',
      '4px': '0.25rem',
      '8px': '0.5rem',
      '10px': '0.625rem',
      '12px': '0.75rem',
      '13px': '0.813rem',
      '14px': '0.875rem',
      '15px': '0.938rem',
      '20px': '1.25rem',
      '25px': '1.563rem',
      '30px': '1.875rem',
      '50px': '3.125rem',
      '100px': '6.25rem',
      'full': '31.25rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        // sm: '1.875rem',
        // md: '0.938rem',
      },
      screens: {
        maxWidth: '1320px',
        xs: '576px',
        sm: '767px',
        md: '991px',
        lg: '1199px',
      },
      // custom: {
      //   center: true,
      //   padding: {
      //     DEFAULT: '0.75rem',
      //     // sm: '1.875rem',
      //     // md: '0.938rem',
      //   },
      //   screens: {
      //     maxWidth: '1760px',
      //     xs: '576px',
      //     sm: '768px',
      //     md: '991px',
      //     lg: '1023px',
      //     xl: '1240px',
      //   },
      // },
    },
    extend: {
      boxShadow: {
        'cookie': '0px -7px 14px rgba(0, 60, 164, 0.04)',
        'xm': '2px 10px 20px 0 rgba(41, 48, 57, 0.08)',
        'sm': '0 7px 8px  0 rgba(0, 60, 164, 0.05)',
        'md': '0 16px 28px 0 rgba(0, 60, 164, 0.05)',
        'lmd': '0 20px 40px 0 rgba(0, 60, 164, 0.07)',
        'xlg': '0 30px 60px 0 rgba(0, 60, 164, 0.07)',
        'lg': '0 30px 66px 0 rgba(0, 60, 164, 0.07)',
        'xl': '0 31px 66px 0 rgba(0, 60, 164, 0.13)',
        'xll': '0 31px 70px 0 rgba(0, 0, 0, 0.23)',
      },
      keyframes: {
        ripple: {
          '70%': {
            '-webkit-box-shadow': '0 0 0 30px rgba(255, 255, 255, 0)',
            'box-shadow': '0 0 0 30px rgba(255, 255, 255, 0.2)',
          },

          '100%': {
            '-webkit-box-shadow': '0 0 0 0 rgba(255, 255, 255, 0)',
            'box-shadow': '0 0 0 0 rgba(255, 255, 255, 0)'
          }
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transitionDuration': '500ms'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#6288F1',
          secondary: '#FF6732',
          gray: '#D0E1EF',
          neutral: '#FBF5F3',
          "base-100": '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
}

