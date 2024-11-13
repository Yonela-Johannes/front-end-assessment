import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
			  '2xl': '1400px',
			},
		  },
		  fontFamily: {
			'np-regular': ['"Neue Plak Regular"', 'sans-serif'],
			'np-semi-bold': ['"Neue Plak SemiBold", sans-serif'],
			'np-bold': ['"Neue Plak Bold", sans-serif'],
			'np-cond-black': ['"Neue Plak Condensed Black", sans-serif'],
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
