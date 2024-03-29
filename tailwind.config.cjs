const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				'9/16': '56.25%'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem'
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: colors.sky,
				gray: colors.neutral
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: theme('colors.primary.600')
							},
							code: {
								color: theme('colors.primary.400')
							}
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
							fontFamily: 'Plus Jakarta Sans'
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
							fontFamily: 'Plus Jakarta Sans'
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.900'),
							fontFamily: 'Plus Jakarta Sans'
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900')
						},
						code: {
							color: theme('colors.pink.500'),
							backgroundColor: theme('colors.pink.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem',
							wordWrap: 'break-word',
							fontWeight: '2px',
							fontFamily: 'Roboto Mono'
						},
						pre: {
							code: {
								fontFamily: 'Roboto Mono'
							}
						},
						'code:before': {
							content: 'none'
						},
						'code:after': {
							content: 'none'
						},
						details: {
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						hr: { borderColor: theme('colors.gray.200') },
						'ol li:before': {
							fontWeight: '600',
							color: theme('colors.gray.500')
						},
						'ul li:before': {
							backgroundColor: theme('colors.gray.500')
						},
						strong: { color: theme('colors.gray.600') },
						blockquote: {
							color: theme('colors.gray.900'),
							backgroundColor: theme('colors.slate.100'),
							borderRadius: '10px',
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '4px',
							paddingBottom: '4px',
							fontWeight: '10px'
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: theme('colors.primary.400')
							},
							code: { color: theme('colors.primary.400') }
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.300')
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.300')
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.300')
						},
						'h4,h5,h6': {
							color: theme('colors.gray.300')
						},
						details: {
							backgroundColor: theme('colors.gray.800')
						},
						hr: { borderColor: theme('colors.gray.700') },
						'ol li:before': {
							fontWeight: '600',
							color: theme('colors.gray.400')
						},
						'ul li:before': {
							backgroundColor: theme('colors.gray.400')
						},
						strong: { color: theme('colors.gray.100') },
						thead: {
							color: theme('colors.gray.100')
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700')
							}
						},
						blockquote: {
							color: theme('colors.green.200'),
							borderLeftColor: theme('colors.gray.700')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
