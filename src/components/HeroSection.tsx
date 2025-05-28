
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            {/* Initial explanation of what Mini-Startup is */}
            <div className="mb-6 p-4 bg-white/70 rounded-lg border border-blue-100">
              <p className="text-lg text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">Mini-Startup</span> es una metodología revolucionaria 
                que te permite validar y lanzar ideas de negocio usando herramientas No-Code, 
                reduciendo tiempo y costos hasta en un 90%.
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Lanza y valida tu idea en{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                días
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transforma ideas en productos reales usando herramientas No-Code. 
              Valida antes de construir y ahorra meses de desarrollo.
            </p>
            
            

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Sin código necesario
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Resultados en días
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                100% práctico
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-30 transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded w-1/2"></div>
                  <div className="flex gap-2 items-center justify-center">
  <img src="/validado-lanzado.png" alt="Validado y Lanzado" className="h-24 w-auto max-w-xs sm:max-w-sm md:max-w-md rounded shadow-lg" />
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
