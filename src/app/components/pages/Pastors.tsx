import { Link } from "react-router";
import { ArrowRight, Quote, BookOpen, Heart, Music, Users, Star } from "lucide-react";

const heroImg =
  "https://images.unsplash.com/photo-1760367121593-97b9a02bbd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";
const seniorPastorImg =
  "https://images.unsplash.com/photo-1769636929261-e913ed023c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const associatePastorImg =
  "https://images.unsplash.com/photo-1598548152720-e9ae2290fcce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const worshipPastorImg =
  "https://images.unsplash.com/photo-1611607556363-e5e3d9e78e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const prayerBgImg =
  "https://images.unsplash.com/photo-1644292364271-59f2b61a2323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";

const pastors = [
  {
    name: "Rev. Miguel Johnson",
    role: "Pastor Principal",
    tag: "Liderazgo",
    color: "cobalto",
    icon: BookOpen,
    img: seniorPastorImg,
    bio: "El Pastor Miguel lleva más de 15 años sirviendo a nuestra congregación. Su pasión por enseñar la Palabra de Dios y pastorear a las personas ha transformado incontables vidas. Tiene una Maestría en Divinidad y está comprometido a guiar nuestra comunidad con sabiduría y gracia.",
    verse: "\"Apacienta mis ovejas.\" — Juan 21:17",
    years: "15+ años",
    focus: "Predicación & Discipulado",
  },
  {
    name: "Rev. Sara Martínez",
    role: "Pastora Asociada",
    tag: "Juventud",
    color: "naranja",
    icon: Heart,
    img: associatePastorImg,
    bio: "La Pastora Sara se unió a nuestro equipo en 2018 y lidera los ministerios de jóvenes y adultos jóvenes. Su estilo dinámico de enseñanza y su genuino cuidado por las personas la convierten en una líder muy querida. Tiene un corazón para el discipulado y para guiar a la próxima generación.",
    verse: "\"No desprecies tu juventud.\" — 1 Timoteo 4:12",
    years: "7 años",
    focus: "Jóvenes & Adultos Jóvenes",
  },
  {
    name: "Rev. David Chen",
    role: "Pastor de Adoración",
    tag: "Música",
    color: "oro",
    icon: Music,
    img: worshipPastorImg,
    bio: "El Pastor David lidera nuestro ministerio de adoración con excelencia y pasión. Con más de 20 años de experiencia en el ministerio musical, crea una atmósfera donde las personas pueden encontrarse con la presencia de Dios. Su compromiso con la excelencia inspira a todo nuestro equipo.",
    verse: "\"Cantad al Señor un cántico nuevo.\" — Salmo 96:1",
    years: "20+ años",
    focus: "Adoración & Artes",
  },
];

const values = [
  { icon: BookOpen, color: "cobalto", title: "Arraigados en la Palabra", desc: "Cada sermón, cada clase y cada conversación nace de las Escrituras." },
  { icon: Heart, color: "naranja", title: "Guiados por el Amor", desc: "Pastoreamos con gracia, compasión y un genuino interés por cada persona." },
  { icon: Users, color: "oro", title: "Construyendo Comunidad", desc: "Nadie camina solo aquí. Vivimos la fe juntos, en cada temporada." },
  { icon: Star, color: "cian-link", title: "Comprometidos con la Excelencia", desc: "Damos nuestro mejor esfuerzo a Dios en todo lo que hacemos." },
];

export function Pastors() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={heroImg} alt="Nuestros pastores" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/55 to-navy-dark/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
              Conoce a quienes nos guían
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight max-w-3xl">
              Pastores con <span className="italic text-oro">corazón</span> para servir.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Líderes llamados, equipados y apasionados por ver cada vida transformada por el evangelio de Jesús.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hueso to-transparent" />
      </section>

      {/* ===== INTRO ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Nuestra visión de liderazgo
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
              Líderes que <span className="text-cobalto">sirven</span>, no que se sirven.
            </h2>
            <p className="text-lg text-pizarra leading-relaxed mb-6">
              Cada pastor de nuestra iglesia fue llamado a pastorear con humildad. No buscamos reconocimiento ni poder; buscamos ver a cada persona crecer en su fe, encontrar su propósito y experimentar la gracia de Dios.
            </p>
            <p className="text-lg text-pizarra leading-relaxed mb-8">
              Somos una familia liderada por personas que también necesitan a Dios cada día, caminando junto a ustedes, no por encima.
            </p>
            <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-cobalto">
              <Quote className="text-cobalto mb-3" size={28} />
              <p className="text-xl text-navy-dark italic mb-3 leading-relaxed">
                "El que quiera ser el primero entre ustedes, será su siervo."
              </p>
              <p className="text-pizarra">— Mateo 20:27</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${v.color}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`text-${v.color}`} size={22} />
                  </div>
                  <h3 className="text-navy-dark mb-2 leading-snug">{v.title}</h3>
                  <p className="text-sm text-pizarra leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PASTORS — ALTERNATING SECTIONS ===== */}
      {pastors.map((pastor, index) => {
        const Icon = pastor.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={pastor.name}
            className={`py-16 lg:py-24 ${isEven ? "bg-white" : "bg-hueso"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image side */}
                <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-cobalto/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-naranja/10 rounded-full blur-3xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                    <img
                      src={pastor.img}
                      alt={pastor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className={`inline-flex items-center gap-2 bg-${pastor.color} text-white text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-md`}
                      >
                        <Icon size={14} /> {pastor.tag}
                      </span>
                    </div>
                  </div>
                  {/* Floating years card */}
                  <div
                    className={`absolute -bottom-6 ${isEven ? "-right-4 md:-right-8" : "-left-4 md:-left-8"} bg-white rounded-2xl shadow-xl p-5`}
                  >
                    <div className={`text-3xl text-${pastor.color} mb-1`}>{pastor.years}</div>
                    <div className="text-sm text-pizarra">{pastor.focus}</div>
                  </div>
                </div>

                {/* Text side */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <span className="text-naranja uppercase tracking-widest text-sm mb-3 inline-block">
                    {pastor.role}
                  </span>
                  <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
                    {pastor.name}
                  </h2>
                  <p className="text-lg text-pizarra leading-relaxed mb-8">{pastor.bio}</p>
                  <div className={`bg-${pastor.color}/5 border-l-4 border-${pastor.color} rounded-xl p-5 mb-8`}>
                    <Quote className={`text-${pastor.color} mb-2`} size={22} />
                    <p className="text-navy-dark italic leading-relaxed">{pastor.verse}</p>
                  </div>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 bg-${pastor.color} hover:opacity-90 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:-translate-y-0.5 group`}
                  >
                    Conectar con el pastor
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ===== PRAYER / CTA ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={prayerBgImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/92 via-cobalto/85 to-navy-dark/90" />
            <div className="relative p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center text-white">
              <div>
                <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
                  Estamos aquí para ti
                </span>
                <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                  ¿Querés hablar con{" "}
                  <span className="italic text-oro">un pastor</span>?
                </h2>
                <p className="text-white/85 text-lg leading-relaxed mb-8">
                  Ya sea que estés buscando orientación espiritual, atravesando un momento difícil o simplemente querés conocernos, nuestro equipo está disponible. No estás solo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-naranja hover:bg-naranja/90 text-white px-7 py-4 rounded-xl transition-all shadow-lg shadow-naranja/30 hover:-translate-y-0.5 group"
                  >
                    Escríbenos
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/meetings"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-7 py-4 rounded-xl transition-all"
                  >
                    Ver reuniones
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-5">
                <h3 className="text-2xl text-oro mb-2">Solicitud de oración</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nuestro equipo de intercesión ora cada semana por los pedidos que recibimos. Compartí lo que está en tu corazón.
                </p>
                {[
                  { label: "Tu nombre", placeholder: "Juan García", type: "text" },
                  { label: "Tu pedido", placeholder: "¿Por qué podemos orar por ti?", type: "textarea" },
                ].map((field) =>
                  field.type === "textarea" ? (
                    <div key={field.label}>
                      <label className="block text-white/80 text-sm mb-2">{field.label}</label>
                      <textarea
                        rows={3}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-oro transition-colors resize-none text-sm"
                      />
                    </div>
                  ) : (
                    <div key={field.label}>
                      <label className="block text-white/80 text-sm mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-oro transition-colors text-sm"
                      />
                    </div>
                  )
                )}
                <button className="w-full bg-oro hover:bg-oro/90 text-navy-dark py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                  <Heart size={16} /> Enviar pedido de oración
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
