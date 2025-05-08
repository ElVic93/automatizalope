/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
// Import the mock data from the CommonJS version
const { mockBlogPosts, mockServices } = require('./src/data/mockData.js');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  
  // In development mode, we'll use mock data to create pages
  // Later, when Strapi is connected, we'll use GraphQL to fetch real data
  
  // Create blog post pages
  mockBlogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: require.resolve("./src/templates/blog-post.tsx"),
      context: {
        mockData: post,
      },
    });
  });
  
  // Create service pages
  mockServices.forEach((service, index) => {
    const slug = service.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    createPage({
      path: `/servicios/${slug}`,
      component: require.resolve("./src/templates/service.tsx"),
      context: {
        mockData: service,
      },
    });
  });
  
  // Create DSG example page (leave this for reference)
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};
