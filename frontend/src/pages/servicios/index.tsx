import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Grid from '../../components/ui/Grid';
import { mockServices } from '../../data/mockData';

const ServicesPage: React.FC = () => {
  return (
    <Layout
      title="Servicios"
      description="Descubre cómo Automatizalo.pe puede transformar tus procesos de negocio con nuestras soluciones de automatización."
    >
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl mb-8">
              Soluciones tecnológicas diseñadas para optimizar y transformar tus procesos de negocio.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <Grid cols={3} gap="lg">
            {mockServices.map((service) => (
              <Card key={service.id} variant="elevated">
                <Card.Header>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-[var(--color-text-light)] mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/servicios/${service.title
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, '')
                    .replace(/\s+/g, '-')}`}>
                    <Button variant="outline" fullWidth>
                      Más Información
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-gray-lighter)] py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a
              automatizar tus procesos.
            </p>
            <Link to="/contacto">
              <Button variant="primary" size="lg">
                Contactar Ahora
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ServicesPage; 