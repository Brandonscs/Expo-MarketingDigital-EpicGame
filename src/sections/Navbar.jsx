import { useEffect, useMemo, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  const navItems = useMemo(
    () => [
      { id: "inicio", label: "Inicio" },
      { id: "personaje", label: "Personaje" },
      { id: "buyer", label: "Buyer" },
      { id: "benchmark", label: "Benchmark" },
      { id: "smart", label: "SMART" },
      { id: "parrilla", label: "Parrilla" },
      { id: "ejemplos", label: "Ejemplos" },
      { id: "metricas", label: "Métricas" }
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120; // altura del navbar aprox
      let current = "inicio";

      for (let i = 0; i < navItems.length; i++) {
        const section = document.getElementById(navItems[i].id);
        if (!section) continue;

        const top = section.offsetTop - offset;

        if (window.scrollY >= top) {
          current = navItems[i].id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecuta al inicio

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleNav(id) {
    setOpen(false);
    scrollToSection(id);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 bg-black/70 backdrop-blur-md border-b border-white/10">

        {/* Logo */}
        <h1 className="flex items-center gap-2 text-white font-bold text-lg">
          <img
            src="/epic-logo.png"
            alt="Epic Games"
            className="h-6 w-6 object-contain"
          />
          Epic Game
        </h1>

        {/* Menú PC */}
        <div className="hidden md:flex gap-1 text-gray-300">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={[
                  "relative px-3 py-2 text-sm font-medium transition-all duration-200",
                  "hover:text-white hover:scale-[1.03]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-0",
                  isActive ? "text-white" : "text-gray-300"
                ].join(" ")}
              >
                {item.label}
                <span
                  className={[
                    "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-all duration-300",
                    isActive
                      ? "opacity-100 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-[0_0_18px_rgba(96,165,250,0.35)]"
                      : "opacity-0 translate-y-1 bg-white/30"
                  ].join(" ")}
                />
              </button>
            );
          })}
          <a
            href="/INFORME-ESTRATEGIA DE MARKETING DIGITAL-EPIC GAME.pdf"
            download
            className="ml-3 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition"
          >
            Descargar informe
          </a>
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden text-white text-2xl transition-transform duration-200 hover:scale-105"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-b border-white/10 bg-black/90 backdrop-blur-md">
          <div className="mx-auto w-full max-w-6xl px-6 py-5">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={[
                      "flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200",
                      "hover:bg-white/5 active:scale-[0.99]",
                      isActive ? "text-white ring-1 ring-white/10 bg-white/5" : "text-gray-200/85"
                    ].join(" ")}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={[
                        "h-2 w-2 rounded-full transition-opacity",
                        isActive ? "opacity-100 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" : "opacity-0"
                      ].join(" ")}
                    />
                  </button>
                );
              })}
              <a
                href="/INFORME-ESTRATEGIA DE MARKETING DIGITAL-EPIC GAME.pdf"
                download
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-white bg-white/5 hover:bg-white/10"
              >
                <span className="font-medium">Descargar informe</span>
                ⬇️
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;