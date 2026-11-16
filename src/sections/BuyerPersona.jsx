import { useState } from "react";

function BuyerPersona() {
    const [active, setActive] = useState("mateo");
    const [tab, setTab] = useState("piensa");

    const data = {
        mateo: {
            nombre: "Mateo – 18 años",
            img: "/mateo.png",
            piensa: "Estoy en una etapa donde necesito encajar y construir mi identidad. Me preocupa no ser lo suficientemente bueno y perder conexión con mis amigos. Los videojuegos son un espacio donde puedo ser yo mismo y destacar. En los próximos 12 meses quiero mejorar académicamente, encontrar lo que me apasiona y equilibrar estudio y diversión. Me da miedo no encajar o no sobresalir en nada. Para mí, el éxito es pertenecer, ser reconocido y sentirme seguro de quién soy.",
            ve: "Veo en redes sociales estilos de vida dinámicos, streamers y gaming competitivo. Observo comunidades digitales donde las personas se expresan libremente. Siento que hay presión por destacar, ser interesante y mantenerse actualizado con las tendencias.",
            oye: "Escucho a mis padres insistir en que debo enfocarme en el estudio. Oigo a mis profesores hablar del futuro y la universidad. Mis amigos hablan de videojuegos, tendencias y cultura digital. También escucho que jugar videojuegos puede ser perder el tiempo, lo que me genera conflicto.",
            dice: "Digo que puedo equilibrar mi tiempo, aunque a veces priorizo el entretenimiento. Soy activo en redes sociales y videojuegos online. Comparto contenido, interactúo con otros y busco pertenecer a una comunidad. Defiendo que el gaming es parte importante de mi vida.",
            dolores: "Siento presión académica, miedo de no encajar y dependencia económica de mis padres. Me frustra que no siempre me tomen en serio.",
            ganancias: "Quiero sentirme parte de algo, expresarme sin juicio y ser reconocido. Busco espacios donde pueda construir mi identidad y sentir que pertenezco."
        },

        andres: {
            nombre: "Andrés – 29 años",
            img: "/andres.png",
            piensa: "Siento una gran responsabilidad por mi familia y mi estabilidad económica. Pienso constantemente en cómo equilibrar mi crecimiento profesional con el tiempo de calidad para mi pareja e hijos. A veces me siento agotado y con poco espacio para mí. En los próximos 12 meses quiero consolidarme laboralmente, mejorar mi calidad de vida y dedicar más tiempo a mi familia. Me da miedo perderme momentos importantes con mis hijos o caer en una rutina sin disfrute. Para mí, el éxito es estabilidad, bienestar familiar y equilibrio personal.",
            ve: "Veo a otros profesionales avanzando en sus carreras mientras muestran una vida familiar ideal en redes sociales. Percibo que el tiempo es limitado y que debo aprovecharlo mejor. También veo que el entretenimiento debe ser significativo, y si es posible, compartirlo con mi familia.",
            oye: "Escucho conversaciones sobre estabilidad, responsabilidades y futuro. Oigo consejos sobre crianza, equilibrio familiar y éxito profesional. Mi pareja me recuerda la importancia de compartir tiempo en familia. También escucho a mis hijos hablar de videojuegos, tendencias y contenido digital.",
            dice: "Digo que necesito equilibrar mi trabajo con mi familia. Organizo mi tiempo para cumplir con mis responsabilidades y busco momentos para compartir con mis hijos. Consumo entretenimiento en casa, especialmente en la noche o fines de semana. Prefiero actividades que podamos disfrutar juntos o que me permitan relajarme.",
            dolores: "Siento falta de tiempo personal, estrés laboral y responsabilidad económica. A veces siento culpa por no dedicar suficiente tiempo a mi familia y que caigo en la rutina.",
            ganancias: "Quiero pasar tiempo de calidad con mi familia, desconectarme del estrés y encontrar equilibrio entre mi vida personal y laboral. Busco sentirme presente y conectado con mis hijos."
        }
    };

    const current = data[active];

    return (
        <section id="buyer" className="scroll-mt-24 min-h-screen bg-black text-white px-6 py-16">

            <h2 className="text-3xl font-bold text-center mb-10">
                Buyer Personas
            </h2>

            {/* Selector de persona */}
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setActive("mateo")}
                    className={`px-4 py-2 rounded-lg transition ${active === "mateo"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                >
                    Mateo
                </button>

                <button
                    onClick={() => setActive("andres")}
                    className={`px-4 py-2 rounded-lg transition ${active === "andres"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                >
                    Andrés
                </button>
            </div>

            {/* CARD */}
            <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Imagen */}
                <div className="md:w-1/2">
                    <img src={current.img} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Contenido */}
                <div className="md:w-1/2 p-6 flex flex-col">

                    <h3 className="text-xl font-bold mb-4">
                        {current.nombre}
                    </h3>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-4 text-sm">

                        {[
                            { key: "piensa", label: "🧠 Piensa" },
                            { key: "ve", label: "👁️ Ve" },
                            { key: "oye", label: "👂 Oye" },
                            { key: "dice", label: "💬 Dice" },
                            { key: "dolores", label: "⚠️ Dolores" },
                            { key: "ganancias", label: "🚀 Ganancias" },
                        ].map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setTab(item.key)}
                                className={`px-3 py-1 rounded transition ${tab === item.key
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                    </div>

                    {/* Texto */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {current[tab]}
                    </p>

                </div>
            </div>

            {/* TÍTULO */}
            <div className="text-center max-w-2xl mx-auto mt-20 mb-12">
                <h2 className="text-3xl font-bold mb-3">
                    Tono y Mensaje de Comunicación
                </h2>
            </div>

            {/* GRID PRINCIPAL */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-8">

                {/* CARD TONO */}
                <div className="bg-gray-900 rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-bold mb-4 text-blue-400">
                        Tono de Comunicación
                    </h3>

                    <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Cercano y amigable</li>
                        <li>• Épico e inspirador</li>
                        <li>• Competitivo</li>
                        <li>• Dinámico y juvenil</li>
                    </ul>

                    <p className="text-xs text-gray-500 mt-4 italic">
                        Este tono permite conectar emocionalmente con la comunidad gamer.
                    </p>
                </div>

                {/* CARD MENSAJE */}
                <div className="bg-gray-900 rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-bold mb-4 text-purple-400">
                        Mensaje Central
                    </h3>

                    <p className="text-gray-200 italic border-l-4 border-purple-500 pl-4 mb-4">
                        “En Epic Games, no solo juegas: creas, compites y te conviertes en
                        parte de una comunidad.”
                    </p>

                    <p className="text-gray-300 text-sm">
                        La marca busca construir experiencias, identidad y comunidad dentro
                        del entorno digital.
                    </p>
                </div>
            </div>

            {/* CARD FINAL */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-gray-900 rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-bold mb-3 text-blue-400">
                        Aplicación en la Estrategia
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        Este tono y mensaje guían toda la estrategia de contenido,
                        asegurando coherencia en cada publicación y fortaleciendo la
                        conexión con la audiencia.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default BuyerPersona;