/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        borderAnimation: 'borderAnimation 8s ease-in-out infinite',
      },
      keyframes: {
        borderAnimation: {
          '0%': 'border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;',
          '50%': 'border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;',
          '100%': 'border-radius: 60% 40% 30% 70%/60% 30% 70% 40%',
        }
      },
      fontFamily: {
        mons: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

