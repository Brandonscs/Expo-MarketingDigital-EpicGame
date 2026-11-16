import { useState } from "react";

function Benchmark() {
    const [brand, setBrand] = useState("epic");
    const [tab, setTab] = useState("presencia");
    const [slideMejora, setSlideMejora] = useState(0);
const [slideError, setSlideError] = useState(0);

const mejoras = [
    {
      title: "Aprendizajes de Steam",
      brand: "Steam",
      logo: "/logos/steam.png",
      color: "border-indigo-600",
      bg: "bg-indigo-500/10",
      tint: "from-indigo-500/35 via-indigo-500/10 to-transparent",
      items: [
        "Fortalecer comunidad (foros, reseñas)",
        "Mejorar sistema de logros",
        "Crear eventos digitales"
      ]
    },
    {
      title: "Aprendizajes de Eneba",
      brand: "Eneba",
      logo: "/logos/eneba.png",
      color: "border-pink-600",
      bg: "bg-pink-500/10",
      tint: "from-pink-500/35 via-pink-500/10 to-transparent",
      items: [
        "Ofertas más agresivas",
        "Más métodos de pago",
        "Uso creativo de memes"
      ]
    },
    {
      title: "Aprendizajes de Microsoft",
      brand: "Microsoft",
      logo: "/logos/microsoft.png",
      color: "border-green-600",
      bg: "bg-green-500/20",
      tint: "from-green-400/55 via-green-500/18 to-transparent",
      items: [
        "Integración con consolas",
        "Suscripciones más fuertes",
        "Potenciar servicios digitales"
      ]
    }
  ];

const errores = [
    {
      title: "Errores de Steam",
      brand: "Steam",
      logo: "/logos/steam.png",
      color: "border-indigo-600",
      bg: "bg-indigo-500/10",
      tint: "from-indigo-500/30 via-indigo-500/10 to-transparent",
      items: [
        "Plataforma saturada",
        "Promociones poco claras",
        "Poca presencia en redes"
      ]
    },
    {
      title: "Errores de Eneba",
      brand: "Eneba",
      logo: "/logos/eneba.png",
      color: "border-pink-600",
      bg: "bg-pink-500/10",
      tint: "from-pink-500/30 via-pink-500/10 to-transparent",
      items: [
        "Falta de confianza",
        "No es distribuidor oficial",
        "Marca poco sólida"
      ]
    },
    {
      title: "Errores de Microsoft",
      brand: "Microsoft",
      logo: "/logos/microsoft.png",
      color: "border-green-600",
      bg: "bg-green-500/20",
      tint: "from-green-400/50 via-green-500/16 to-transparent",
      items: [
        "Menor enfoque gamer",
        "No es marca independiente",
        "Comunicación diluida"
      ]
    }
  ];

  const data = {
    epic: {
        nombre: "Epic Games",
        logo: "/logos/epic.png",
        color: "purple",

        presencia: "Mantiene una presencia activa y estratégica en redes sociales como Facebook, Instagram y TikTok. Su comunicación es constante, visual y cercana, enfocada en promocionar juegos, eventos y contenido atractivo. Utiliza tendencias, trailers y contenido dinámico para conectar con la comunidad gamer, logrando una mayor interacción y reconocimiento de marca.",

        plataforma: "La Epic Games Store presenta una interfaz clara, moderna y fácil de usar. Destaca por su estrategia de juegos gratuitos semanales, promociones bien estructuradas y comunicación directa. A diferencia de otras plataformas, prioriza la simplicidad y la experiencia del usuario, aunque aún tiene menor desarrollo en funciones sociales.",

        fortalezas: [
            "Estrategia fuerte en redes sociales con contenido constante",
            "Regalo de juegos gratuitos como principal gancho de atracción",
            "Interfaz limpia y fácil de navegar",
            "Comisiones más bajas para desarrolladores (mejor relación con creadores)",
            "Promociones claras y bien comunicadas",
            "Uso de contenido visual atractivo (trailers, gameplays)"
        ],

        debilidades: [
            "Menor comunidad interna que Steam (foros, reseñas)",
            "Catálogo más limitado en comparación con Steam",
            "Pocas funciones sociales dentro de la plataforma",
            "Dependencia alta de promociones para atraer usuarios"
        ]
    },

    steam: {
        nombre: "Steam",
        logo: "/logos/steam.png",
        color: "blue",

        presencia: "Mantiene una presencia muy limitada en redes sociales, con comunicación poco constante y sin una estrategia clara de contenidos. Su enfoque de marketing se centra principalmente en la plataforma y no en la construcción de comunidad en redes externas.",

        plataforma: "Cuenta con un catálogo muy amplio, promociones constantes y múltiples estímulos visuales. Sin embargo, la interfaz puede resultar saturada y compleja. Algunas promociones no son claras y los juegos gratuitos no siempre tienen una comunicación estructurada, lo que puede generar confusión en el usuario.",

        fortalezas: [
            "Mayor reconocimiento mundial en el mercado gaming",
            "Comunidad interna fuerte (foros, reseñas, rankings)",
            "Amplio catálogo de juegos",
            "Ofertas constantes y eventos masivos",
            "Sistema de logros y estadísticas avanzadas"
        ],

        debilidades: [
            "Interfaz saturada o compleja",
            "Poca presencia en redes sociales",
            "Comisión alta para desarrolladores",
            "Pocas exclusividades propias",
            "Atención al cliente criticada"
        ]
    },

    eneba: {
        nombre: "Eneba",
        logo: "/logos/eneba.png",
        color: "pink",

        presencia: "Centra su comunicación principalmente en Instagram, con contenido basado en memes, sorteos y noticias. Utiliza un tono informal y divertido, enfocado en captar atención rápida más que en construir una marca sólida a largo plazo.",

        plataforma: "Funciona como un marketplace donde un mismo producto puede tener distintos precios, lo que puede generar confusión. Su principal fortaleza es la variedad de productos digitales disponibles, incluyendo videojuegos, tarjetas regalo y software.",

        fortalezas: [
            "Precios muy competitivos",
            "Venta de claves digitales con grandes descuentos",
            "Marketplace amplio (juegos, tarjetas, software)",
            "Facilidad y rapidez en la compra"
        ],

        debilidades: [
            "Falta de confianza en algunos productos",
            "No es distribuidor oficial en muchos casos",
            "No tiene comunidad sólida",
            "Experiencia postventa limitada"
        ]
    },

    microsoft: {
        nombre: "Microsoft Store",
        logo: "/logos/microsoft.png",
        color: "green",

        presencia: "No se gestiona como una marca independiente en redes sociales. Su comunicación depende de otras marcas del ecosistema como Xbox y Microsoft, lo que reduce su visibilidad directa frente al público gamer.",

        plataforma: "Es una tienda general integrada con Windows y Xbox. No está enfocada exclusivamente en videojuegos. Su principal propuesta es el acceso a juegos mediante Game Pass y la integración con su ecosistema digital.",

        fortalezas: [
            "Integración con Xbox y Windows",
            "Game Pass como propuesta de valor fuerte",
            "Plataforma oficial y segura",
            "Alta confianza de marca"
        ],

        debilidades: [
            "Catálogo menos variado que Steam",
            "Menor enfoque en comunidad gamer",
            "Precios menos competitivos fuera de promociones",
            "Menor contenido exclusivo para PC"
        ]
    }
};

    const colorStyles = {
        blue: "border-blue-500 shadow-blue-500/20",
        pink: "border-pink-500 shadow-pink-500/20",
        green: "border-green-500 shadow-green-500/20",
        purple: "border-purple-500 shadow-purple-500/20",
      };

    const activeButtonStyles = {
      blue: "bg-blue-600",
      pink: "bg-pink-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
    };

    const current = data[brand];

    return (
        <section id="benchmark" className="scroll-mt-24 min-h-screen bg-gray-950 text-white px-6 py-16">

            <h2 className="text-3xl font-bold text-center mb-10">
                Benchmarking
            </h2>

            <div className="text-center mb-8">

  <p className="text-gray-400 text-sm mb-4">
    Este análisis se realizó a partir de la observación directa en:
  </p>

  <div className="flex flex-wrap justify-center gap-3">

    {["Facebook", "Instagram", "TikTok", "Google", "Plataformas"].map((item) => (
      <span
        key={item}
        className="px-4 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
      >
        {item}
      </span>
    ))}

  </div>

</div>

            {/* Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">

                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => {
                            setBrand(key);
                            setTab("presencia");
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${brand === key
                            ? `${activeButtonStyles[data[key].color]} text-white`
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                    >
                        <img
                            src={data[key].logo}
                            alt=""
                            className="w-5 h-5 object-contain"
                        />
                        {data[key].nombre}
                    </button>
                ))}

            </div>

            {/* CARD */}
            <div className={`max-w-4xl mx-auto bg-gray-900 rounded-2xl p-6 border-2 transition-all duration-300 ${colorStyles[current.color]}`}>                <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
                    <img src={current.logo} className="w-6 h-6" />
                    {current.nombre}
                </h3>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 text-sm">
                    {["presencia", "plataforma", "fortalezas", "debilidades"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-3 py-1 rounded ${tab === t
                                ? "bg-blue-600"
                                : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Contenido */}
                {tab === "presencia" || tab === "plataforma" ? (
                    <p className="text-gray-300 text-sm text-center">
                        {current[tab]}
                    </p>
                ) : (
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                        {current[tab].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}

            </div>

            <div className="mt-16 max-w-6xl mx-auto">

  <h3 className="text-2xl font-bold text-center mb-8">
    Comparación de Competidores
  </h3>

  {/* 💻 TABLA SOLO EN PC */}
  <div className="hidden md:block overflow-x-auto">
    <table className="w-full text-sm border border-gray-700">

      <thead className="bg-gray-800 text-gray-300">
        <tr>
          <th className="p-3 text-left">Marca</th>
          <th className="p-3 text-left">Presencia</th>
          <th className="p-3 text-left">Tono</th>
          <th className="p-3 text-left">Contenido</th>
          <th className="p-3 text-left">Estrategia</th>
          <th className="p-3 text-left">Aspectos</th>
        </tr>
      </thead>

      <tbody>

        <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
          <td className="p-3 text-purple-400 font-semibold">Epic Games</td>
          <td className="p-3">Facebook, Instagram y TikTok</td>
          <td className="p-3">Amigable, cercano</td>
          <td className="p-3">Gameplays, promociones</td>
          <td className="p-3">Branding + comunidad</td>
          <td className="p-3">Contenido visual constante</td>
        </tr>

        <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
          <td className="p-3 text-indigo-400 font-semibold">Steam</td>
          <td className="p-3">Solo Facebook activo</td>
          <td className="p-3">Neutro / institucional</td>
          <td className="p-3">Anuncios y transmisiones</td>
          <td className="p-3">Centrada en la plataforma</td>
          <td className="p-3">Alta comunidad interna</td>
        </tr>

        <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
          <td className="p-3 text-pink-400 font-semibold">Eneba</td>
          <td className="p-3">Solo Instagram</td>
          <td className="p-3">Divertido</td>
          <td className="p-3">Memes, sorteos</td>
          <td className="p-3">Atracción rápida</td>
          <td className="p-3">Busca viralidad</td>
        </tr>

        <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
          <td className="p-3 text-green-400 font-semibold">Microsoft Store</td>
          <td className="p-3">Sin redes propias</td>
          <td className="p-3">No aplica</td>
          <td className="p-3">No aplica</td>
          <td className="p-3">Ecosistema</td>
          <td className="p-3">No es marca independiente</td>
        </tr>

      </tbody>
    </table>
  </div>

  {/* 📱 CARDS SOLO EN MÓVIL */}
  <div className="md:hidden space-y-6">

    <div className="bg-gray-900 rounded-xl border-l-4 border-purple-600 p-4">
      <h4 className="font-bold text-purple-400 mb-2">Epic Games</h4>
      <p><strong>Presencia:</strong> Facebook, Instagram y TikTok</p>
      <p><strong>Tono:</strong> Amigable</p>
      <p><strong>Contenido:</strong> Gameplays</p>
      <p><strong>Estrategia:</strong> Branding + comunidad</p>
      <p><strong>Clave:</strong> Contenido visual fuerte</p>
    </div>

    <div className="bg-gray-900 rounded-xl border-l-4 border-indigo-600 p-4">
      <h4 className="font-bold text-indigo-400 mb-2">Steam</h4>
      <p><strong>Presencia:</strong> Solo Facebook activo</p>
      <p><strong>Tono:</strong> Neutro / institucional</p>
      <p><strong>Contenido:</strong> Anuncios y transmisiones</p>
      <p><strong>Estrategia:</strong> Centrada en la plataforma</p>
      <p><strong>Clave:</strong> Alta comunidad interna</p>
    </div>

    <div className="bg-gray-900 rounded-xl border-l-4 border-pink-600 p-4">
      <h4 className="font-bold text-pink-400 mb-2">Eneba</h4>
      <p><strong>Presencia:</strong> Solo Instagram</p>
      <p><strong>Tono:</strong> Informal</p>
      <p><strong>Contenido:</strong> Memes</p>
      <p><strong>Estrategia:</strong> Atracción rápida</p>
      <p><strong>Clave:</strong> Viralidad</p>
    </div>

    <div className="bg-gray-900 rounded-xl border-l-4 border-green-600 p-4">
      <h4 className="font-bold text-green-400 mb-2">Microsoft Store</h4>
      <p><strong>Presencia:</strong> Sin redes</p>
      <p><strong>Tono:</strong> No aplica</p>
      <p><strong>Contenido:</strong> No aplica</p>
      <p><strong>Estrategia:</strong> Ecosistema</p>
      <p><strong>Clave:</strong> No es marca independiente</p>
    </div>

  </div>

</div>



<div className="mt-20 text-center">

  <h3 className="text-2xl font-bold mb-6">
    ¿Qué podría mejorar Epic Games?
  </h3>

  <div className={`relative z-0 overflow-hidden max-w-xl mx-auto bg-gray-900/50 ${mejoras[slideMejora].bg} backdrop-blur-xl p-6 rounded-2xl border border-white/10 border-l-4 ${mejoras[slideMejora].color}`}>
    <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${mejoras[slideMejora].tint}`} />

    <h4 className="relative flex items-center justify-between gap-3 text-lg font-semibold mb-4">
      <span>{mejoras[slideMejora].title}</span>
      <img
        src={mejoras[slideMejora].logo}
        alt={mejoras[slideMejora].brand}
        className="h-6 w-6 object-contain opacity-90"
      />
    </h4>

    <ul className="relative space-y-2 text-gray-300">
      {mejoras[slideMejora].items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>

  </div>

  <div className="flex justify-center gap-4 mt-4">
    <button onClick={() => setSlideMejora((slideMejora - 1 + mejoras.length) % mejoras.length)} className="bg-gray-700 px-3 py-1 rounded">
      ←
    </button>
    <button onClick={() => setSlideMejora((slideMejora + 1) % mejoras.length)} className="bg-gray-700 px-3 py-1 rounded">
      →
    </button>
  </div>

</div>

<div className="mt-20 text-center">

  <h3 className="text-2xl font-bold mb-6">
    ¿Qué hacen mejor Epic Games?
  </h3>

  <div className={`relative z-0 overflow-hidden max-w-xl mx-auto bg-gray-900/50 ${errores[slideError].bg} backdrop-blur-xl p-6 rounded-2xl border border-white/10 border-l-4 ${errores[slideError].color}`}>
    <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${errores[slideError].tint}`} />

    <h4 className="relative flex items-center justify-between gap-3 text-lg font-semibold mb-4">
      <span>{errores[slideError].title}</span>
      <img
        src={errores[slideError].logo}
        alt={errores[slideError].brand}
        className="h-6 w-6 object-contain opacity-90"
      />
    </h4>

    <ul className="relative space-y-2 text-gray-300">
      {errores[slideError].items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>

  </div>

  <div className="flex justify-center gap-4 mt-4">
    <button onClick={() => setSlideError((slideError - 1 + errores.length) % errores.length)} className="bg-gray-700 px-3 py-1 rounded">
      ←
    </button>
    <button onClick={() => setSlideError((slideError + 1) % errores.length)} className="bg-gray-700 px-3 py-1 rounded">
      →
    </button>
  </div>

</div>

<div className="mt-24 max-w-4xl mx-auto text-center">

  <h3 className="text-2xl font-bold mb-6">
    Conclusión del Benchmarking
  </h3>

  <div className="bg-gray-900 rounded-2xl p-8 border border-purple-600">

    <p className="text-gray-300 mb-4">
      El análisis evidencia que Epic Games posee una estrategia de marketing digital más completa frente a sus competidores.
    </p>

    <p className="text-gray-300 mb-4">
      A diferencia de Steam, que centra su fortaleza en la plataforma, Epic Games aprovecha las redes sociales como canal clave de atracción y fidelización, manteniendo una comunicación cercana y visualmente atractiva.
    </p>

    <p className="text-gray-300 mb-4">
      Frente a Eneba, proyecta mayor confianza e identidad de marca, y en comparación con Microsoft Store, logra una mejor coherencia entre su comunicación y su propuesta digital.
    </p>

    <div className="mt-6 text-left text-gray-300 space-y-2">
      <p className="font-semibold text-purple-400">Ventajas clave:</p>
      <ul className="list-disc list-inside">
        <li>Presencia activa en redes sociales</li>
        <li>Contenido visual constante</li>
        <li>Tono cercano al jugador</li>
        <li>Promociones claras y bien estructuradas</li>
      </ul>
    </div>

    <p className="text-purple-400 font-semibold mt-6">
      Esto le permite consolidar una ventaja competitiva clara en el entorno digital.
    </p>

  </div>

</div>

        </section>
    );
}

export default Benchmark;