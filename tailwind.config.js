/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',
        'primary-medium': 'var(--color-primary-medium)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-light': 'var(--color-accent-light)',
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        'bg-warm': 'var(--color-bg-warm)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
        'text-muted': 'var(--color-text-muted)',
        'text-on-dark': 'var(--color-text-on-dark)',
        'text-on-dark-muted': 'var(--color-text-on-dark-muted)',
        success: 'var(--color-success)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        brand: ['Comfortaa', 'Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'sm-ds': 'var(--radius-sm)',
        'md-ds': 'var(--radius-md)',
        'lg-ds': 'var(--radius-lg)',
        'xl-ds': 'var(--radius-xl)',
        '2xl-ds': 'var(--radius-2xl)',
      },
      boxShadow: {
        'sm-ds': 'var(--shadow-sm)',
        'md-ds': 'var(--shadow-md)',
        'lg-ds': 'var(--shadow-lg)',
        'xl-ds': 'var(--shadow-xl)',
        'primary-ds': 'var(--shadow-primary)',
      },
      maxWidth: {
        'container': '1200px',
        'text': '680px',
      },
    },
  },
  plugins: [],
}
