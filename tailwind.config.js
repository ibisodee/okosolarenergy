module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      darkblue: '#052447',
      blue: '#063e7d',
      yellow: '#fff000',
      white: '#ffffff',
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
  },
  plugins: [],
}
