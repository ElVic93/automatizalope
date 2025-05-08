import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';

interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ sections, className = '' }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-[var(--color-gray-lighter)] py-8 ${className}`}>
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-[var(--color-primary)]">
                Automatizalo.pe
              </span>
            </Link>
            <p className="mt-3 text-sm text-[var(--color-text-light)]">
              Transformando procesos manuales en soluciones automatizadas para tu negocio.
            </p>
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-[var(--color-heading)] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[var(--color-gray-light)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[var(--color-text-light)] mb-4 md:mb-0">
              © {currentYear} Automatizalo.pe. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-whatsapp)]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 