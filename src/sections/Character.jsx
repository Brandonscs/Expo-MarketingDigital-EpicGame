import { useState } from "react";

function Character() {
  const [view, setView] = useState("personaje");

  return (
    <section id="personaje" className="scroll-mt-24 min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-16">

      {/* CARD */}
      <div className="w-full max-w-md h-[640px] md:h-[700px] bg-gray-900 rounded-2xl shadow-xl p-6 flex flex-col">        {/* CONTENIDO */}
        <div className="flex-1 overflow-y-auto pr-2">
          {view === "personaje" && (
            <>
              <img
                src="/personaje.png"
                alt="Aether Kronos"
                className="w-64 md:w-80 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              />

              <h2 className="text-2xl font-bold mb-2">
                Aether Kronos
              </h2>

              <p className="text-gray-400 mb-4">
                El Guardián del Universo Epic
              </p>
            </>
          )}

          {view === "personalidad" && (
            <div className="text-left">
              <h2 className="text-xl font-bold mb-3 text-blue-400">
                🧠 Personalidad
              </h2>

              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>Estratega y visionario: siempre ve más allá del presente</li>
                <li>Creativo e innovador: transforma ideas en experiencias épicas</li>
                <li>Seguro de sí mismo, pero cercano a la comunidad gamer</li>
                <li>Competitivo (pero justo): cree en el mérito y el crecimiento</li>
                <li>Curioso por naturaleza: explora constantemente nuevos mundos</li>
                <li>Guía e inspirador: impulsa a otros a descubrir su potencial</li>
                <li>Protector de la creatividad: valora a quienes crean, no solo consumen</li>
                <li>Equilibrado: entiende la importancia entre diversión, reto y aprendizaje</li>
              </ul>

              <p className="text-xs text-gray-500 italic mt-4">
                Voz: amigable, retadora e inspiradora.
              </p>
            </div>
          )}

          {view === "apariencia" && (
            <div className="text-left">
              <h2 className="text-xl font-bold mb-3 text-purple-400">
                👁️ Apariencia
              </h2>

              <ul className="text-gray-300 space-y-2 text-sm">
                <li><strong>Altura:</strong> 1.85 m</li>
                <li><strong>Complexión:</strong> Atlética</li>
                <li><strong>Cabello:</strong> Oscuro, corto</li>
                <li><strong>Ojos:</strong> Energía azul/violeta</li>
              </ul>

              <h3 className="mt-4 font-semibold text-pink-400">
                ⚡ Accesorios
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Corona energética</li>
                <li>Gafas futuristas</li>
                <li>Bastón mágico-tecnológico</li>
                <li>Libro con el logo</li>
              </ul>
            </div>
          )}
        </div>

        {/* BOTONES */}
        <div className="flex justify-center gap-3 mt-6">

          {/* Botón dinámico 1 */}
          <button
            onClick={() => setView(view === "personalidad" ? "personaje" : "personalidad")}
            className={`px-4 py-2 rounded-lg text-sm ${view === "personalidad"
              ? "bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
              }`}
          >
            {view === "personalidad" ? "Personaje" : "Personalidad"}
          </button>

          {/* Botón dinámico 2 */}
          <button
            onClick={() => setView(view === "apariencia" ? "personaje" : "apariencia")}
            className={`px-4 py-2 rounded-lg text-sm ${view === "apariencia"
              ? "bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
              }`}
          >
            {view === "apariencia" ? "Personaje" : "Apariencia"}
          </button>

        </div>

      </div>

      {/* HISTORIA */}
      <div className="max-w-2xl mt-10 text-center">
        <h3 className="text-xl font-semibold mb-3">
          Historia
        </h3>

        <p className="text-gray-400 leading-relaxed">
          “El juego no termina… evoluciona contigo.”

          Aether Kronos nació en el núcleo del universo digital, donde el código y la imaginación se fusionan.
          Fue elegido como el guardián de todos los mundos creados por jugadores y desarrolladores, uniendo
          tecnología, creatividad y experiencia en una sola fuerza.

          Sin embargo, incluso como guardián, enfrenta un conflicto constante: ver cómo muchos jugadores dejan
          de crear para convertirse solo en consumidores. Esto amenaza el equilibrio del universo que protege.

          Por eso, su misión no es solo defender los mundos digitales, sino inspirar a cada jugador a descubrir
          su potencial, crear sin límites y vivir experiencias verdaderamente épicas.

          Aether no solo protege el juego… lo transforma en una herramienta para evolucionar.
        </p>
      </div>

    </section>
  );
}

export default Character;