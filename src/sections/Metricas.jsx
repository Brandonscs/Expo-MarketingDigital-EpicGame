import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, CartesianGrid
  } from "recharts";
  import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
  import { useEffect, useMemo, useRef, useState } from "react";
  
  function MetricasStore() {
  
    // 📊 CONTEXTO BASE
    const base = [
      { name: "Registrados", valor: 317 },
      { name: "Activos (MAU)", valor: 78 },
      { name: "Juegos", valor: 6 },
      { name: "Descargas Gratis", valor: 662 }
    ];
  
    // 📊 ENGAGEMENT
    const engagement = [
      { name: "Activos", valor: 78 },
      { name: "Inactivos", valor: 239 }
    ];
  
    // 📊 EVOLUCIÓN
    const evolucion = [
      { year: "2020", usuarios: 61 },
      { year: "2021", usuarios: 62 },
      { year: "2022", usuarios: 68 },
      { year: "2023", usuarios: 75 },
      { year: "2024", usuarios: 74 },
      { year: "2025", usuarios: 78 },
      { year: "2026", usuarios: 80 }
    ];
  
    // 📊 CONVERSIÓN
    const conversion = [
      { tipo: "Compran", valor: 18 },
      { tipo: "No compran", valor: 82 }
    ];

    const palette = {
      azul: "#60A5FA",
      morado: "#A78BFA",
      verde: "#34D399",
      rosa: "#F472B6",
      borde: "rgba(255,255,255,0.10)",
      grid: "rgba(148,163,184,0.10)",
      textoMuted: "rgba(226,232,240,0.75)"
    };

    const registrados = useMemo(() => base.find((x) => x.name === "Registrados")?.valor ?? 0, [base]);
    const activos = useMemo(() => base.find((x) => x.name.includes("Activos"))?.valor ?? 0, [base]);
    const descargasGratis = useMemo(() => base.find((x) => x.name.includes("Descargas"))?.valor ?? 0, [base]);
    const compranPct = useMemo(() => conversion.find((x) => x.tipo === "Compran")?.valor ?? 0, [conversion]);
    const engagementPct = useMemo(() => (registrados > 0 ? (activos / registrados) * 100 : 0), [activos, registrados]);

    function formatCompact(n) {
      return new Intl.NumberFormat("es-ES", { notation: "compact", maximumFractionDigits: 1 }).format(n);
    }

    function AnimatedNumber({ value, prefix = "", suffix = "", formatter }) {
      const ref = useRef(null);
      const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
      const motionValue = useMotionValue(0);
      const spring = useSpring(motionValue, { stiffness: 120, damping: 22, mass: 0.6 });
      const [display, setDisplay] = useState("0");

      useEffect(() => {
        if (inView) motionValue.set(value);
      }, [inView, motionValue, value]);

      useEffect(() => spring.on("change", (latest) => {
        const outNumber = typeof value === "number" ? latest : Number(latest);
        const rounded = Math.round(outNumber);
        const out = formatter ? formatter(rounded) : new Intl.NumberFormat("es-ES").format(rounded);
        setDisplay(out);
      }), [formatter, spring, value]);

      return (
        <span ref={ref} className="tabular-nums">
          {prefix}{display}{suffix}
        </span>
      );
    }

    function GlassCard({ title, subtitle, accent = "azul", children }) {
      const accents = {
        azul: "shadow-[0_0_0_1px_rgba(96,165,250,0.10),0_18px_55px_rgba(96,165,250,0.10)] hover:shadow-[0_0_0_1px_rgba(96,165,250,0.18),0_22px_70px_rgba(96,165,250,0.18)]",
        morado: "shadow-[0_0_0_1px_rgba(167,139,250,0.10),0_18px_55px_rgba(167,139,250,0.10)] hover:shadow-[0_0_0_1px_rgba(167,139,250,0.18),0_22px_70px_rgba(167,139,250,0.18)]",
        verde: "shadow-[0_0_0_1px_rgba(52,211,153,0.10),0_18px_55px_rgba(52,211,153,0.10)] hover:shadow-[0_0_0_1px_rgba(52,211,153,0.18),0_22px_70px_rgba(52,211,153,0.18)]",
        rosa: "shadow-[0_0_0_1px_rgba(244,114,182,0.10),0_18px_55px_rgba(244,114,182,0.10)] hover:shadow-[0_0_0_1px_rgba(244,114,182,0.18),0_22px_70px_rgba(244,114,182,0.18)]"
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.61, 0.35, 1] }}
          className={[
            "group relative overflow-hidden rounded-2xl border",
            "bg-gray-900/60 backdrop-blur-xl",
            "px-5 py-5 sm:px-6 sm:py-6",
            "transition-transform duration-300 ease-out will-change-transform",
            "hover:scale-[1.03]",
            "border-white/10",
            accents[accent] ?? accents.azul
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white/95">
                {title}
              </h3>
              {subtitle ? (
                <p className="mt-1 text-sm text-slate-300/75">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            {children}
          </div>
        </motion.div>
      );
    }

    function DarkTooltip({ active, payload, label }) {
      if (!active || !payload?.length) return null;

      return (
        <div className="rounded-xl border border-white/10 bg-gray-950/90 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="text-xs text-slate-200/85">{label}</div>
          <div className="mt-1 space-y-1">
            {payload.map((p) => (
              <div key={p.dataKey ?? p.name} className="flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                  <span className="text-slate-200/90">{p.name ?? p.dataKey}</span>
                </div>
                <span className="tabular-nums text-slate-100">
                  {typeof p.value === "number" ? new Intl.NumberFormat("es-ES").format(p.value) : p.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return (
      <section id="metricas" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
          <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_-10%,rgba(96,165,250,0.22),transparent_60%),radial-gradient(700px_380px_at_95%_15%,rgba(167,139,250,0.16),transparent_55%),radial-gradient(700px_380px_at_5%_55%,rgba(244,114,182,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.61, 0.35, 1] }}
            className="text-center"
          >
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
              Dashboard · Epic Games Store · Gaming UI
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Métricas — Epic Games Store
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-200/75">
              Adquisición, actividad, conversión y evolución: lectura ejecutiva con visualización moderna.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <GlassCard title="Registrados" subtitle="Base total" accent="azul">
              <div className="text-3xl font-semibold tracking-tight">
                <AnimatedNumber value={registrados} formatter={formatCompact} />
                <span className="ml-1 text-sm font-medium text-slate-200/70">M</span>
              </div>
              <p className="mt-3 text-sm text-slate-200/70">
                Volumen alto impulsado por adquisición y promociones.
              </p>
            </GlassCard>

            <GlassCard title="Activos (MAU)" subtitle="Actividad mensual" accent="morado">
              <div className="text-3xl font-semibold tracking-tight">
                <AnimatedNumber value={activos} formatter={formatCompact} />
                <span className="ml-1 text-sm font-medium text-slate-200/70">M</span>
              </div>
              <p className="mt-3 text-sm text-slate-200/70">
                La retención es el cuello de botella del modelo.
              </p>
            </GlassCard>

            <GlassCard title="Descargas gratis" subtitle="Volumen de adquisición" accent="verde">
              <div className="text-3xl font-semibold tracking-tight">
                <AnimatedNumber value={descargasGratis} formatter={formatCompact} />
                <span className="ml-1 text-sm font-medium text-slate-200/70">M</span>
              </div>
              <p className="mt-3 text-sm text-slate-200/70">
                Alto impacto de “freebies”, pero no garantiza uso constante.
              </p>
            </GlassCard>

            <GlassCard title="Conversión" subtitle={`Compran (${engagementPct.toFixed(1)}% activos/registrados)`} accent="rosa">
              <div className="text-3xl font-semibold tracking-tight">
                <AnimatedNumber value={compranPct} formatter={(n) => String(n)} />
                <span className="ml-1 text-sm font-medium text-slate-200/70">%</span>
              </div>
              <p className="mt-3 text-sm text-slate-200/70">
                Del “free” al pago: reto de monetización.
              </p>
            </GlassCard>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <GlassCard
              title="Contexto Base"
              subtitle="Distribución de métricas de plataforma"
              accent="azul"
            >
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={base} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                    <defs>
                      <linearGradient id="baseFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={palette.azul} stopOpacity={0.95} />
                        <stop offset="100%" stopColor={palette.azul} stopOpacity={0.18} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={palette.grid} strokeDasharray="3 6" />
                    <XAxis dataKey="name" tick={{ fill: palette.textoMuted, fontSize: 12 }} axisLine={{ stroke: palette.borde }} tickLine={{ stroke: palette.borde }} interval={0} angle={-10} textAnchor="end" height={40} />
                    <YAxis tick={{ fill: palette.textoMuted, fontSize: 12 }} axisLine={{ stroke: palette.borde }} tickLine={{ stroke: palette.borde }} />
                    <Tooltip content={<DarkTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                    <Bar dataKey="valor" name="Valor" fill="url(#baseFill)" radius={[10, 10, 6, 6]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="mt-4 text-sm text-slate-200/70">
                Epic Games Store posee una base masiva de usuarios impulsada principalmente por estrategias de adquisición.
                Sin embargo, este crecimiento no se traduce directamente en actividad constante ni en compras.
                El uso de juegos gratuitos genera registros masivos, pero no necesariamente fidelización.
              </p>
            </GlassCard>

            <GlassCard
              title="Engagement de Plataforma"
              subtitle="Activos vs Inactivos"
              accent="morado"
            >
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagement} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="engFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={palette.morado} stopOpacity={0.9} />
                        <stop offset="100%" stopColor={palette.morado} stopOpacity={0.22} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={palette.grid} strokeDasharray="3 6" />
                    <XAxis dataKey="name" tick={{ fill: palette.textoMuted, fontSize: 12 }} axisLine={{ stroke: palette.borde }} tickLine={{ stroke: palette.borde }} />
                    <YAxis tick={{ fill: palette.textoMuted, fontSize: 12 }} axisLine={{ stroke: palette.borde }} tickLine={{ stroke: palette.borde }} />
                    <Tooltip content={<DarkTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                    <Bar dataKey="valor" name="Usuarios (M)" fill="url(#engFill)" radius={[10, 10, 6, 6]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="mt-4 text-sm text-slate-200/70">
                Solo aproximadamente 1 de cada 4 usuarios registrados está activo mensualmente.
                Esto evidencia una fuerte capacidad de adquisición, pero una baja retención.
                Muchos usuarios acceden únicamente para reclamar juegos gratuitos y luego abandonan la plataforma.
              </p>
            </GlassCard>

            <GlassCard
              title="Impacto de Estrategia (Juegos Gratis)"
              subtitle="Volumen vs actividad real"
              accent="rosa"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
                <div className="text-xs text-slate-200/70">Comparativa</div>
                <div className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                  <span className="text-slate-100">662M</span>
                  <span className="text-slate-200/60"> descargas</span>
                  <span className="text-slate-200/60"> vs </span>
                  <span className="text-slate-100">
                    <AnimatedNumber value={activos} formatter={formatCompact} />
                  </span>
                  <span className="text-slate-200/60">M activos</span>
                </div>
                <div className="mt-4 h-[1px] w-full bg-white/10" />
                <p className="mt-4 text-sm text-slate-200/70">
                  La estrategia de juegos gratuitos genera el mayor volumen de interacción en la plataforma.
                  Sin embargo, no se traduce directamente en ingresos ni en fidelización.
                  Solo entre el 16% y 18% de los usuarios que reclaman juegos terminan realizando compras.
                </p>
              </div>
            </GlassCard>

            <GlassCard
              title="Evolución de Usuarios (2020–2026)"
              subtitle="Crecimiento estructural"
              accent="verde"
            >
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={evolucion} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="evoStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={palette.verde} stopOpacity={0.35} />
                        <stop offset="50%" stopColor={palette.azul} stopOpacity={0.95} />
                        <stop offset="100%" stopColor={palette.morado} stopOpacity={0.65} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={palette.grid} strokeDasharray="3 6" />
                    <XAxis dataKey="year" tick={{ fill: palette.textoMuted, fontSize: 12 }} axisLine={{ stroke: palette.borde }} tickLine={{ stroke: palette.borde }} />
                    <YAxis tick={{ fill: palette.textoMuted, fontSize: 12 }} axisLine={{ stroke: palette.borde }} tickLine={{ stroke: palette.borde }} />
                    <Tooltip content={<DarkTooltip />} cursor={{ stroke: "rgba(255,255,255,0.14)" }} />
                    <Line
                      type="monotone"
                      dataKey="usuarios"
                      name="Usuarios (M)"
                      stroke="url(#evoStroke)"
                      strokeWidth={3}
                      dot={{ r: 4, fill: palette.azul, stroke: "rgba(255,255,255,0.15)", strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: palette.morado, stroke: "rgba(255,255,255,0.18)", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p className="mt-4 text-sm text-slate-200/70">
                El crecimiento de usuarios ha sido progresivo y estable, sin picos virales.
                Esto indica una expansión estructural de la plataforma, pero no un crecimiento explosivo.
                Además, este aumento no se traduce proporcionalmente en ingresos.
              </p>
            </GlassCard>

            <GlassCard
  title="Embudo de Conversión"
  subtitle="De usuarios a compradores"
  accent="azul"
>
  <div className="space-y-4">

    <div className="w-full">
      <p className="text-sm text-slate-300 mb-1">
        Registrados Totales (317M)
      </p>
      <div className="w-full bg-blue-500/80 h-10 rounded-lg flex items-center justify-center font-bold">
        317M
      </div>
    </div>

    <div className="w-[80%] mx-auto">
      <p className="text-sm text-slate-300 mb-1 text-center">
        Reclaman juegos gratis (662M descargas)
      </p>
      <div className="w-full bg-purple-500/80 h-10 rounded-lg flex items-center justify-center font-bold">
        662M
      </div>
    </div>

    <div className="w-[40%] mx-auto">
      <p className="text-sm text-slate-300 mb-1 text-center">
        Compradores activos (18%)
      </p>
      <div className="w-full bg-pink-500/80 h-10 rounded-lg flex items-center justify-center font-bold">
        18%
      </div>
    </div>

  </div>

  <p className="mt-4 text-sm text-slate-200/70">
    El embudo evidencia una fuerte caída en la conversión: aunque millones de usuarios ingresan
    y reclaman juegos gratuitos, solo una pequeña fracción termina realizando compras.
  </p>
</GlassCard>

<GlassCard
  title="Retorno de Inversión (ROI)"
  subtitle="Eficiencia del modelo Free-to-Play"
  accent="verde"
>
  <div className="text-center">

    <h2 className="text-5xl font-bold text-green-400 mb-2">
      +56%
    </h2>

    <p className="text-sm text-slate-300 mb-4">
      Eficiencia del modelo “Free-to-Play”
    </p>

    <p className="text-sm text-slate-200/70 leading-relaxed">
      Los ingresos generados por los usuarios que convierten (18%) superan la inversión inicial,
      generando un retorno positivo del 56%. Esto demuestra que, aunque la conversión es baja,
      el modelo sigue siendo rentable gracias al volumen de usuarios.
    </p>

    <div className="mt-4 text-xs text-slate-400">
      ((140.4 - 90) / 90) × 100 = 56%
    </div>

  </div>
</GlassCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.55, ease: [0.21, 0.61, 0.35, 1] }}
            className="mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 px-6 py-6 backdrop-blur-xl shadow-[0_22px_70px_rgba(0,0,0,0.35)]"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
            <h3 className="text-lg font-bold tracking-tight">Conclusión</h3>
            <p className="mt-3 text-sm text-slate-200/70">
              Epic Games Store ha logrado construir una base masiva de usuarios gracias a estrategias como los juegos gratuitos.
              Sin embargo, enfrenta un desafío clave: transformar esa audiencia en usuarios activos y compradores recurrentes.
              Actualmente, la plataforma destaca en adquisición, pero presenta debilidades en retención y monetización.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
                Retención
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
                Monetización
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
                Valor por usuario
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  
  export default MetricasStore;