import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const BootcampPromoSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Bootcamp Exclusivo
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            EmpreDetón: De la idea a la app en tiempo récord
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            Únete al Bootcamp EmpreDetón y, desde la generación de ideas y validación, 
            hasta la creación de tu web app con no-code Windsurf. 
            Al final del EmpreDetón tendrás tu(s) app(s) lista(s).
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('https://iaemprende.pro', '_blank')}
            >
              Inscríbete ahora
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              Más información
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-white/70">
            Plazas limitadas. Próxima cohorte comienza pronto.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampPromoSection;
