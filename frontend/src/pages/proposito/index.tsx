import React from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Grid from '../../components/ui/Grid';
import { purposeContent } from '../../data/mockData.js';
import { StaticImage } from 'gatsby-plugin-image';

const PurposePage: React.FC = () => {
  return (
    <Layout
      title="Propósito"
      description="Conoce por qué existe Automatizalo.pe y nuestra misión de transformar procesos manuales en soluciones automatizadas."
    >
      {/* Hero Section */}
      <section className="py-20 bg-pattern">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary-dark)]">
              {purposeContent.title}
            </h1>
            <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl mb-10 text-[var(--color-text-primary)]">
              {purposeContent.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[var(--color-primary-light)] bg-opacity-10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-10">
              <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-accent)]"></div>
              <div className="pl-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary-dark)]">
                  Nuestra Visión
                </h2>
                <p className="text-lg md:text-xl italic text-[var(--color-text-primary)]">
                  {purposeContent.vision}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--color-primary-dark)]">
            Nuestros Valores
          </h2>
          <Grid cols={2} gap="lg">
            {purposeContent.values.map((value, index) => (
              <Card key={index} variant="bordered" className="h-full">
                <Card.Header>
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-primary)]">
                    {value.title}
                  </h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-[var(--color-text-secondary)]">
                    {value.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[var(--color-primary)] text-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nuestro Equipo
          </h2>
          <Grid cols={3} gap="lg">
            {purposeContent.team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-[var(--color-primary-light)]">
                  {/* Placeholder image, in production would use member.imageUrl */}
                  <div className="w-full h-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <span className="text-5xl font-bold opacity-30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[var(--color-secondary)] mb-3">{member.role}</p>
                <p className="text-sm opacity-80">{member.bio}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-primary-dark)]">
              ¿Quieres ser parte de nuestra misión?
            </h2>
            <p className="text-lg mb-8 text-[var(--color-text-secondary)]">
              Contáctanos para conocer cómo podemos ayudarte a transformar tu negocio a través de la automatización.
            </p>
            <a href="/contacto" className="inline-block px-8 py-4 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:shadow-lg transition-all">
              Hablemos de tu proyecto
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default PurposePage; 