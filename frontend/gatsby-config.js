/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "https://automatizalope.onrender.com",
  accessToken: process.env.STRAPI_API_TOKEN,
  collectionTypes: ["article", "category", "author"],
  singleTypes: [],
  queryLimit: 1000,
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Automatizalo.pe',
    description: 'Transformando procesos manuales en soluciones automatizadas para tu negocio.',
    siteUrl: 'https://automatizalo.pe',
    author: 'Automatizalo.pe',
    twitter: '@automatizalo',
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
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
        name: `Automatizalo.pe`,
        short_name: `Automatizalo`,
        start_url: `/`,
        background_color: `#0055FF`,
        // This will impact how browsers show your PWA/website
        theme_color: `#0055FF`,
        display: `minimal-ui`,
        icon: `src/images/hero-image.png`, // Cambiado a hero-image.png
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        createLinkInHead: true,
        excludes: ['/admin/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://automatizalo.pe',
        sitemap: 'https://automatizalo.pe/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/*'],
          },
        ],
      },
    },
  ],
}
