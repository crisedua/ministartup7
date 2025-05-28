
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMetodologiaClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#metodologia';
    } else {
      document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCasosClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#casos';
    } else {
      document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mini-Startup
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={handleMetodologiaClick} className="text-gray-700 hover:text-blue-600 transition-colors">
              Metodología
            </button>
            <Link to="/herramientas" className="text-gray-700 hover:text-blue-600 transition-colors">
              Herramientas
            </Link>
            {/* <button onClick={handleCasosClick} className="text-gray-700 hover:text-blue-600 transition-colors">
              Casos de Éxito
            </button> */}
            <Link to="/validacion" className="text-gray-700 hover:text-blue-600 transition-colors">
              Validación
            </Link>
            {/* <Link to="/recursos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Recursos
            </Link> */}
            
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => { handleMetodologiaClick(); toggleMenu(); }} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Metodología
              </button>
              <Link to="/herramientas" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                Herramientas
              </Link>
              {/* <button onClick={() => { handleCasosClick(); toggleMenu(); }} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Casos de Éxito
              </button> */}
              <Link to="/validacion" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                Validación
              </Link>
              {/* <Link to="/recursos" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                Recursos
              </Link> */}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
