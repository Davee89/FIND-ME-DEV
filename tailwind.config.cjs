/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				logo: "url('/public/background.webp')",
			},
		},
	},
	plugins: [],
};
