
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Fundadora de EcoDelivery",
      content: "Mini-Starter cambió mi vida. En solo 3 semanas pasé de tener una idea a facturar $5,000 al mes. Sin conocimientos técnicos, solo siguiendo la metodología.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Carlos Ramírez",
      role: "Creador de FitTracker Pro",
      content: "Intenté desarrollar mi app durante 2 años con programadores. Con Mini-Starter lo logré en 14 días y ya tengo 500 usuarios pagando.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Ana Martín",
      role: "Fundadora de StudyBuddy",
      content: "La validación previa me ahorró meses de trabajo. Confirmé la demanda antes de construir y ahora tengo un negocio real y rentable.",
      avatar: "👩‍🎓",
      rating: 5
    },
    {
      name: "Diego Torres",
      role: "Emprendedor Serial",
      content: "He lanzado 3 proyectos con Mini-Starter. 2 fueron exitosos y 1 lo descarté rápido. El ROI es increíble comparado con métodos tradicionales.",
      avatar: "🚀",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emprendedores reales compartiendo sus experiencias de éxito con Mini-Starter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-xl" style={{ userSelect: 'none' }}>
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current text-yellow-300" />
                  ))}
                </div>
              </div>
              
              <div className="p-8 text-center">
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-blue-600"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Proyectos lanzados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Puntuación promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-gray-600">Recomiendan Mini-Starter</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => null;

export default TestimonialsSection;
