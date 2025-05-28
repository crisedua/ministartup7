
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Twitter, Linkedin, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suscripción:', email);
    // Aquí iría la lógica de suscripción
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Únete a la comunidad Mini-Starter
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Recibe tips exclusivos y nuevas herramientas No-Code 
              directamente en tu email. Sin spam, solo valor.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="mr-2 h-4 w-4" />
                Suscribirse
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              Únete a 5,000+ emprendedores que ya reciben nuestro newsletter
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Mini-Starter
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La metodología más rápida para validar y lanzar ideas de negocio 
              sin conocimientos técnicos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Metodología</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#metodologia" className="hover:text-white transition-colors">7 Pasos</a></li>
              <li><a href="#toolbox" className="hover:text-white transition-colors">Herramientas</a></li>
              {/* <li><a href="#casos" className="hover:text-white transition-colors">Casos de Éxito</a></li> */}
              <li><a href="#" className="hover:text-white transition-colors">Validación</a></li>
            </ul>
          </div>

          <div>
            {/* <h3 className="font-semibold mb-4">Recursos</h3> */}
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#recursos" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plantillas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Videos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Mini-Starter. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
