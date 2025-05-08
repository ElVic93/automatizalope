import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Category = ({ data }) => {
  const category = data.strapiCategory;
  const articles = category.articles || [];

  return (
    <Layout title={category.name} description={`Artículos de la categoría ${category.name}`}> 
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary-dark)] text-center">
            {category.name}
          </h1>
          {articles.length === 0 ? (
            <div className="text-center text-lg text-gray-500 py-20">No hay artículos en esta categoría.</div>
          ) : (
            <ul className="grid gap-8 md:grid-cols-2">
              {articles.map(article => (
                <li key={article.id}>
                  <Card className="h-full flex flex-col">
                    {article.cover?.url && (
                      <div className="w-full h-48 rounded-t-lg overflow-hidden mb-4">
                        <img 
                          src={article.cover.url} 
                          alt={article.cover.alternativeText || `Cover for ${article.title}`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-between p-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-primary-dark)]">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{article.publishedAt}</p>
                        <p className="text-base text-gray-700 mb-4 line-clamp-3">{article.description}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-auto">
                        <span className="text-sm text-gray-700">Por {article.author?.name || 'Autor desconocido'}</span>
                        <Button to={`/blog/${article.slug}`} size="sm" className="ml-auto">
                          Leer más
                        </Button>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-12 text-center">
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Volver al Blog
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
query ($id: String) {
  strapiCategory(id: {eq: $id}) {
    articles {
      author {
        name
      }
      cover {
        url
        alternativeText
        width
        height
      }
      publishedAt(formatString: "D [de] MMMM [de] YYYY")
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
`;

export default Category;