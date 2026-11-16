import { motion } from "framer-motion";

function StrategyCore() {
  return (
    <section
      id="strategy"
      className="scroll-mt-24 px-6 py-16 bg-gray-950 text-white"
    >
      {/* TÍTULO */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Estrategia de Marca</h2>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* 🧬 CARD ARQUETIPO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gray-900 rounded-2xl shadow-xl p-6 border border-white/10
          bg-gradient-to-br from-blue-500/10 to-purple-500/10
          hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] transition-all duration-300"
        >
          {/* Glow suave */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />

          <h3 className="text-lg font-bold mb-3 text-blue-400">
            Arquetipo
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            Héroe y Creador: una marca que impulsa la superación, la competencia
            y la creatividad dentro del entorno gamer, combinando desafío e
            innovación en cada experiencia.
          </p>
        </motion.div>

        {/* 🎯 CARD OBJETIVO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gray-900 rounded-2xl shadow-xl p-6 border border-white/10
          hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)] transition-all duration-300"
        >
          {/* 🌟 EFECTO ENERGÍA DORADA (clave) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* núcleo */}
            <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 rounded-full blur-2xl" />
            
            {/* estelas */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl" />

            {/* halo radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),transparent_70%)]" />
          </div>

          <h3 className="text-lg font-bold mb-3 text-yellow-400 relative z-10">
            Objetivo
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed relative z-10">
            Fortalecer el posicionamiento de Epic Games mediante contenido
            atractivo en plataformas digitales, aumentando el engagement, el
            alcance y la conexión con la comunidad.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default StrategyCore;