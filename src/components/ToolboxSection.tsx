import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const ToolboxSection = () => {
  const toolCategories = {
    "No-code": [
      {
        name: "Windsurf",
        url: "https://windsurf.ai/"
      },
      {
        name: "Cursor",
        url: "https://cursor.com/"
      },
      {
        name: "Lovable",
        url: "https://lovable.dev/"
      },
      {
        name: "Bolt",
        url: "https://bolt.new/"
      }
    ],
    "Databases": [
      {
        name: "Supabase",
        url: "https://supabase.com/"
      },
      {
        name: "QDrant",
        url: "https://qdrant.tech/"
      },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/"
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/"
      }
    ]
  };


  const categoryColors = {
    "No-code": "from-blue-500 to-cyan-500",
    "Databases": "from-green-500 to-emerald-500"
  };

  return (
    <section id="toolbox" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Toolbox: Plataformas Recomendadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las mejores herramientas No-Code para cada fase de tu proyecto, 
            seleccionadas por su facilidad de uso y resultados comprobados.
          </p>
        </div>

        {Object.entries(toolCategories).map(([category, tools]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-center mb-4">
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} mb-3`}>
                        {category}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h4>
                      {tool.url && (
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline text-sm mb-4">
                          {tool.url.replace(/^https?:\/\//, "")}
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>




                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

  
      </div>
    </section>
  );
};

export default ToolboxSection;
