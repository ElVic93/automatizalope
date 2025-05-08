import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Grid from '../components/ui/Grid';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Inicio"
      description="Automatizalo.pe - Transformando procesos manuales en soluciones automatizadas para tu negocio."
    >
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20 section-primary">
        <div className="bg-dots">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Automatiza tus procesos, potencia tu negocio
              </h1>
              <p className="text-xl mb-8">
                Transformamos tus tareas manuales en soluciones automatizadas,
                permitiéndote enfocarte en lo que realmente importa.
              </p>
              <Button variant="secondary" size="lg" className="shadow-lg transform hover:scale-105 transition-all">
                Comienza Ahora
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-pattern">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-heading)]">
            Nuestros Servicios
          </h2>
          <Grid cols={3} gap="lg">
            {[
              {
                title: "Automatización de Procesos",
                description: "Optimiza tus operaciones eliminando tareas repetitivas y reduciendo errores humanos."
              },
              {
                title: "Integración de Sistemas",
                description: "Conecta tus aplicaciones existentes para crear flujos de trabajo sin interrupciones."
              },
              {
                title: "Desarrollo a Medida",
                description: "Soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio."
              }
            ].map((service, i) => (
              <Card key={i} variant="elevated" className="shadow-md hover:shadow-lg transition-all">
                <Card.Header>
                  <h3 className="text-xl font-semibold text-[var(--color-heading)]">{service.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-[var(--color-text-light)]">
                    {service.description}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline" fullWidth className="hover:bg-[var(--color-primary-light)] hover:text-white">
                    Más Información
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-accent py-20">
        <div className="bg-dots">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-heading)]">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-xl mb-8 text-[var(--color-text)]">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a
                automatizar tus procesos.
              </p>
              <Button variant="primary" size="lg" className="shadow-md">
                Contactar Ahora
              </Button>
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 