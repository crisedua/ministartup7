
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "FitTracker Pro",
      problem: "Los entrenadores personales perdían tiempo creando rutinas manuales",
      solution: "App No-Code para generar rutinas automáticas personalizadas",
      results: {
        users: "500+",
        revenue: "$15,000",
        time: "14 días"
      },
      tools: ["Windsurf", "Supabase", "Lovable"],
      image: "💪"
    },
    {
      title: "EcoDelivery",
      problem: "Pequeños restaurantes no tenían sistema de delivery sostenible",
      solution: "Plataforma de pedidos con rutas optimizadas y packaging eco-friendly",
      results: {
        users: "1,200+",
        revenue: "$32,000",
        time: "21 días"
      },
      tools: ["Cursor", "QBrant", "Supabase"],
      image: "🌱"
    },
    {
      title: "StudyBuddy",
      problem: "Estudiantes universitarios necesitaban grupos de estudio efectivos",
      solution: "Red social para conectar estudiantes por materia y horarios",
      results: {
        users: "2,500+",
        revenue: "$8,000",
        time: "10 días"
      },
      tools: ["Lovable", "Windsurf", "Supabase"],
      image: "📚"
    }
  ];

  return (
    <section id="casos" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emprendedores que transformaron ideas simples en negocios rentables 
            usando la metodología Mini-Starter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white text-center">
                  <div className="text-4xl mb-3">{story.image}</div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <div className="flex justify-center space-x-2">
                    {story.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="text-xs bg-white/20 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold text-red-600 mb-2">🎯 Problema:</h4>
                    <p className="text-gray-600 text-sm mb-4">{story.problem}</p>
                    
                    <h4 className="font-semibold text-green-600 mb-2">💡 Solución:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-blue-600 mb-3">📊 Resultados:</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{story.results.users}</div>
                        <div className="text-xs text-gray-600">Usuarios</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{story.results.revenue}</div>
                        <div className="text-xs text-gray-600">Ingresos</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{story.results.time}</div>
                        <div className="text-xs text-gray-600">Tiempo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tu historia podría ser la siguiente
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a cientos de emprendedores que ya están construyendo el futuro con Mini-Starter. 
              ¿Cuál será tu caso de éxito?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
              Comenzar Mi Historia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
