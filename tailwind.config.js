/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'secondary-color': '#339966',
      'primary-color': '#ff6600',
      'primary-30': 'rgba(16, 84, 70, 0.30)',
      'primary-50': 'rgba(16, 84, 70, 0.50)',
      'primary-60': 'rgba(16, 84, 70, 0.60)',
      'bg': '#EEF1F1',
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
      // 'black-20': 'rgba(255, 255, 255, 0.20)',
      'black-40': 'rgba(0, 0, 0, 0.70)',
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
      'red-100': '#FEF2F2',
      'pink': '#FFC6DE',
      'purple': '#C5D5FF',
      'light-gray': '#edf0f8',
      'gray': '#D0E1EF',
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
        lineHeight: '6.5rem',
        letterSpacing: '-0.297rem'
      }],
      '72px': ['4.5rem', {
        lineHeight: '4.95rem',
        letterSpacing: '-0.09rem'
      }],
      '64px': ['4rem', {
        lineHeight: '4.8rem',
        letterSpacing: '-0.2rem',
      }],
      '52px': ['3.25rem', {
        lineHeight: '3.9rem',
        letterSpacing: '-0.023rem',
      }],
      '48px': ['3rem', {
        lineHeight: '3.6rem',
        letterSpacing: '-0.15rem'
      }],
      '42px': ['2.625rem', {
        lineHeight: '3.5rem',
        letterSpacing: '-0.15rem'
      }],
      '36px': ['2.25rem', {
        lineHeight: '3.15rem',
        letterSpacing: '-0.045rem'
      }],
      '32px': ['2rem', {
        lineHeight: '2.8rem',
        letterSpacing: '-0.04rem',
      }],
      '28px': ['1.75rem', {
        lineHeight: '2.275rem',
        letterSpacing: '-0.088rem',
      }],
      '27px': ['1.688rem', {
        lineHeight: '2.194rem',
        letterSpacing: '-0.034rem',
      }],
      '24px': ['1.5rem', {
        lineHeight: '1.875rem',
        letterSpacing: '-0.015rem',
      }],
      '22px': ['1.25rem', {
        lineHeight: '1.75rem',
        letterSpacing: '-0.015rem',
      }],
      '20px': ['1.25rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.025rem',
      }],
      '18px': ['1.125rem', {
        lineHeight: '1.913rem',
        letterSpacing: '-0.023rem'
      }],
      '16px': ['1rem', {
        lineHeight: '1.7rem',
        letterSpacing: '-0.03rem'
      }],
      '14px': ['0.875rem', {
        lineHeight: '1.488rem',
        letterSpacing: '-0.018rem'
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
          primary: '#e6fbfb',
          secondary: '#C67F43',
          accent: '#43AA8B',
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
