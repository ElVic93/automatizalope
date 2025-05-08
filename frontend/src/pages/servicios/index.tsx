import React from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Grid from '../../components/ui/Grid';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Automatización de Procesos',
      description: 'Transformamos tus tareas manuales en procesos automatizados, aumentando la eficiencia y reduciendo errores.',
      features: [
        'Análisis de procesos actuales',
        'Diseño de soluciones automatizadas',
        'Implementación y seguimiento'
      ]
    },
    {
      title: 'Integración de Sistemas',
      description: 'Conectamos tus diferentes sistemas y aplicaciones para un flujo de trabajo sin interrupciones.',
      features: [
        'Integración API',
        'Sincronización de datos',
        'Monitoreo en tiempo real'
      ]
    },
    {
      title: 'Desarrollo de Software a Medida',
      description: 'Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio.',
      features: [
        'Análisis de requerimientos',
        'Desarrollo ágil',
        'Soporte continuo'
      ]
    }
  ];

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
            {services.map((service, index) => (
              <Card key={index} variant="elevated">
                <Card.Header>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-[var(--color-text-light)] mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline" fullWidth>
                    Más Información
                  </Button>
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
            <Button variant="primary" size="lg">
              Contactar Ahora
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ServicesPage; 