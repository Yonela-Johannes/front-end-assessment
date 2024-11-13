import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
		  fontFamily: {
			'np-regular': ['"Neue Plak Regular"', 'sans-serif'],
			'np-semi-bold': ['"Neue Plak SemiBold", sans-serif'],
			'np-bold': ['"Neue Plak Bold", sans-serif'],
			'np-cond-black': ['"Neue Plak Condensed Black", sans-serif'],
		  },
		  colors: {
			primary_bg: '#D9D9D9',
			background: 'white',
			foreground: 'hsl(var(--foreground))',
			primary: '',
			secondary: '',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
