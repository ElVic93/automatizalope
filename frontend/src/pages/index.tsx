import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Grid from '../components/ui/Grid';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Inicio"
      description="Automatizalo.pe - Transformando procesos manuales en soluciones automatizadas para tu negocio."
    >
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Frame/Image */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            }}
          >
            {/* Circuito digital pattern overlay */}
            <div className="absolute inset-0 opacity-15 bg-dots"></div>
            
            {/* Radial glow effect */}
            <div className="absolute inset-0" 
                 style={{
                   background: 'radial-gradient(circle at center, rgba(0,194,255,0.4) 0%, rgba(0,85,255,0) 60%)',
                 }}>
            </div>
            
            {/* Vertical light beam effect */}
            <div className="absolute inset-0 opacity-20"
                 style={{
                   background: 'linear-gradient(to bottom, rgba(0,194,255,0.3) 0%, rgba(0,85,255,0) 50%, rgba(0,194,255,0.3) 100%)',
                 }}>
            </div>
            
            {/* Hero Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Imagen central destacada */}
              <div className="absolute w-4/5 h-4/5 mx-auto flex items-center justify-center">
                <StaticImage
                  src="../images/hero-image.png"
                  alt=""
                  placeholder="blurred"
                  className="w-full h-full"
                  imgStyle={{ 
                    objectFit: 'contain',
                  }}
                  style={{
                    opacity: 0.85,
                    filter: 'drop-shadow(0 0 30px rgba(0, 194, 255, 0.5))'
                  }}
                  loading="eager"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg">
              Automatiza tus procesos, potencia tu negocio
            </h1>
            <p className="text-xl md:text-2xl mb-10 drop-shadow-md">
              Transformamos tus tareas manuales en soluciones automatizadas,
              permitiéndote enfocarte en lo que realmente importa.
            </p>
            <Button variant="secondary" size="lg" className="shadow-xl transform hover:scale-105 transition-all">
              Comienza Ahora
            </Button>
          </div>
        </Container>
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