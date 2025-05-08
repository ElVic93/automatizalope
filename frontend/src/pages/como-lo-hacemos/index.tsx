import React from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';

const HowWeDoItPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Análisis y Diagnóstico',
      description: 'Evaluamos tus procesos actuales para identificar oportunidades de mejora y automatización.',
      details: [
        'Entrevistas con stakeholders',
        'Mapeo de procesos actuales',
        'Identificación de cuellos de botella',
        'Definición de KPIs'
      ]
    },
    {
      number: '02',
      title: 'Diseño de Solución',
      description: 'Creamos una propuesta personalizada que se alinea con tus objetivos de negocio.',
      details: [
        'Arquitectura de la solución',
        'Selección de tecnologías',
        'Plan de implementación',
        'Estimación de recursos'
      ]
    },
    {
      number: '03',
      title: 'Desarrollo e Implementación',
      description: 'Construimos e implementamos la solución de manera iterativa y colaborativa.',
      details: [
        'Desarrollo ágil',
        'Pruebas continuas',
        'Integración con sistemas existentes',
        'Capacitación del equipo'
      ]
    },
    {
      number: '04',
      title: 'Monitoreo y Optimización',
      description: 'Aseguramos el funcionamiento óptimo y realizamos mejoras continuas.',
      details: [
        'Monitoreo en tiempo real',
        'Análisis de rendimiento',
        'Ajustes y optimizaciones',
        'Soporte continuo'
      ]
    }
  ];

  return (
    <Layout
      title="Cómo lo Hacemos"
      description="Descubre nuestro proceso metodológico para transformar tus procesos de negocio."
    >
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Proceso
            </h1>
            <p className="text-xl mb-8">
              Una metodología probada para transformar tus procesos de negocio
              de manera eficiente y efectiva.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-[var(--color-gray-lighter)] p-8 rounded-lg h-full">
                    <span className="text-[var(--color-primary)] text-4xl font-bold mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-[var(--color-text-light)] mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center">
                  <div className="relative w-full h-64 bg-[var(--color-gray-lighter)] rounded-lg">
                    {/* Aquí irá una imagen ilustrativa del paso */}
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-light)]">
                      Imagen ilustrativa
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-gray-lighter)] py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para transformar tus procesos?
            </h2>
            <p className="text-xl mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a
              implementar este proceso en tu negocio.
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

export default HowWeDoItPage; 