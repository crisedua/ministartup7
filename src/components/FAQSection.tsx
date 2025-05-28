
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Necesito conocimientos técnicos para usar Mini-Starter?",
      answer: "¡Para nada! Mini-Starter está diseñado específicamente para personas sin conocimientos técnicos. Las herramientas No-Code que recomendamos son visuales e intuitivas. Si sabes usar un smartphone, puedes crear tu startup con nuestra metodología."
    },
    {
      question: "¿Cuánto dinero necesito para lanzar mi primera idea?",
      answer: "Puedes empezar con tan solo $50-100 USD. Este presupuesto cubre las herramientas básicas por el primer mes: hosting de landing page, herramientas No-Code básicas y algún test de validación. Mucho más económico que contratar desarrolladores."
    },
    {
      question: "¿Realmente puedo validar una idea en días?",
      answer: "Sí, y es fundamental hacerlo. Con técnicas como landing pages de pre-venta, encuestas dirigidas y análisis de competencia, puedes confirmar si existe demanda real en 3-7 días. Esto te ahorra meses de desarrollo innecesario."
    },
    {
      question: "¿Qué pasa si mi idea no funciona después de la validación?",
      answer: "¡Esa es la ventaja de Mini-Starter! Descubrir que una idea no funciona en una semana y con $100 invertidos es un éxito, no un fracaso. Te permite pivotar rápidamente o probar nuevas ideas sin perder tiempo ni dinero."
    },
    {
      question: "¿Las herramientas No-Code pueden crear productos realmente escalables?",
      answer: "Absolutamente. Empresas como Zapier, Notion y Airtable comenzaron con herramientas No-Code. Para validar y hacer crecer tu negocio hasta los primeros $100K, las herramientas No-Code son perfectas. Siempre puedes migrar a código custom cuando sea necesario."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre Mini-Starter y la metodología No-Code.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está aquí para ayudarte. Contáctanos y responderemos 
              todas tus dudas sobre Mini-Starter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Contactar Soporte
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Ver Más FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
