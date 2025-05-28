
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Rocket } from 'lucide-react';

const WhyWorksSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Validación previa a la construcción",
      description: "Confirma que existe demanda real antes de invertir tiempo y dinero en desarrollo completo."
    },
    {
      icon: Target,
      title: "Enfoque en dolores críticos",
      description: "Identifica y resuelve problemas reales que la gente está dispuesta a pagar por solucionar."
    },
    {
      icon: Rocket,
      title: "Velocidad gracias al No-Code",
      description: "Herramientas visuales te permiten crear y lanzar sin conocimientos técnicos avanzados."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué funciona Mini-Startup?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tres pilares fundamentales que garantizan el éxito de tu proyecto desde el día uno.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex-grow">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorksSection;
