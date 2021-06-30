/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `notes`,
      path: `${__dirname}/src/notes/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data-in`,
      path: `${__dirname}/src/data-in/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
],
  siteMetadata: {
    title: 'Web Warrior from Query',
    description: 'Gatsby web dev portfolio',
    copyright: 'This website is a test.',
    contact: 'info@webworrior.fake'
  }
}
