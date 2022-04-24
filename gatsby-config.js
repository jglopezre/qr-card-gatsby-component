module.exports = {
  pathPrefix: `qr-card-gatsby-component/`,
  siteMetadata: {
    title: `QR card React Component`,
    description: `A Front End Mentor QR card`,
    author: `@jglopezre`,
    siteUrl: `https://jglopezre.github.io/qr-card-gatsby-component/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `QR Card`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
