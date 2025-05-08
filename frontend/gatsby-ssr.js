/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from 'react';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      key="google-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Lato:wght@400;700&display=swap"
    />,
  ]);
}
