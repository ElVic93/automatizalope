import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { Link } from "gatsby";

const NotFoundPage: React.FC = () => (
  <Layout 
    title="404: Página no encontrada"
    description="La página que buscas no existe."
  >
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">404: Página no encontrada</h1>
      <p className="text-xl mb-8">La página que estás buscando no existe.</p>
      <Link to="/" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors">
        Regresar al inicio
      </Link>
    </div>
  </Layout>
);

export const Head = () => <SEO title="404: Página no encontrada" />;

export default NotFoundPage;
