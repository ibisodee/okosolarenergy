module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation:{
        'spin': 'spin 3s linear infinite'},
    },
    colors: {
      darkblue: '#052447',
      blue: '#063e7d',
      yellow: '#fff000',
      white: '#ffffff',
      deepsky: '#02777E',
      gold: '#756E08',
      maroon: '#9C0331',
      milk: '#ecffa1',
      green: '#4B9F14',
      red: '#FF0000',
      skyblue:'#87ceeb',
    },
    dropShadow: {
      'shadow': '0px 10px 14px 2px rgba(0, 0, 0, 0.15)',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '15px',
      'lg': '20px',
      'full': '9999px',
      'large': '100px',
    },
    animation: {
      marquee: 'marquee 25s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
      spin : 'spin 3s linear infinite',
      animation: 'spin 1s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      spin: {
        from : {transform: 'rotate(-3deg)' },
        to : {transform: 'rotate(360deg)'}
      }
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
