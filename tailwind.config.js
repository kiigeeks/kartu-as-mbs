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
            bluePrimary: '#1C199A',
            blueSecondary: '#4179F3',
            yellowPrimary: '#FFE417',
            grayPrimary: '#B8C2DA',
            graySecondary: '#474741',
        },
        fontSize: {
            'xxs': '10px',
        },
        fontFamily: {
            lato: ['Lato', 'system-ui'],
        }
    },
  },
  plugins: [],
}

