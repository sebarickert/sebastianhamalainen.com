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
		}
	]
};
