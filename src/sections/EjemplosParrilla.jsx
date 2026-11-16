function EjemplosParrilla() {
  return (
    <section id="ejemplos" className="scroll-mt-24 min-h-screen bg-gray-950 text-white px-4 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        Ejemplos de Publicaciones
      </h2>

      {/* 🔥 GRID RESPONSIVE */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* EJEMPLO 1 */}
        <div>
          <p className="text-sm text-gray-400 mb-3">Ejemplo 1</p>

          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

            <video
              src="/meme.mp4"
              controls
              className="w-full md:w-[90%] lg:w-[80%] mx-auto aspect-[9/16] object-cover rounded-2xl shadow-xl"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                POV: Llevas 10 minutos looteando, decides curarte tranquilamente en un arbusto y de repente ves la sombra de The Undertaker detrás de ti... ⚰️💀  
                ¿Cuál ha sido tu mayor susto en el juego?  
                Ríete con nosotros y sube tus clips con <span className="text-blue-400">#EpicClutchMoment</span> 😂👇  
                <span className="text-blue-400">#failEpic</span>
              </p>

              <div className="flex justify-between text-gray-400 text-xs mt-3">
                <span>❤️ 12.4k</span>
                <span>💬 2.2k</span>
                <span>🔁 Compartir</span>
              </div>
            </div>

          </div>
        </div>

        {/* EJEMPLO 2 */}
        <div>
          <p className="text-sm text-gray-400 mb-3">Ejemplo 2</p>

          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

            <video
              src="/promo.mp4"
              autoPlay
              muted
              loop
              className="w-full md:w-[90%] lg:w-[80%] mx-auto aspect-[9/16] object-cover rounded-2xl shadow-xl"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                🎁 <strong>Juego GRATIS esta semana</strong>  
                Ya puedes descargar GRATIS este juegazo en Epic Games Store 🚀  
                Disponible por tiempo limitado ⏳  
                ¿Vas a dejar pasar esta oportunidad? 👀👇  
                <span className="text-blue-400">#EpicGames #JuegoGratis</span>
              </p>

              <div className="flex justify-between text-gray-400 text-xs mt-3">
                <span>❤️ 7.4k</span>
                <span>💬 1k</span>
                <span>🔁 Compartir</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default EjemplosParrilla;