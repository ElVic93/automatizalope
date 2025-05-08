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
    throw articlesResult.errors;
  }

  articlesResult.data.allStrapiArticle.nodes.forEach(article => {
    createPage({
      path: `/blog/${article.slug}`,
      component: path.resolve('./src/pages/blog/{strapiArticle.slug}.js'),
      context: { id: article.id },
    });
  });

  // Crear páginas de categorías desde Strapi
  const categoriesResult = await graphql(`
    {
      allStrapiCategory {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (categoriesResult.errors) {
    throw categoriesResult.errors;
  }

  categoriesResult.data.allStrapiCategory.nodes.forEach(category => {
    createPage({
      path: `/blog/${category.slug}`,
      component: path.resolve('./src/pages/blog/{strapiCategory.slug}.js'),
      context: { id: category.id },
    });
  });

  // Página DSG de ejemplo
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};
