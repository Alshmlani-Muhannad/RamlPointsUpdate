module.exports = {
  content: ["./*.{html,js}", "./pages/*.{html,js}", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F1E8", // warm-neutral-100
        secondary: "#2E5C8A", // blue-800
        accent: "#D4AF37", // yellow-600
        background: "#FEFCF7", // warm-white
        surface: "#F0EDE6", // warm-neutral-50
        border: "#E8E4DD", // warm-neutral-200
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#666666", // gray-600
        },
        success: "#1B5E20", // green-800
        warning: "#F57C00", // orange-600
        error: "#C62828", // red-700
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        light: '0 2px 8px rgba(46, 92, 138, 0.08)',
        medium: '0 4px 16px rgba(46, 92, 138, 0.12)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}