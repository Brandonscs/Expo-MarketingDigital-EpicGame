function Parrilla() {

  const data = [
    {
      red: "Instagram",
      color: "bg-pink-600",
      fecha: "1-abr",
      hora: "15:00",
      tipo: "Interacción / Emocional",
      formato: "Imagen / Frase (Quote)",
      pilar: "Comunidad y Pertenencia",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Una frase que conecte con el sentimiento de ser el último jugador vivo en la partida.",
      copy: "Ese silencio absoluto en el chat de voz cuando tu escuadra Epica cae y sabes que todo depende de ti... 🤫 Respira. Tú naciste para que este momento sea Epico. Menciona a ese amigo que siempre salva la partida en el último segundo. 👇🔥 #JugadorEpico #EpicClutchMoment"
    },
    {
      red: "TikTok",
      color: "bg-black",
      fecha: "4-abr",
      hora: "18:00",
      tipo: "Convocatoria Clips",
      formato: "Video Corto",
      pilar: "UGC (Campaña Gameplay)",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Video épico anunciando el reto de jugadas.",
      copy: "¿Tu pulso no tiembla en el end-game? ⛈️ Inmortaliza tu legado subiendo tu mejor clip con #JugadorEpico #EpicClutchMoment. Elegiremos a los héroes de esta semana para salir en nuestro perfil. 🎮⚔️"
    },
    {
      red: "Instagram",
      color: "bg-pink-600",
      fecha: "6-abr",
      hora: "16:00",
      tipo: "Convocatoria Arte",
      formato: "Carrusel de Imágenes",
      pilar: "UGC (Campaña FanArt)",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Anuncio del reto de dibujo con ejemplos y premios.",
      copy: "El campo de batalla no es el único lugar para demostrar tu talento. 🎨🖌️ ¡Llamando a todos los artistas Epicos! Dibuja tu skin o crossover favorito y súbelo con #EpicArtQuest. Los mejores creadores se llevarán 2,000 PaVos y un lugar en nuestro muro de la fama. ¡Que comience el trazo! ✨👇 #EpicArt"
    },
    {
      red: "tiktok",
      color: "bg-black",
      fecha: "11-abr",
      hora: "16:00",
      tipo: "Entretenimiento / Meme",
      formato: "video corto",
      pilar: "Entretenimiento / Humor",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Gameplay con skin tipo Undertaker.",
      copy: "POV: Llevas 10 minutos looteando, decides curarte tranquilamente en un arbusto y de repente ves la sombra de The Undertaker detrás de ti... ⚰️💀 ¿Cuál ha sido tu mayor susto en el juego? Ríete con nosotros y sube tus clips con #EpicClutchMoment. 😂👇 #FailEpic"
    },
    {
      red: "Instagram",
      color: "bg-pink-600",
      fecha: "14-abr",
      hora: "17:00",
      tipo: "Reconocimiento Clip",
      formato: "Reel (Repost)",
      pilar: "UGC (Resultado Gameplay)",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Publicación del primer video ganador con jugada épica.",
      copy: "Todos necesitamos a un héroe, y hoy @GamerPro lleva la capa Epica. 🦸‍♂️ La precisión en este clip es de otro planeta. ¿Tienes la habilidad para superarlo? Únete a la batalla con #EpicClutchMoment #JugadorEpico y síguenos. 👇"
    },
    {
      red: "TikTok",
      color: "bg-black",
      fecha: "18-abr",
      hora: "15:00",
      tipo: "Reconocimiento Arte",
      formato: "Video Corto (Speedpaint)",
      pilar: "UGC (Resultado FanArt)",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Repost del ganador mostrando el proceso de dibujo (speedpaint).",
      copy: "De un lienzo vacío a una obra legendaria. 🎨🔥 Así se crea el arte Epico. ¿Te atreves a intentarlo? Súmate al reto con #EpicArtQuest y conviértete en parte del universo creativo. ✨👇"
    },
    {
      red: "Facebook",
      color: "bg-blue-600",
      fecha: "23-abr",
      hora: "15:00",
      tipo: "Promoción",
      formato: "Video promocional",
      pilar: "Promocional / Conversión",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Publicación del juego gratis de la semana.",
      copy: "Juego GRATIS esta semana 🎁 Ya puedes descargar este juegazo en Epic Games Store 🚀 Disponible por tiempo limitado ⏳ ¿Vas a dejar pasar esta oportunidad? 👀👇 #EpicGames #JuegoGratis"
    },
    {
      red: "Instagram",
      color: "bg-pink-600",
      fecha: "27-abr",
      hora: "13:00",
      tipo: "Reconocimiento Clip",
      formato: "Reel (Repost)",
      pilar: "UGC (Resultado Gameplay)",
      objetivo: "Aumentar seguidores orgánicos en 15%",
      descripcion: "Publicación del top clip semanal.",
      copy: "Algunos juegan por diversión, otros se convierten en leyenda. 👑 @LeyendaEpic acaba de escribir su nombre en las estrellas con este final de película. Gracias por dejarnos sin aliento. ¡Mañana la arena se abre de nuevo, síguenos para tu revancha y sé un #JugadorEpico! 🚀 #EpicClutchMoment"
    }
  ];
  
    return (
      <section id="parrilla" className="scroll-mt-24 min-h-screen bg-gray-950 text-white px-6 py-16">
  
        <h2 className="text-3xl font-bold text-center mb-12">
          Parrilla de Contenido
        </h2>
  
        {/* TABLA PC */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border border-gray-800">
            <thead className="bg-gray-900">
              <tr>
                <th className="p-3">Red</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Tipo</th>
                <th>Formato</th>
                <th>Pilar</th>
                <th>Objetivo</th>
                <th>Descripción</th>
                <th>Copy</th>
              </tr>
            </thead>
  
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="border-t border-gray-800">
  
  <td className="p-2 text-center font-bold text-gray-300">
                    {item.red}
                  </td>
  
                  <td className="p-2">{item.fecha}</td>
                  <td className="p-2">{item.hora}</td>
                  <td className="p-2">{item.tipo}</td>
                  <td className="p-2">{item.formato}</td>
                  <td className="p-2">{item.pilar}</td>
                  <td className="p-2">{item.objetivo}</td>
                  <td className="p-2">{item.descripcion}</td>
                  <td className="p-2 text-gray-400">{item.copy}</td>
  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* MOBILE */}
        <div className="md:hidden space-y-6">
          {data.map((item, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-xl">
  
  <div className="text-sm font-bold mb-2 text-gray-300">
                {item.red} | {item.fecha} - {item.hora}
              </div>
  
              <p><strong>Tipo:</strong> {item.tipo}</p>
              <p><strong>Formato:</strong> {item.formato}</p>
              <p><strong>Pilar:</strong> {item.pilar}</p>
              <p><strong>Objetivo:</strong> {item.objetivo}</p>
              <p><strong>Descripción:</strong> {item.descripcion}</p>
  
              <p className="text-gray-400 mt-2 text-sm">
                {item.copy}
              </p>
  
            </div>
          ))}
        </div>
  
      </section>
    );
  }
  
  export default Parrilla;