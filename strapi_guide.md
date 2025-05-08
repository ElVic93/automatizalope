In this step-by-step guide, you will learn how to harness the power of Gatsby, a blazing-fast static site generator, and Strapi, a composable CMS, to create a dynamic yet performant blog.

Whether you are a developer looking to expand your skillset or a content creator seeking a flexible and efficient way to manage your blog, this tutorial will equip you with the knowledge to create a sleek and responsive static blog website. Let's dive in!

Why Choose Gatsby and Strapi?
Gatsby: Blazing-Fast Static Site Generator
Gatsby is a sophisticated static site generator that utilizes React and GraphQL to build lightning-fast websites. It pre-renders pages at build time, ensuring optimal performance and a superior user experience. Its extensive plugin architecture makes it easy to enhance your site's functionality while maintaining exceptional speed and SEO benefits.

Gatsby offers three methods for rendering content:

Static Site Generation (SSG)
Deferred Static Generation (DSG)
Server-Side Rendering (SSR)
In this tutorial, we'll focus on Static Site Generation (SSG), where the entire site is pre-rendered into HTML, CSS, and JavaScript at build time. These static assets are then served directly to the browser, resulting in faster load times and improved performance.

Gatsby leverages GraphQL, a query language for APIs, to enable pages and components to declare the data they need. This data is then provided by the server at build time, allowing for efficient data management and optimized builds.

Strapi: The Leading Open-Source Headless CMS
Strapi is an open-source headless Content Management System (CMS) that revolutionizes content management. Based on Node.js, it allows you to build customizable APIs quickly. Unlike traditional CMS platforms, Strapi separates the backend from the frontend, providing a flexible and customizable API that allows you to manage content efficiently.

Strapi offers several benefits:

Flexibility and Customization: Define custom content types and relationships without complex configurations.
Open-Source Community: Backed by a large community of contributors and users willing to help.
Self-Hosted or Cloud Options: You can self-host Strapi or leverage Strapi Cloud, a fully managed platform to boost your content velocity.
The Power of Combining Gatsby and Strapi
Integrating Gatsby with Strapi creates a powerful synergy that addresses both performance and content management needs. This combination is particularly effective for content-heavy applications like blogs, e-commerce sites, and marketing websites.

By leveraging these tools together, you get the best of both worlds:

Gatsby's Performance Optimization: Benefit from static site generation, resulting in lightning-fast load times and improved SEO.
Strapi's Flexible Content Management: Manage content efficiently with an intuitive interface, allowing content editors and developers to work seamlessly.
Related Articles:

Understanding Static Site Generators
Getting Started with React and Gatsby
Prerequisites
To follow this tutorial some basic knowledge of HTML, CSS, and JavaScript is required.

Additionally, you will need the following tools installed on your computer:

Node.js Node v16.x, v18.x, and v20.x Only LTS versions of Node are supported
Node.js Package manager: npm or yarn
Python (for SQLite Database)
Git for version control
If you prefer to see the ready-made version here are the links to the npm  GitHub repo, and blog live link.

Set up Project Folder
On your terminal, create a folder named gatsby-strapi-blog to store your project files.


mkdir strapi-gatsby-blog
Navigate into the newly created folder.


cd strapi-gatsby-blog
Initialize your project for version control.


git init
Strapi Backend Set Up
Create a Standard Strapi App
Create your Strapi app in a folder named backend.


yarn create strapi-app backend --quickstart --no-run
The quickstart flag sets up your Strapi app with an SQLite database.
The no-run flag prevents your Strapi app from automatically starting up.
After the installation process completes, a new folder named backend will be created in the root of your project folder.

Strapi Installation Screenshot in Shell

Commit the first changes for your project.


git commit -a -m "Initial commit"
Create an Admin user for your Strapi app
Navigate into the Strapi app backend folder.


cd backend
Create a new admin user for your Strapi app using the following command:


yarn strapi admin:create-user --firstname=Kai --lastname=Doe --email=chef@strapi.io --password=Gourmet1234
Take note of the email and password that you will use later to log in to your Strapi Admin Dashboard.


git commit -a -m "Added Strapi Admin User"
Log in to your Strapi App
Start your strapi app by executing the following command in your backend folder:


yarn develop
The Strapi backend server will start running on port 1337. Visit http://localhost:1337/admin in your browser and you should see a login form for the Strapi Admin Panel.

Strapi Admin Login Form

Enter the credentials that you saved earlier to access the Strapi Admin Dashboard.

Strapi Admin Dashboard

Build your Content
You will use Strapi to create a data structure for your blog posts, then add some entries and publish them, so that the API for your content can be consumed.

Our blog app will contain posts. The posts will have the following data types:

title: The post's title
description: The post's description
content: The post's content
slug: The unique slug for the post's URL
cover: An image to act as the cover for the post
author: The post's author
category: The category for each post.
You can find the raw content text for the blog app by following this link.

Create Collection Types
In this step, you will create 3 collection types to store the content for our blog posts. These are:

Post
Category
Author
In your Strapi Admin Panel, select the Content-Type Builder option and click on + Create new collection type. Name the collection Post and click Continue

Create Post collection

In the Select a field for your collection type menu select Text.

Select a field for your collection type

In the new pop-up modal, name your Text field title and select Short text for the type.

Add title text field

Click on + Add another field.

Select Text field once again. Name it description and select Long text for its type.

Add description text field

Click on + Add another field.

Select Text field. Name it cover and select Short text for its type.

Then click on + Add another field.
Add Text field for Post cover

Select Rich text field.

Select Rich text field

Name it content and click on + Add another field.

Add Content Field

Select Date field.

Select Date Field

In the Add new Date field modal, name it date, and choose date (ex: 01/01/2023) for the type.

Add Date Field

Select UID field.

Select UID field

In the Add new UID field, name your UID, slug, and select title for the attached field. Click on Finish.

Add Slug Field

Review the fields for your Post collection and click on Save.

Wait for your Strapi server to restart.

Create a new collection type and name it Author.

Create author collection type

Add the following fields to the Author collection type:

Text
Text
Relation
For the Text field, name it name with the type of Short text.

Add Author name field

For the second Text field, name it avatar with the type of Short text.

Add Author avatar field

For the Relation field select a one-to-many relationship between Authors and Posts.

Add Author Relation field

Click on Save and wait for your server to restart. Your Author collection type should be similar to the screenshot below.
Author Collection Type

Create a new collection type and name it Category. This is the last collection type for your blog.

Create category collection type

Add the following fields to the Category collection:

Text
UID
Relation
Name the Text field name with a Short text type.

Add Category name field

Name the UID field slug and select name for the attached field.

Add Category slug field

For the Relation field select a one-to-many relationship between Category and Posts.

Add Category relation field

Click on Save and wait for your server to restart. Your Category collection type should be similar to the screenshot below.

Category Collection Type

The final data architecture for your Post collection type should look like the screenshot below:

Post Data Architecture

Open up a new terminal session and in your project folder strapi-gatsby-blog, commit the changes you have made into version control with the following command:


git commit -a -m "Added Collection Types"
Add Posts
Now that you have configured a content structure for your blog backend. The next step is to add content by creating new entries for your collections.

Data to populate your content types can be found on this link: Strapi Gatsby Blog Posts Data.

Select the Content Manager option in the Admin Panel. Click on the Author collection type and select + Create new entry.

Create new entry

Give your author a name and add an image link for the author's avatar. Click on Save then Publish.

Add Author entry

Repeat the same procedure for the second author and your Author entries should be similar to the screenshot below.

Author Entries

Next, add entries for the category collection. Your categories collection should be similar to the screenshot below.

Category

Add entries for the Post collection. Remember to add the author and category relation fields for each post.

After publishing your posts, your Post collection should be populated with entries as seen in the screenshot below.

Post Entries

Allow Access to your API
For security reasons, the API access is restricted by default. You will need to make the content available publicly through the API.

Click on Settings under GENERAL at the bottom of the main navigation.
Under Users & Permissions Plugin, choose Roles.
Click on Public role.
In the Permissions tab, find Author, click on it, and select the checkboxes next to find and findone.
Repeat the same procedure for the category and Author collection.
Allow Access to API

Next, allow access to the Content-Types Builder plugin by checking Select all for both CONTENT-TYPES and COMPONENTS.


Now your API is publicly available but in Read-only mode. This is sufficient for your static blog.

Open up a new terminal session and test whether your API is working by entering the following command:


curl http://localhost:1337/api/posts
If all is working you should get a JSON payload with a list of all your posts

API Test Response

Set up GraphQL plugin
Strapi supports exposing your content via a GraphQL API. To enable the feature you will install the GraphQL plugin.

Stop the Strapi development server in your terminal. In the backend folder where your Strapi app is installed, run the following command:


yarn strapi install graphql
Commit the changes to version control.


git commit -a -m "Added GraphQL to Strapi server"
After a successful installation, restart your Strapi server by running the following command:


yarn develop
Visit http://localhost:1337/graphql to access the Strapi GraphQL playground. Test out your Strapi GraphQL server with the following query to fetch all the posts.


     query{
      posts{
        data{
          attributes{
            title
            description
            content
            date
            slug
            cover
            author{
              data{
                attributes{
                  name
                  avatar
                }
              }
            }
            category{
              data{
                attributes{
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
Click on the Play icon and wait for the response. If all is working the response you will get should be similar to the image below.

Strapi GraphQL API test

For more information on the features that the Strapi GraphQL Playground check out this article about a deep dive into Strapi GraphQL.

Gatsby Frontend Set Up
Create A New Gatsby Site
In a new terminal session, navigate to the root of your project folder strapi-gatsby-blog and run the following command:


npm init gatsby
This will start up an interactive prompt to help you create a new Gatsby site. Respond to the prompts as follows:

What would you like to call your site? Strapi Gatsby Blog Site
What would you like to name the folder where your site will be created? frontend
Will you be using JavaScript or TypeScript? JavaScript
Will you be using a CMS? No (or I'll add it later)
Would you like to install a styling system? No (or I'll add it later)
Would you like to install additional features with other plugins? Done
Create New Gatsby Site Prompts

Answer Yes to the final prompt and wait for your Gatsby site to be built. After the build is finished you should see a message similar to the one in the following screenshot:

Create New Gatsby Site Success Message

Install gatsby-source-strapi plugin
One of Gatsby's coolest features is its support for plugins. Gatsby plugins are Node.js packages that you can add to your Gatsby site. They allow you to quickly add new features to your Gatsby site.

Gatsby has a gatsby-source-strapi used as a source plugin to pull data into Gatsby sites from a Strapi GraphQL API. You will use this plugin for your blog site.

Navigate into the frontend folder where you have just created your Gatsby site and run the following command:


npm install --save gatsby-source-strapi gatsby-transformer-remark
This installs the gatsby-source-strapi plugin including the gatsby-transformer-remark plugin which processes markdown files into HTML.

Edit gatsby-config.js
For your website to pull data from Strapi's GraphQL API, the gatsby-config.js file in the root of your frontend folder should be updated. Delete the contents of gatsby-config.js and update it with the following code:


//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  collectionTypes: ["post", "category", "author"],
};


module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
  ],
};
Update .env.development with the URL to your Strapi backend:


STRAPI_API_URL=http://127.0.0.1:1337
Test Strapi Data Node
Before proceeding to write code for the website you need to test if data from Strapi is being loaded into Gatsby's GraphQL Data Layer. You can use Gatsby's GraphiQL Playground for this.

In the directory where your Gatsby site has been installed, run the following command to start up the Gatsby development server:


npm run develop
This should start your Gatsby development server on port 8000. Visit http://localhost:8000/___graphql in your browser to open up the Gatsby GraphiQL Playground.

Open the GraphiQL Explorer pane by clicking on the button labeled “Show GraphiQL Explorer” (looks like a folder with a plus icon).
Check the allStrapiPost field to request data about multiple posts at once.
Check the fields within the nodes field like title, date, etc to build your query. Note how checking the box for a field adds it to the query in the Query Editor.
Click the button in the middle of the page (that looks like a “play” button) to execute the query. Look at the data returned in the Result window.
Gatsby GraphiQL Playground Test

If data from your Strapi Backend API is being returned in the Result window, then that means your configuration is working. For example, a query like:


query MyQuery {
  allStrapiPost {
    nodes {
      title
      description
    }
  }
}
Should return a result similar to this:


{
  "data": {
    "allStrapiPost": {
      "nodes": [
        {
          "title": "What are Role-Based Permissions in a Web Application?",
          "description": "What are Role-Based Permissions in a Web Application?"
        },
        {
          "title": "What is Prompt Engineering? Top 5 Best Prompts to Get You Started",
          "description": "What is Prompt Engineering? Top 5 Best Prompts to Get You Started"
        },
        {
          "title": "How to Improve Productivity Using ChatGPT",
          "description": "How to Improve Productivity Using ChatGPT"
        },
        {
          "title": "How AI Will Change the Landscape of Building Products",
          "description": "How AI Will Change the Landscape of Building Products"
        },
        {
          "title": "The Benefits of a Headless CMS Like Strapi",
          "description": "The Benefits of a Headless CMS Like Strapi"
        },
        {
          "title": "Unleashing the Power of Customization with Strapi CMS",
          "description": "Unleashing the Power of Customization with Strapi CMS"
        }
      ]
    }
  },
  "extensions": {}
}
Create Layout Page
In this step, you will create a Layout component. This will group all the shared elements to reuse across multiple pages on your blog site. These include the <header> and <footer>.

Create a new folder called components in the src folder. In the components folder create 2 new files, named layout.js and layout.css. Insert the following code into src/components/layout.js to define your Layout component:


//src/components/layout.js
//src/components/layout.js
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
        query {
            allStrapiCategory {
                nodes {
                        name
                        slug
                        id
                    }
          }
        }
    `)

  return (
    <div class="pagewrapper">
      <header>
        <h1>Strapi Gatsby Blog</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          {
            data.allStrapiCategory.nodes.map(node => (
              <li key={node.id}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            )
            )
          }
        </ul>
      </header>
      <main>
        <section class="hero">
          <h2>Welcome to the hypest blog on the interweb. </h2><p>Checkout something cool!</p>
          <h2 class="pageTitle">{pageTitle}</h2>
        </section>
        <section class="content">
          {children}
        </section>
      </main>
      <footer>
        <div>
          <h2>About</h2>
          <p>Demo blog site using Strapi and Gatsby, Oct 2023</p>
        </div>
        <div>
          <h2>Article</h2>
          <p><a href="https://strapi.io/blog">Build a Blog Site using Strapi and Gatsby</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
The Layout component will render a header with the site title and a list of navigation links, a main element with a dynamic heading (from the pageTitle prop) with the contents passed into it using the children prop, and a footer.

import * as React from 'react': This enables you to use JSX inside your .js file.
import { Link, graphql, useStaticQuery } from 'gatsby': The Gatsby Link component is for linking pages within your site and the graphql tag helps build the GraphQL query using useStaticQuery.
import "./layout.css": This imports the styles you will define in src/components/layout.css to the Layout component.
Create Blog Home Page
Next, you will create the home page for the blog site. You will query data from Gatsby's GraphQL Data Layer and render a list of all the posts on the home page.

All pages for Gatsby sites are created in the src/pages folder.

Stop your Gatsby development server by pressing Ctrl plus C on your keyboard. Open up src/pages/index.js in your text editor. Delete the contents and update it with the following code:


// src/pages/index.js
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {

    return (
        <Layout pageTitle="Home Page">
        <ul class="postlist">
            {
                data.allStrapiPost.nodes.map(node => (
                    <li key={node.id}>
                        <Link class="postlink" to={`/${node.slug}`}><h3>{node.title}</h3></Link>
                        <div class="image-wrap">
                        <img class="cover" src={`${node.cover}`} alt={`Cover for ${node.title}`} />
                        <img class="avatar" src={`${node.author.avatar}`} alt={`Avatar for${node.author.name}`}/>
                        </div>
                        <p class="date">{node.date}</p>
                        <p class="name">Written by {node.author.name}</p>
                        <p class="postcategory"><Link to={`/${node.category.slug}`}>Category: {node.category.name}</Link></p>
                        <p class="description">{node.description}</p>
                    </li>
                )
                )
            }
            </ul>
        </Layout>
        )
}

export const query = graphql`
query {
allStrapiPost(sort: {date: DESC}) {
    nodes {
      author {
        avatar 
        name
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      id
      slug
      title
      category {
        name
        slug
      }
    }
  }
}
`

export const Head = () => <title>Home Page - Strapi Gatsby Blog</title>

export default IndexPage
Here is an explanation of what the code does:

The Layout component you created earlier is imported to render the reusable parts of the UI.
The snippet starting with const IndexPage = ({ data }) => defines a page component. It returns a JSX element which includes the markup to be rendered when your page loads. It receives a data prop which is used by a .map() method to iterate over the nodes array and render the list of blog posts with each blog post displaying a title, description, cover, date, category, andauthor.
The code block starting with export const query = graphql defines a page query. When the site gets built Gatsby runs the GraphQL query and exports the result to the IndexPage component as a prop called data.
The last two export statements ensure the page gets built.
In your frontend folder, restart your Gatsby development server:


npm run develop
Visit localhost:8000 in your browser to see the home page of your blog site.

Blog Home Page

You should see a list of the blog posts in descending chronological order. The links to the individual blog posts will not work since we have not implemented the logic yet.

Create Single Post Page
Gatsby provides the File System Route API which helps with creating pages dynamically. You will use it to dynamically create a single page for each blog post based on the post's slug attribute.

Create a new file named {strapiPost.slug}.js in the src/pages directory and add the following code:


import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
    return (
            <Layout pageTitle={data.strapiPost.title}>
            <img class="postcover" src={data.strapiPost.cover} alt={`Cover for ${data.strapiPost.title}`} />
            <p class="postdate">{data.strapiPost.date}</p>
            <img class="postavatar" src={data.strapiPost.author.avatar} alt={`Avatar for${data.strapiPost.author.name}`} />
            <p class="postauthor">Written by {data.strapiPost.author.name}</p>
            <p class="postcategory"><Link to={`/${data.strapiPost.category.slug}`}>Category: {data.strapiPost.category.name}</Link></p>
            <div class="postcontent" dangerouslySetInnerHTML={{ __html: data.strapiPost.content.data.childMarkdownRemark.html }} />
            </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    strapiPost(id: {eq: $id}) {
      author {
        avatar
        name
      }
      category {
        name
        slug
      }
      content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      slug
      title
    }
  }
`

export const Head = ({ data }) => <title>{data.strapiPost.title} - Strapi Gatsby Blog Site</title>

export default BlogPost
The Layout component is imported to render the reusable parts of the UI.
The snippet starting with const BlogPost = ({ data }) => defines a page component. It returns a JSX element which includes the markup to be rendered when your page loads. It receives a data prop which is used to render the blog post's title, description, date, content, author, and cover.
The code block starting with export const query = graphql defines a page query. The posts are filtered based on the query variable of the post's $id so that the correct contents are returned when the page is rendered.
In export const Head the title attribute of the post is included in the title of the page.
Restart your Gatsby development server and visit the home page of your blog site on localhost:8000. Click on any one of the links to an individual blog article and you should see the page loads with the correct content.

Individual Blog Post Page

Create Category Pages
In your src/pages folder, create a new file named {strapiCategory.slug}.js. This will dynamically create routes for each individual category for your blog. Each categroy page will display its own posts.

Add the following code to {strapiCategory.slug}.js:


import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Category = ({ data }) => {
    return (
            <Layout pageTitle={data.strapiCategory.name}>
        <ul class="postlist">
            {
                data.strapiCategory.posts.map(post => (
                    <li key={post.id}>
                        <Link class="postlink" to={`/${post.slug}`}><h3>{post.title}</h3></Link>
                        <div class="image-wrap">
                        <img class="cover" src={post.cover} alt={`Cover for ${post.title}`} />
                        <img class="avatar" src={post.author.avatar} alt={`Avatar for${post.author.name}`}/>
                        </div>
                        <p class="date">{post.date}</p>
                        <p class="name">Written by {post.author.name}</p>
                        <p class="description">{post.description}</p>
                    </li>
                )
                )
            }
            </ul>
            </Layout>
    )
}

export const query = graphql`
query ($id: String) {
  strapiCategory(id: {eq: $id}) {
    posts {
      author {
        avatar
        name
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      slug
      title
      id
    }
    name
    id
    slug
  }
}
`

export const Head = ({ data }) => <title>{data.strapiCategory.name} - Strapi Gatsby Blog Site</title>

export default Category
export const query defines a page query. The posts are filtered based on the query variable of the category's $id so that the posts matching the specific category are returned when the page is rendered.
The snippet starting with const Category = ({ data }) => defines a page component. It returns a JSX element which includes the markup to be rendered when your page loads. It receives a data prop which is used by a .map() method to iterate over the category's posts array and render the list of blog posts with each blog post displaying a title, description, cover,date, category, andauthor.
Restart your Gatsby development server and visit localhost:8000 and click on one of the categories listed in the header of your blog page like ai which means you will be visiting localhost:8000/ai. You should see a list of blog posts for the ai category only, likewise for the remaining categories.

AI Category Page

Add Styling
Add some styling to your blog site by opening src/components/layout.css and adding the following CSS code:


/*src/components/layout.css*/

html, body, div, 
h1, h2, h3, h4, h5, h6, 
ul, li, p, img {
	margin:0;
	padding:0;
}

img {
	border:none;
}

* {
	box-sizing:border-box;
}

ul,
li,
a {
    list-style: none;
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: underline;
}

.pagewrapper {
    margin: 0 auto;
    max-width: 960px;
}

body {
    font-size: 1.2em;
    line-height: 1.5;
    font-family: Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    background: #f9f9f9;
}

header {
    background-color: #FFF;
    display: flex;
    height: 4em;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5em;
    position: sticky;
    top: 0;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
    z-index: 100;
}

h1 {
    font-size: clamp(0.8em, 2.5vw, 2em);
}

header ul {
    display: flex;
    gap: 1em;
    align-items: center;
}

header a {
    text-transform: capitalize;
    font-size: clamp(0.8em, 2vw, 1.2em);
}

.hero {
    height: 12em;
    text-align: center;
    padding: 2em 0;
}

.hero h2 {
    text-wrap: balance;
}

.pageTitle {
    color: hsl(250, 92%, 60%);
    text-transform: capitalize;
}

.postlist {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5em;
    row-gap: 3em;
    justify-content: center;
    justify-items: center;
}

@media (max-width: 960px) {
    .postlist {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .postlist {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

.postlist h3 {
    font-size: clamp(0.8em, 1.5vw, 1.5em);
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
}

.postlist li {
    overflow: hidden;
    border-radius: 1em;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    width: 15em;
    padding: 1em 0;
}

.postlist .cover {
    height: 12em;
    object-fit: cover;
    width: 100%;
}

.image-wrap {
    position: relative;
}

.postlist .avatar {
    object-fit: cover;
    position: absolute;
    right: 2%;
    bottom: -10%;
    border-radius: 9999px;
    width: 3em;
    height: 3em;
}

.postlist p {
    padding-left: 0.5em;
}

.date, .name, .postcategory {
    font-size: 0.8em;
}

.postcategory {
    color: hsl(250, 92%, 60%);
}

.description {
    padding-top: 1em;
    font-size: clamp(0.7em, 1.25vw, 1em);
}

.postcover {
    width: 100%;
    object-fit: cover;
}

footer {
    margin-top: 3em;
    padding: 0.5em;
    background-color: hsl(250, 92%, 10%);
    color: hsl(250, 92%, 90%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.postcover, .postdate, .postauthor, .postcategory, .postcontent p {
    padding-bottom: 1em;
}

.postdate, .postauthor {
    font-size: clamp(0.6em, 1.2vw, 1.2em);
}

.postavatar {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    object-fit: cover;
}

footer h2 {
    font-size: clamp(0.5em, 1vw, 1em);
}

footer p {
    font-size: clamp(0.4em, 0.8vw, 0.8em);
    font-weight: 400;
}
Test out the site with the design added. Your blog site home page should be similar to the screenshot below:

Styled Home Page

Build Project
Now that your Strapi Gatsby blog is up and running, you will need to build the project and get static files of your blog that can be deployed.

Stop your Gatsby frontend development server and enter the following command: (Make sure your Strapi development server is running)


yarn build
After the build completes, there should be a folder named public in the root of your Gatsby project folder with all the necessary HTML, CSS, JavaScript, and media files required to view your blog site.

Build Result

Test out your build by previewing the index.html file in the public folder, it should give you the exact same blog page design with all the links working.

Deploy Blog
After building your static blog, you will need to deploy it to a static file host. In this tutorial, you will use Cloudflare Pages, but any other static file hosting service like GitHub Pages, Vercel, Netlify, etc can work.

Create a Cloudflare account by visiting the Cloudflare Signup Page

Cloudflare Signup Screenshot

In the root of your frontend folder add wrangler (Cloudflare Command line tool) as a devdependency.


yarn add --dev wrangler
Next, run the following command to deploy your static blog to Cloudflare Pages.


yarn wrangler pages deploy public
Give the wrangler tool permission to access your public directory and deploy the assets.

Allow Cloudflare Access

Give your project a name like strapi-gatsby-blog and wait for the wrangler tool to upload the assets to your site.

Name your Cloudflare Project

After deployment is complete you should get a unique URL where your site has been deployed.

Cloudflare Unique URL success

You can check for my deployment at Tutorial Deployment Link.

Bonus
If you want to deploy your Strapi Backend Server as well, check out this tutorial: How to Deploy your Strapi Project to Strapi Cloud.

Maintenance and Updates
Maintaining your blog involves keeping your dependencies updated and ensuring the continued performance and security of your application.

Regular Updates
Strapi: Regularly check for updates and apply them to benefit from security patches and new features.
Gatsby: Keep your Gatsby version and plugins up to date.
Monitoring Performance
Use monitoring tools to keep an eye on your site's performance and uptime.

Google Analytics: Track user engagement and page views.
Lighthouse: Audit your site's performance, accessibility, and SEO.
Backup and Recovery
Implement a backup strategy for your Strapi data, especially if you're self-hosting.

Database Backups: Regularly back up your database.
Media Assets: Store media files in a cloud storage service with versioning enabled.
Conclusion
By combining Gatsby and Strapi, you've created a powerful and efficient static blog that offers excellent performance and a flexible content management system. This setup not only provides a great developer experience but also ensures your readers enjoy fast load times and a seamless experience.

Feel free to expand upon this foundation by adding features like search functionality, comment systems, or more advanced SEO optimizations.
