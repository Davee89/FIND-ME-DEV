/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				logo: "url('/public/background.webp')",
				add: "url('/public/add.png')",
				addHoover: "url('/public/add-hoover.png')",
				remove: "url('/public/remove.png')",
			},
		},
	},
	plugins: [],
};
