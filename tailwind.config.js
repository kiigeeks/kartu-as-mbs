/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
        colors: {
            whitePrimary: '#F5FAFB',
            greenPrimary: '#57F287',
            greenSecondary: '#10C560',
            greenThird: '#165300',
            greenForth: '#52C234',
            bluePrimary: '#1b3f83',
            redPrimary: '#fc0307',
            grayPrimary: '#B8C2DA',
            graySecondary: '#474741',
        },
        fontSize: {
            'xxs': '10px',
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

