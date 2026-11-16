function Tools() {
    const tools = [
      {
        name: "Meta Business Suite",
        logo: "/logos/meta.png",
        color: "border-blue-500",
        glow: "shadow-[0_0_25px_rgba(96,165,250,0.15)]",
        text1:
          "Meta Business Suite permite gestionar y programar publicaciones en Facebook e Instagram desde un solo entorno, facilitando la ejecución organizada de la parrilla de contenido.",
        text2:
          "Además, ofrece métricas clave sobre el rendimiento de las publicaciones, como alcance, interacción y comportamiento de la audiencia, lo que permite evaluar y ajustar la estrategia de forma continua."
      },
      {
        name: "TikTok Creator Center",
        logo: "/logos/tiktok.png",
        color: "border-pink-500",
        glow: "shadow-[0_0_25px_rgba(244,114,182,0.15)]",
        text1:
          "TikTok Creator Center es una herramienta enfocada en el análisis de tendencias y el rendimiento del contenido dentro de la plataforma, permitiendo identificar qué tipo de publicaciones generan mayor impacto.",
        text2:
          "Gracias a sus métricas y tendencias, facilita la optimización de la estrategia de contenido, aumentando la visibilidad y el alcance de la marca en audiencias jóvenes."
      },
      {
        name: "Trello",
        logo: "/logos/trello.png",
        color: "border-purple-500",
        glow: "shadow-[0_0_25px_rgba(168,85,247,0.15)]",
        text1:
          "Trello es una herramienta de gestión que permite organizar la planificación del contenido mediante tableros, listas y tareas, facilitando la estructuración de la estrategia digital.",
        text2:
          "Además, permite coordinar el trabajo en equipo, asignar responsabilidades y hacer seguimiento al calendario de publicaciones, asegurando una ejecución eficiente."
      }
    ];
  
    return (
      <section
        id="tools"
        className="scroll-mt-24 bg-gray-950 text-white px-6 py-16"
      >
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Herramientas de Gestión
        </h2>
  
        {/* GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`
                bg-gray-900
                rounded-2xl
                p-6
                border ${tool.color}
                ${tool.glow}
                shadow-xl
                transition-all duration-300
                hover:scale-[1.04]
                hover:shadow-2xl
              `}
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-bold text-white">
                  {tool.name}
                </h3>
              </div>
  
              {/* TEXTO */}
              <div className="space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {tool.text1}
                </p>
  
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tool.text2}
                </p>
              </div>
            </div>
          ))}
  
        </div>
      </section>
    );
  }
  
  export default Tools;