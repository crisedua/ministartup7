
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Download, Play, FileText, CheckSquare, Video } from 'lucide-react';

const ResourcesSection = () => {
  const blogPosts = [
    {
      title: "De la idea al MVP en 7 días: Guía completa",
      excerpt: "Paso a paso detallado para crear tu primer producto mínimo viable.",
      readTime: "8 min",
      category: "Tutorial"
    },
    {
      title: "10 errores fatales que matan tu startup No-Code",
      excerpt: "Evita estos errores comunes y ahorra meses de trabajo perdido.",
      readTime: "6 min",
      category: "Tips"
    },
    {
      title: "Cómo validar ideas sin gastar un euro",
      excerpt: "Técnicas probadas para confirmar demanda antes de construir.",
      readTime: "10 min",
      category: "Validación"
    }
  ];

  const downloads = [
    {
      title: "Kit de Validación Completo",
      description: "Plantillas, encuestas y checklists para validar cualquier idea.",
      icon: CheckSquare,
      format: "PDF + Figma"
    },
    {
      title: "Canvas de Mini-Starter",
      description: "Marco de trabajo visual para planificar tu proyecto paso a paso.",
      icon: FileText,
      format: "PDF Interactivo"
    },
    {
      title: "Lista de 100+ Tools No-Code",
      description: "Directorio curado de las mejores herramientas por categoría.",
      icon: Download,
      format: "Spreadsheet"
    }
  ];

  const videos = [
    {
      title: "Demo: De idea a landing en 1 hora",
      duration: "58:32",
      views: "12.5K"
    },
    {
      title: "Caso real: Validando FitTracker",
      duration: "34:18",
      views: "8.2K"
    },
    {
      title: "Configurando tu stack No-Code",
      duration: "42:15",
      views: "15.7K"
    }
  ];

  return (
    <section id="recursos" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recursos & Descargas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para dominar Mini-Starter: guías, plantillas, 
            videos y herramientas prácticas.
          </p>
        </div>

        {/* Blog Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Blog & Tutoriales</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Download className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Plantillas & Checklists</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {downloads.map((download, index) => {
              const IconComponent = download.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      {download.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {download.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{download.format}</span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                        Descargar
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center mb-8">
            <Video className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Videos Demo</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 aspect-video flex items-center justify-center relative overflow-hidden">
                    <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                    <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {video.title}
                    </h4>
                    <div className="text-sm text-gray-500">
                      {video.views} visualizaciones
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Acceso completo a todos los recursos
            </h3>
            <p className="text-gray-600 mb-6">
              Descarga la guía principal y obtén acceso inmediato a todas las plantillas, 
              videos y herramientas de Mini-Starter.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
              Descargar Todo Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
