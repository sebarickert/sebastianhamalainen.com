// // Import environment variables from .env files
require('dotenv').config({
	path: '.env'
});

module.exports = {
	siteMetadata: {
		email: 'contact@hamse.fi',
		twitter: 'https://twitter.com/iamsebh',
		linkedin: 'https://www.linkedin.com/in/sebastianhamalainen/',
		github: 'https://github.com/shamalainen',
		website: 'https://sebastianhamalainen.com',
		author: '@iamsebh',
		title: 'Sebastian',
		description:
			'Front-end Developer. Web Design and JS enthusiast, also a so-called gym rat. I like to play around with CSS.'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-catch-links',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-autolink-headers',
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Rubik`,
						variants: [ `400`, `500` ]
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'sebastianhamalainen.com',
				short_name: 'shamalainen',
				start_url: '/',
				background_color: '#111111',
				theme_color: '#111111',
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: 'standalone',
				icon: 'src/images/logo.jpg', // This path is relative to the root of the site.
				// An optional attribute which provides support for CORS check.
				// If you do not provide a crossOrigin option, it will skip CORS for manifest.
				// Any invalid keyword or empty string defaults to `anonymous`
				crossOrigin: `use-credentials`
			}
		}
	]
};
