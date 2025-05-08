import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Grid from '../../components/ui/Grid';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'automatizacion', name: 'Automatización' },
    { id: 'productividad', name: 'Productividad' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'casos-de-exito', name: 'Casos de Éxito' }
  ];

  // Mock data para desarrollo
  const posts = [
    {
      id: 1,
      title: 'Cómo la automatización puede transformar tu negocio',
      excerpt: 'Descubre las ventajas de implementar procesos automatizados en tu empresa y cómo esto puede impulsar tu crecimiento.',
      category: 'automatizacion',
      date: '2024-03-15',
      author: 'Juan Pérez',
      readTime: '5 min'
    },
    {
      id: 2,
      title: '5 herramientas esenciales para aumentar la productividad',
      excerpt: 'Una guía completa de las mejores herramientas que puedes implementar hoy mismo para mejorar la eficiencia de tu equipo.',
      category: 'productividad',
      date: '2024-03-10',
      author: 'María García',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Tendencias tecnológicas para 2024',
      excerpt: 'Las tecnologías emergentes que están transformando la manera en que las empresas operan y compiten en el mercado.',
      category: 'tecnologia',
      date: '2024-03-05',
      author: 'Carlos Rodríguez',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Caso de éxito: Transformación digital en el sector retail',
      excerpt: 'Cómo una empresa retail logró aumentar sus ventas en un 40% implementando soluciones de automatización.',
      category: 'casos-de-exito',
      date: '2024-03-01',
      author: 'Ana Martínez',
      readTime: '8 min'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Blog"
      description="Artículos, casos de éxito y recursos sobre automatización, productividad y transformación digital."
    >
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl mb-8">
              Descubre artículos, casos de éxito y recursos para impulsar la
              transformación digital de tu negocio.
            </p>
          </div>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-[var(--color-gray-lighter)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input
                type="search"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <Container>
          <Grid cols={2} gap="lg">
            {filteredPosts.map(post => (
              <Card key={post.id} variant="elevated">
                <Card.Header>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[var(--color-text-light)]">
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-sm text-[var(--color-text-light)]">
                      {post.readTime} de lectura
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-[var(--color-text-light)]">
                    {post.excerpt}
                  </p>
                </Card.Header>
                <Card.Footer>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--color-text-light)]">
                      Por {post.author}
                    </span>
                    <Button variant="outline" size="sm">
                      Leer más
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[var(--color-gray-lighter)] py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="text-xl mb-8">
              Recibe las últimas actualizaciones sobre automatización y
              transformación digital directamente en tu correo.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow"
              />
              <Button variant="primary">
                Suscribirse
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default BlogPage; 