import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const UsingDSG: React.FC = () => (
  <Layout
    title="Using DSG"
    description="Página de ejemplo usando DSG (Deferred Static Generation)"
  >
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">
        Hello from a <b>DSG Page</b>
      </h1>
      <p className="mb-4">This page is not created until requested by a user.</p>
      <p className="mb-6">
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"
           className="text-primary hover:text-primary-dark">
          documentation about Deferred Static Generation
        </a>
        .
      </p>
      <Link to="/" className="text-primary hover:text-primary-dark">Go back to the homepage</Link>
    </div>
  </Layout>
);

export const Head = () => <SEO title="Using DSG" />;

export default UsingDSG; 