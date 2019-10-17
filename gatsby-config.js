module.exports = {
  siteMetadata: {
    title: `are you me?`,
    description: `ayumi mamiya / frontend developer / web designer`,
    author: `are you me?`,
    siteUrl: `https://areyoumee.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/areyoume.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WZF6T52",
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
  
}
