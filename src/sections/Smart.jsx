import { useState } from "react";

function SmartCard({ data, color }) {
  const [view, setView] = useState("objetivo");

  return (
    <div className={`w-full max-w-sm h-[500px] md:h-[500px] bg-gray-900 rounded-2xl shadow-xl p-6 flex flex-col border-t-4 ${color}`}>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto pr-2">

        {/* OBJETIVO */}
        {view === "objetivo" && (
          <>
            <h2 className="text-xl font-bold mb-3">
              {data.titulo}
            </h2>

            <p className="text-gray-300 text-sm">
              {data.objetivo}
            </p>
          </>
        )}

        {/* DETALLES */}
        {view === "detalles" && (
          <>
            <h2 className="text-xl font-bold mb-3 text-blue-400">
              Desglose SMART
            </h2>

            <ul className="text-gray-300 space-y-2 text-sm">
              {data.detalles.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </>
        )}

      </div>

      {/* BOTÓN */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() =>
            setView(view === "objetivo" ? "detalles" : "objetivo")
          }
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
        >
          {view === "objetivo" ? "Detalles" : "Objetivo"}
        </button>
      </div>

    </div>
  );
}

function Smart() {
    const objetivos = [
        {
          titulo: "Objetivo 1",
          objetivo:
            "Aumentar los seguidores orgánicos en TikTok e Instagram en un 15% en los próximos 3 meses mediante una campaña de contenido generado por el usuario (UGC).",
          detalles: [
            "S: Incrementar seguidores incentivando contenido con hashtag #EpicClutchMoment",
            "M: Aumentar un 15% la base actual (100,000 → 115,000 seguidores)",
            "A: Repostear los 3 mejores videos semanales para motivar participación",
            "R: Fortalece la comunidad y aprovecha el alcance orgánico de videos cortos",
            "T: Lograrlo en un plazo de 3 meses (90 días)"
          ]
        },
        {
          titulo: "Objetivo 2",
          objetivo:
            "Aumentar la base de miembros activos en el servidor oficial de Discord (o suscriptores en el subreddit) en 5,000 usuarios en un periodo de 4 meses, fomentando eventos exclusivos para la comunidad.",
          detalles: [
            "S: Crear eventos 'Viernes de Comunidad' y espacios para buscar equipo (LFG)",
            "M: Sumar exactamente 5,000 nuevos miembros activos",
            "A: Promedio de 1,250 usuarios nuevos por mes",
            "R: Mejora la retención, interacción y crea embajadores de marca",
            "T: Evaluación al finalizar el periodo de 4 meses"
          ]
        },
        {
          titulo: "Objetivo 3",
          objetivo:
            "Incrementar los suscriptores en YouTube en un 10% durante el próximo trimestre publicando contenido educativo y 'detrás de escena' de eventos competitivos.",
          detalles: [
            "S: Crear serie 'Pro-Tips' y contenido detrás de escenas de esports",
            "M: Aumentar suscriptores en un 10% y lograr 5% de CTR en miniaturas",
            "A: Optimizar SEO (títulos, etiquetas y búsquedas)",
            "R: Fortalece la comunidad competitiva y engagement a largo plazo",
            "T: Cumplimiento al finalizar el trimestre"
          ]
        }
      ];

  return (
    <section id="smart" className="scroll-mt-24 min-h-screen bg-gray-950 text-white px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        Objetivos SMART
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <SmartCard data={objetivos[0]} color="border-pink-600" />
        <SmartCard data={objetivos[1]} color="border-green-600" />
        <SmartCard data={objetivos[2]} color="border-red-600" />

      </div>

    </section>
  );
}

export default Smart;