/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./template-parts/*.{php,html,js}","./*.{php,html,js,css}"],
    safelist: [
      "center-point"

    ],
    theme: {
	fontFamily: {
            'sans': ['"charter"']
	},
    extend: {},
  },
  plugins: [],
}

