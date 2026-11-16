function Intro() {
  return (
    <section id="inicio" className="scroll-mt-24 relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* VIDEO FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    h-full w-auto
    object-cover
    md:rotate-90
    md:scale-[2.2]
  "
      >
        <source src="/video-vertical.mp4" type="video/mp4" />
      </video>

      {/* CAPA OSCURA */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/epic-logo.png"
          alt="Epic Games"
          className="w-32 md:w-40 mb-6"
        />

        <div className="text-white flex flex-col md:flex-row gap-2 md:gap-6 text-lg md:text-xl font-semibold mb-6">
          <span>Brandon Carvajal</span>
          <span>--</span>
          <span>Carlos Botero</span>
          <span>--</span>
          <span>Alejandro Orjuela</span>
        </div>


        {/* 🎯 HEADLINE */}
        <h1
          className="text-2xl md:text-4xl font-bold text-white mb-4"
        >
          Estrategia de Marketing Digital
        </h1>


        {/* 🧠 TEXTO NUEVO */}
        <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed mt-4">
          Desarrollo de una estrategia de marketing digital basada en el análisis
          de marca, comportamiento del consumidor y planificación de contenido,
          tomando como referencia a Epic Games.
          <br /><br />
          El proyecto integra elementos como arquetipo de marca, buyer persona,
          selección de plataformas, herramientas de gestión y métricas, con el
          objetivo de construir una propuesta coherente, estratégica y orientada
          a resultados en entornos digitales.
        </p>

      </div>
    </section>
  );
}

export default Intro;