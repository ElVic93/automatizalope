import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Grid from '../components/ui/Grid';
import { Service } from '../data/mockData';

interface ServiceTemplateProps {
  pageContext: {
    mockData?: Service;
  };
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ pageContext }) => {
  // Use mock data during development
  const service = pageContext.mockData;
  
  if (!service) {
    return (
      <Layout title="Error" description="Servicio no encontrado">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Servicio no encontrado</h1>
            <p className="mb-8">Lo sentimos, el servicio que estás buscando no existe.</p>
            <Link 
              to="/servicios" 
              className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Ver todos los servicios
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout
      title={service.title}
      description={service.description}
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            }}
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-15 bg-dots"></div>
            
            {/* Image overlay (optional) */}
            {service.imageUrl && (
              <div className="absolute inset-0">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 blend-overlay"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
              {service.description}
            </p>
            <Button variant="secondary" size="lg" className="shadow-xl transform hover:scale-105 transition-all">
              {service.cta.text}
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[var(--color-primary-dark)]">
              Características del Servicio
            </h2>
            
            <div className="space-y-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                      {feature.split(':')[0]}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      {feature.includes(':') ? feature.split(':')[1] : feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Overview Section */}
      <section className="py-16 md:py-24 bg-[var(--color-gray-lightest)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[var(--color-primary-dark)]">
              Cómo Trabajamos
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-[var(--color-primary)] hidden md:block"></div>
              
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    title: 'Diagnóstico',
                    description: 'Analizamos tus procesos actuales para identificar oportunidades de mejora.'
                  },
                  {
                    title: 'Diseño',
                    description: 'Creamos un plan personalizado que se adapta perfectamente a las necesidades de tu negocio.'
                  },
                  {
                    title: 'Implementación',
                    description: 'Ponemos en marcha la solución de manera eficiente y con mínimas interrupciones.'
                  },
                  {
                    title: 'Soporte',
                    description: 'Te acompañamos después de la implementación para asegurar resultados óptimos.'
                  }
                ].map((step, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-24`}>
                    <div className={`md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">{step.title}</h3>
                      <p className="text-[var(--color-text-secondary)]">{step.description}</p>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center my-4 md:my-0 z-10">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-primary-dark)]">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-lg mb-8 text-[var(--color-text-secondary)]">
              Contáctanos hoy para conocer cómo nuestro servicio de {service.title.toLowerCase()} puede impulsar la eficiencia de tu empresa.
            </p>
            <Link 
              to={service.cta.url} 
              className="inline-block px-8 py-4 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:shadow-lg transition-all"
            >
              {service.cta.text}
            </Link>
          </div>
        </Container>
      </section>

      {/* Back to Services */}
      <section className="pb-16">
        <Container>
          <div className="text-center">
            <Link 
              to="/servicios" 
              className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Ver todos los servicios
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ServiceTemplate; 