import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';

const BlogPost = ({ data }) => {
  const post = data.strapiArticle;

  if (!post) {
    return (
      <Layout title="Error" description="Post no encontrado">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Post no encontrado</h1>
            <p className="mb-8">Lo sentimos, el artículo que estás buscando no existe.</p>
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Volver al Blog
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout
      title={post.title}
      description={post.description}
    >
      <Container>
        <article className="max-w-3xl mx-auto py-12">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-4">
              <span className="bg-[var(--color-primary-light)] bg-opacity-10 px-3 py-1 rounded-full">
                {post.category?.name || 'Sin categoría'}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary-dark)]">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                <span className="text-lg font-bold text-white">
                  {post.author?.name?.charAt(0) || 'A'}
                </span>
              </div>
              <div>
                <div className="font-medium">{post.author?.name || 'Autor desconocido'}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            
            {post.cover && (
              <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
                <img 
                  src={post.cover.url} 
                  alt={post.cover.alternativeText || post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <p className="text-xl text-[var(--color-text-secondary)] italic">
              {post.description}
            </p>
          </header>
          
          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content?.data?.childMarkdownRemark?.html || '' }} />
          </div>
          
          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-[var(--color-gray-light)]">
            <Card variant="bordered" className="bg-[var(--color-gray-lightest)]">
              <Card.Body>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-white">
                      {post.author?.name?.charAt(0) || 'A'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Escrito por {post.author?.name || 'Autor desconocido'}</h3>
                    <p className="text-[var(--color-text-secondary)]">
                      Especialista en automatización de procesos y transformación digital.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </footer>
          
          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Volver al Blog
            </Link>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    strapiArticle(id: {eq: $id}) {
      id
      title
      description
      publishedAt(formatString: "YYYY-MM-DD")
      content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      cover {
        url
        alternativeText
        width
        height
      }
      author {
        name
      }
      category {
        name
        slug
      }
    }
  }
`;

export default BlogPost;