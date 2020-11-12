/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: `imagesall`,
      },
    },
  ],
}
