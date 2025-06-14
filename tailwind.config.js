/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	  ],
	  theme: {
		extend: {
		  fontFamily: {
			'jakarta': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
			'kode': ['var(--font-kode-mono)', 'sans-serif'],
			'silkscreen': ['var(--font-silkscreen)', 'sans-serif'],
			'inclusive': ['var(--font-inclusive-sans)', 'sans-serif'],
			'specialGothicExpandedOne': ['var(--font-special-gothic-expanded-one)', 'sans-serif'],
		  },
		},
	  },
	plugins: ["tailwindcss-animate"],
};
