import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Grid from '../../components/ui/Grid';
import ScrollReveal from '../../components/animation/ScrollReveal';
import { FaWhatsapp, FaHeadset, FaSync, FaBullhorn, FaRobot, FaChartLine } from 'react-icons/fa';

const services = [
  {
    id: '1',
    title: 'WhatsApp con IA para Ventas',
    description: 'Conectamos tu WhatsApp con un asistente inteligente capaz de responder consultas frecuentes, calificar prospectos automáticamente y derivarlos a tu equipo de ventas cuando sea necesario. ¡Disponible 24/7 y sin descanso!',
    icon: <FaWhatsapp className="text-3xl text-[var(--color-primary)]" />,
    features: [
      'Respuesta automática a consultas frecuentes',
      'Calificación inteligente de prospectos',
      'Derivación automática a vendedores',
      'Disponibilidad 24/7',
      'Integración con tu CRM'
    ],
    cta: {
      text: 'Solicitar demo',
      url: '/contacto'
    }
  },
  {
    id: '2',
    title: 'Atención al Cliente Automatizada',
    description: 'Creamos flujos de respuesta automáticos para atención al cliente por WhatsApp, formularios web o redes sociales. Resuelve dudas comunes al instante y mejora la experiencia sin necesidad de agentes humanos en todo momento.',
    icon: <FaHeadset className="text-3xl text-[var(--color-primary)]" />,
    features: [
      'Flujos de conversación personalizados',
      'Integración multi-canal',
      'Respuestas instantáneas',
      'Escalado a agentes humanos cuando sea necesario',
      'Análisis de satisfacción del cliente'
    ],
    cta: {
      text: 'Conocer más',
      url: '/contacto'
    }
  },
  {
    id: '3',
    title: 'Automatización de Tareas Internas',
    description: 'Desde enviar reportes hasta mover información entre herramientas como Google Sheets, Notion, CRMs o plataformas propias. Hacemos que todo se conecte sin intervención manual.',
    icon: <FaSync className="text-3xl text-[var(--color-primary)]" />,
    features: [
      'Integración entre múltiples plataformas',
      'Automatización de reportes',
      'Sincronización de datos en tiempo real',
      'Reducción de errores humanos',
      'Ahorro de tiempo en tareas repetitivas'
    ],
    cta: {
      text: 'Agendar consulta',
      url: '/contacto'
    }
  },
  {
    id: '4',
    title: 'Automatización de Marketing',
    description: 'Automatizamos tus campañas de marketing para que trabajen solas mientras tú te enfocas en vender. Enviamos correos personalizados, mensajes de seguimiento y alertas automáticas según el comportamiento del cliente.',
    icon: <FaBullhorn className="text-3xl text-[var(--color-primary)]" />,
    features: [
      'Campañas de email marketing automatizadas',
      'Seguimiento de leads',
      'Personalización basada en comportamiento',
      'Integración con herramientas populares',
      'Análisis de resultados en tiempo real'
    ],
    cta: {
      text: 'Solicitar información',
      url: '/contacto'
    }
  },
  {
    id: '5',
    title: 'Bots Inteligentes',
    description: 'Diseñamos bots que simulan trabajo humano: recopilar datos, hacer scraping, enviar correos automáticos o interactuar con APIs de terceros. Todo adaptado a tus flujos reales.',
    icon: <FaRobot className="text-3xl text-[var(--color-primary)]" />,
    features: [
      'Web scraping automatizado',
      'Recopilación de datos',
      'Interacción con APIs',
      'Automatización de correos',
      'Personalización según necesidades'
    ],
    cta: {
      text: 'Ver casos de éxito',
      url: '/contacto'
    }
  },
  {
    id: '6',
    title: 'Consultoría Digital',
    description: 'Asesoramiento especializado en automatización, integración de herramientas y optimización de procesos para tu negocio. Orientamos nuestros servicios a resultados medibles.',
    icon: <FaChartLine className="text-3xl text-[var(--color-primary)]" />,
    features: [
      'Análisis de procesos actuales',
      'Identificación de oportunidades',
      'Plan de implementación',
      'Capacitación de equipos',
      'Seguimiento de resultados'
    ],
    cta: {
      text: 'Agendar consulta',
      url: '/contacto'
    }
  }
];

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
            {services.map((service) => (
              <ScrollReveal key={service.id} animation="fade-in-up">
                <Card variant="elevated" className="h-full hover-lift">
                  <Card.Header>
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-[var(--color-text-light)] mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[var(--color-text-light)]">
                          <span className="mr-2 text-[var(--color-primary)]">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={service.cta.url}>
                      <Button variant="outline" fullWidth className="hover:bg-[var(--color-primary-light)] hover:text-white">
                        {service.cta.text}
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </ScrollReveal>
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