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
			keyframes: {
				vibrate: {
					"0%": { transform: "translate(0)" },
					"20%": { transform: "translate(-1px, 1px)" },
					"40%": { transform: "translate(-1px, -1px)" },
					"60%": { transform: "translate(1px, 1px)" },
					"80%": { transform: "translate(1px, -1px)" },
					"100%": { transform: "translate(0)" },
				},
			},
			animation: {
				vibrate: "vibrate 0.4s linear infinite both",
			},
		},
	},
	plugins: [],
};