import React, { useState, useRef } from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Card from '../../components/ui/Card';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({ submitted: false });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show feedback during form submission
    setFormStatus({
      submitted: true,
      message: 'Enviando mensaje...'
    });
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
      });
      
      // Optional: Reset form after successful submission
      // setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Submit form with Ctrl+Enter or Command+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <Layout
      title="Contacto"
      description="Contáctanos para transformar tus procesos de negocio con nuestras soluciones de automatización."
    >
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20" aria-labelledby="contact-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" id="contact-heading">
              Contáctanos
            </h1>
            <p className="text-xl mb-8">
              Estamos aquí para ayudarte a transformar tus procesos de negocio.
              Agenda una consulta gratuita y descubre cómo podemos ayudarte.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20" aria-label="Formulario de contacto e información">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card variant="elevated">
                <Card.Header>
                  <h2 className="text-2xl font-bold mb-6" id="form-heading">Envíanos un mensaje</h2>
                </Card.Header>
                <Card.Body>
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6" 
                    ref={formRef} 
                    aria-labelledby="form-heading"
                    onKeyDown={handleKeyDown}
                    noValidate
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        autoComplete="name"
                        helperText="Ingresa tu nombre completo"
                      />
                    
                      <Input
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        autoComplete="email"
                        helperText="Ingresa tu email de contacto"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Teléfono"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        helperText="Opcional"
                      />
                      
                      <Input
                        label="Empresa"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        helperText="Opcional"
                      />
                    </div>
                    
                    <Textarea
                      label="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      aria-required="true"
                      helperText="Cuéntanos cómo podemos ayudarte"
                    />
                    
                    {formStatus.message && (
                      <div 
                        className={`p-3 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}
                        aria-live="polite"
                        role="status"
                      >
                        {formStatus.message}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth
                        disabled={formStatus.submitted && !formStatus.success}
                        loading={formStatus.submitted && !formStatus.success}
                        ariaLabel="Enviar mensaje de contacto"
                      >
                        Enviar mensaje
                      </Button>
                      
                      <p className="text-sm text-[var(--color-text-light)]">
                        <span aria-hidden="true">💡</span> Presiona <kbd className="mx-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">Ctrl</kbd>+<kbd className="mx-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">Enter</kbd> para enviar
                      </p>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="mr-2" aria-hidden="true">📍</span>
                    <span>Lima, Perú</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2" aria-hidden="true">📧</span>
                    <a 
                      href="mailto:contacto@automatizalo.pe" 
                      className="text-[var(--color-primary)] hover:underline focus:outline-offset-4"
                    >
                      contacto@automatizalo.pe
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2" aria-hidden="true">📱</span>
                    <a 
                      href="tel:+51999999999" 
                      className="text-[var(--color-primary)] hover:underline focus:outline-offset-4"
                    >
                      +51 999 999 999
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
                <div className="space-y-2">
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    as="a" 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Visita nuestro perfil de LinkedIn"
                  >
                    <span className="mr-1" aria-hidden="true">📊</span> LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    as="a" 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    ariaLabel="Visita nuestro perfil de Twitter"
                  >
                    <span className="mr-1" aria-hidden="true">🐦</span> Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    as="a" 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    ariaLabel="Visita nuestro perfil de Instagram"
                  >
                    <span className="mr-1" aria-hidden="true">📸</span> Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Floating WhatsApp Button with improved accessibility */}
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors focus:outline-offset-4 z-50"
        aria-label="Contáctanos por WhatsApp"
      >
        <span className="sr-only">WhatsApp</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </Layout>
  );
};

export default ContactPage;