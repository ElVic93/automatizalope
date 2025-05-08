import React, { useState } from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import Button from './Button';

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items: NavItem[];
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ items, className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 ${className}`}>
      <Container>
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-6">
              <span className="text-xl font-bold text-[var(--color-primary)]">
                Automatizalo.pe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
              <div className="flex space-x-8">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium border-b-2 border-transparent hover:border-[var(--color-primary-light)] py-1"
                    activeClassName="text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link to="/contacto">
                <Button 
                  variant="primary" 
                  size="sm"
                  className="px-6"
                >
                  Contactar
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-lighter)] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 border-t border-gray-100 pt-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 px-3 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-lighter)] rounded"
                    onClick={() => setIsMenuOpen(false)}
                    activeClassName="text-[var(--color-primary)] bg-[var(--color-gray-lighter)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6 px-3 pb-3">
                  <Link to="/contacto">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      fullWidth
                    >
                      Contactar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar; 