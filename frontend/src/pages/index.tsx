import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Grid from '../components/ui/Grid';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollReveal from '../components/animation/ScrollReveal';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Inicio"
      description="Automatizalo.pe - Transformando procesos manuales en soluciones automatizadas para tu negocio."
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Frame with Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Gradient base */}
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            }}
          >
            {/* Circuito pattern overlay */}
            <div className="absolute inset-0 opacity-15 bg-dots"></div>
            
            {/* Radial glow effect */}
            <div className="absolute inset-0" 
              style={{
                background: 'radial-gradient(circle at center, rgba(0,194,255,0.4) 0%, rgba(0,85,255,0) 60%)',
              }}>
            </div>
            
            {/* Full-width hero image */}
            <div className="absolute inset-0">
              <StaticImage
                src="../images/hero-image.png"
                alt=""
                placeholder="blurred"
                className="w-full h-full !block"
                imgStyle={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                style={{
                  opacity: 0.6,
                  mixBlendMode: 'screen',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                breakpoints={[320, 480, 640, 768, 1024, 1366, 1600]}
              />
              
              {/* Overlay to ensure text readability - Oscurecido para mejorar legibilidad */}
              <div className="absolute inset-0 z-[1]" style={{
                background: 'linear-gradient(135deg, rgba(0,85,255,0.9) 0%, rgba(0,36,107,0.9) 100%)',
                mixBlendMode: 'multiply',
              }}></div>
            </div>
            
            {/* Móvil: Capa de respaldo en caso de que la imagen no cargue correctamente */}
            <div className="absolute inset-0 bg-[var(--color-primary)] md:hidden opacity-40"></div>
          </div>
        </div>
        
        {/* Content */}
        <Container className="relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal animation="fade-in-down" duration="normal">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 drop-shadow-lg">
                Automatiza tus procesos, potencia tu negocio
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={200} duration="normal">
              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 drop-shadow-md">
                Transformamos tus tareas manuales en soluciones automatizadas,
                permitiéndote enfocarte en lo que realmente importa.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400} duration="fast">
              <Button variant="secondary" size="lg" className="shadow-xl transform hover:scale-105 transition-all">
                Comienza Ahora
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-pattern">
        <Container>
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Nuestros Servicios
            </h2>
          </ScrollReveal>
          
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
              <ScrollReveal 
                key={i} 
                animation="fade-in-up" 
                delay={100 * (i + 1)} 
                className="h-full"
              >
                <Card variant="elevated" className="shadow-md hover:shadow-lg transition-all h-full hover-lift">
                  <Card.Header>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {service.title}
                    </h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      {service.description}
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline" fullWidth className="hover:bg-[var(--color-primary-light)] hover:text-white">
                      Más Información
                    </Button>
                  </Card.Footer>
                </Card>
              </ScrollReveal>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-accent py-16 md:py-20 relative overflow-hidden">
        {/* Background with Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Gradient base */}
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent) 0%, #7B1FA2 100%)',
            }}
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-15 bg-dots"></div>
            
            {/* Hero image */}
            <div className="absolute inset-0">
              <StaticImage
                src="../images/hero2-image.png"
                alt=""
                placeholder="blurred"
                className="w-full h-full !block"
                imgStyle={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                style={{
                  opacity: 0.6,
                  mixBlendMode: 'screen',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                breakpoints={[320, 480, 640, 768, 1024, 1366, 1600]}
              />
              
              {/* Overlay to ensure text readability */}
              <div className="absolute inset-0 z-[1]" style={{
                background: 'linear-gradient(135deg, rgba(142, 36, 170, 0.9) 0%, rgba(82, 21, 99, 0.9) 100%)',
                mixBlendMode: 'multiply',
              }}></div>
            </div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                ¿Listo para transformar tu negocio?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={200}>
              <p className="text-base md:text-xl mb-6 md:mb-8 drop-shadow-md">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a
                automatizar tus procesos.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400}>
              <Button variant="secondary" size="lg" className="shadow-xl transform hover:scale-105 transition-all">
                Contactar Ahora
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default HomePage; 