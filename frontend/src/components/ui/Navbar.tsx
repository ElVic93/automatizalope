import React, { useState, useEffect, useRef } from 'react';
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        setIsMenuOpen(false);
        // Focus on the menu button when menu is closed
        mobileMenuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };
      
      mobileMenuRef.current.addEventListener('keydown', handleTabKey);
      
      // Focus first element when menu opens
      firstElement?.focus();
      
      return () => {
        mobileMenuRef.current?.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md border-b border-gray-100 ${className}`}>
      <Container>
        <nav className="py-4" aria-label="Navegación principal">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-6" aria-label="Automatizalo.pe - Ir a inicio">
              <span className="text-xl font-bold text-[var(--color-primary)]">
                Automatizalo.pe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
              <div className="flex space-x-8" role="menubar">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium border-b-2 border-transparent hover:border-[var(--color-primary-light)] py-1"
                    activeClassName="text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
                    role="menuitem"
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
                  aria-label="Contactar con nosotros"
                >
                  Contactar
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              ref={mobileMenuButtonRef}
              className="md:hidden rounded-md p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-lighter)] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
            <div 
              id="mobile-menu"
              ref={mobileMenuRef}
              className="md:hidden mt-4 border-t border-gray-100 pt-4"
              role="menu"
            >
              <div className="space-y-3">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 px-3 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-lighter)] rounded"
                    onClick={() => setIsMenuOpen(false)}
                    activeClassName="text-[var(--color-primary)] bg-[var(--color-gray-lighter)]"
                    role="menuitem"
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
                      aria-label="Contactar con nosotros"
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