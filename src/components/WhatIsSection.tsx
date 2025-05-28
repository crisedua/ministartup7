
import { Card, CardContent } from '@/components/ui/card';
import { Zap, DollarSign, Clock, Target } from 'lucide-react';

const WhatIsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es Mini-Startup?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una metodología revolucionaria que te permite validar y lanzar ideas de negocio 
            en días, no meses, usando herramientas No-Code accesibles para todos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rápido</h3>
              <p className="text-gray-600">
                Lanza en días lo que antes tomaba meses. Herramientas No-Code aceleran todo el proceso.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Económico</h3>
              <p className="text-gray-600">
                Reduce costos hasta 90%. Sin equipos de desarrollo, sin infraestructura compleja.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Validado</h3>
              <p className="text-gray-600">
                Prueba la demanda real antes de invertir. Evita productos que nadie quiere.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pilares Estratégicos de una Mini-Startup Exitosa:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-blue-600 mb-3">
                1️⃣ Validación Ultra-Rápida ANTES de Construir
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Testea tu hipótesis central con un MVP ligero y feedback real del mercado. 
                Evita invertir tiempo y dinero en funcionalidades que nadie usará. 
                ¡Máximo aprendizaje, mínimo desperdicio!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-green-600 mb-3">
                2️⃣ Enfoque Láser en 'Dolores' Críticos
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Identifica y soluciona un problema urgente y específico para un nicho bien definido. 
                Esto es clave para asegurar una demanda auténtica y encontrar tu product-market fit más rápido.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-purple-600 mb-3">
                3️⃣ Velocidad y Agilidad (No-Code/Low-Code)
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Utiliza herramientas que te permitan crear, lanzar y ajustar tu solución en tiempo récord. 
                Sin necesidad de escribir código complejo o armar grandes equipos técnicos inicialmente, 
                puedes iterar basándote en la retroalimentación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-orange-600 mb-3">
                4️⃣ Mitigación Inteligente del Riesgo
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Aprende directamente del mercado y pivota rápidamente sin la carga de grandes inversiones previas. 
                El umbral de "fracaso" es bajo y el aprendizaje, altísimo. Un "no" temprano es un gran ahorro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
