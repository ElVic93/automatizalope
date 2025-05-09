/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  try {
    // Crear páginas de artículos desde Strapi
    const articlesResult = await graphql(`
      {
        allStrapiArticle {
          nodes {
            id
            slug
          }
        }
      }
    `);

    if (articlesResult.errors) {
      console.error('Error fetching articles:', articlesResult.errors);
      return;
    }

    if (articlesResult.data?.allStrapiArticle?.nodes) {
      articlesResult.data.allStrapiArticle.nodes.forEach(article => {
        createPage({
          path: `/blog/${article.slug}`,
          component: path.resolve('./src/pages/blog/{strapiArticle.slug}.js'),
          context: { id: article.id },
        });
      });
    }
  } catch (error) {
    console.error('Error in createPages:', error);
  }

  // Página DSG de ejemplo
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};
