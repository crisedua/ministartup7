
import { Card, CardContent } from '@/components/ui/card';
import { Search, Lightbulb, Globe, CheckCircle, Code, Rocket, Share2 } from 'lucide-react';

const MethodologySection = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Encontrar dolores",
      description: "Identifica problemas reales de tu nicho a través de investigación directa y análisis de mercado.",
      color: "from-red-500 to-orange-500"
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Resolver dolores",
      description: "Genera soluciones enfocadas y específicas para esos retos identificados.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      number: 3,
      icon: Globe,
      title: "Crear landing page",
      description: "Monta una página en Lovable con CTA y precio especial de lanzamiento.",
      color: "from-yellow-500 to-green-500"
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Validar idea",
      description: "Confirma interés real con pre-ventas, encuestas y métricas de conversión.",
      color: "from-green-500 to-blue-500"
    },
    {
      number: 5,
      icon: Code,
      title: "Desarrollar MVP",
      description: "Construye tu producto mínimo viable usando herramientas No-Code como Windsurf.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: 6,
      icon: Rocket,
      title: "Lanzamiento de la aplicación",
      description: "Pon tu app al alcance del público objetivo con una estrategia de lanzamiento efectiva.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: 7,
      icon: Share2,
      title: "Comparte tu historia",
      description: "Usa redes sociales para mostrar tu proceso y atraer usuarios orgánicamente.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="metodologia" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Metodología en 7 Pasos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sigue nuestro proceso probado para transformar tu idea en un negocio real en tiempo récord.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <IconComponent className="h-6 w-6 text-gray-700 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">

          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
