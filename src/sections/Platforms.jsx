import { useState } from "react";

function Platforms() {
    const [index, setIndex] = useState(0);

    const platforms = [
        {
            name: "TikTok",
            logo: "/logos/tiktok.png",
            color: "border-pink-500",
            glow: "shadow-[0_0_25px_rgba(244,114,182,0.25)]",
            bg: "from-pink-500/10 to-transparent",
            text1:
                "TikTok permite conectar con audiencias jóvenes a través de contenido corto, dinámico y basado en tendencias. Es una plataforma ideal para generar visibilidad rápida y captar la atención del usuario desde los primeros segundos.",
            text2:
                "Además, facilita la viralización mediante retos, clips de gameplay y contenido generado por la comunidad, impulsando el crecimiento orgánico de la marca."
        },
        {
            name: "Instagram",
            logo: "/logos/instagram.png",
            color: "border-purple-500",
            glow: "shadow-[0_0_25px_rgba(168,85,247,0.25)]",
            bg: "from-purple-500/10 to-transparent",
            text1:
                "Instagram funciona como un espacio clave para construir identidad de marca a través de contenido visual atractivo como reels, historias y publicaciones. Permite mantener una comunicación constante y cercana con la audiencia.",
            text2:
                "También favorece la interacción, el engagement y la fidelización, consolidando una comunidad activa alrededor del contenido."
        },
        {
            name: "Facebook",
            logo: "/logos/facebook.png",
            color: "border-blue-500",
            glow: "shadow-[0_0_25px_rgba(96,165,250,0.25)]",
            bg: "from-blue-500/10 to-transparent",
            text1:
                "Facebook permite alcanzar un público más amplio y diverso mediante contenido informativo, promociones y publicaciones de mayor duración. Es una plataforma efectiva para reforzar la visibilidad de la marca.",
            text2:
                "Además, facilita la difusión de campañas, el tráfico hacia la plataforma y la conexión con usuarios que buscan contenido más estructurado."
        }
    ];

    const next = () => {
        setIndex((prev) => (prev + 1) % platforms.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + platforms.length) % platforms.length);
    };

    const current = platforms[index];

    return (
        <section
            id="platforms"
            className="scroll-mt-24 bg-gray-950 text-white px-6 py-16"
        >
            {/* Título */}
            <h2 className="text-3xl font-bold text-center mb-12">
                Justificación de Plataformas
            </h2>

            {/* Carrusel */}
            <div className="relative flex items-center justify-center">

                {/* Botón izquierda */}
                <button
                    onClick={prev}
                    className="absolute left-0 md:left-10 text-white text-xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition"
                >
                    ←
                </button>

                {/* CARD */}
                <div
                    className={`
            max-w-md w-full mx-auto
            h-[420px] sm:h-[400px] md:h-[380px]
            bg-gray-900
            rounded-2xl
            p-6
            flex flex-col
            border-l-4 ${current.color}
            ${current.glow}
            bg-gradient-to-br ${current.bg}
            transition-all duration-500 ease-in-out
          `}
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={current.logo}
                            alt={current.name}
                            className="w-10 h-10 object-contain"
                        />
                        <h3 className="text-lg font-bold">
                            {current.name}
                        </h3>
                    </div>

                    {/* CONTENIDO */}
                    <div className="flex flex-col justify-between flex-1">

                        <div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                {current.text1}
                            </p>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                {current.text2}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Botón derecha */}
                <button
                    onClick={next}
                    className="absolute right-0 md:right-10 text-white text-xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition"
                >
                    →
                </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 gap-2">
                {platforms.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-white scale-125" : "bg-gray-600"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Platforms;