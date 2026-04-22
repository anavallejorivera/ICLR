import { Link } from "react-router";
import { Users, Heart, Sparkles, Baby, Globe, HandHeart, ArrowRight, Music, HeartHandshake } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1760367120244-8db5e65191a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";

const ministries = [
  {
    title: "Ministerio de Hombres",
    tag: "Hermandad",
    icon: Users,
    color: "cobalto",
    img: "https://images.unsplash.com/photo-1760574740271-55e6683afe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Hombres reales. Fe real. Rendición de cuentas real. Nos reunimos semanalmente para orar, desayunar y tener conversaciones honestas sobre la vida.",
    meta: "Sábados · 8:00 AM",
  },
  {
    title: "Ministerio de Mujeres",
    tag: "Hermandad",
    icon: Heart,
    color: "naranja",
    img: "https://images.unsplash.com/photo-1515615200917-f9623be1d8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Una hermandad arraigada en las Escrituras e historias compartidas. Estudios bíblicos, mentoría y un espacio para crecer juntas.",
    meta: "Jueves · 6:30 PM",
  },
  {
    title: "Ministerio de Jóvenes",
    tag: "Estudiantes",
    icon: Sparkles,
    color: "oro",
    img: "https://images.unsplash.com/photo-1716666178764-2d8749193d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Adolescentes de secundaria descubriendo su propia fe — a través de enseñanza, juegos, adoración y amistades que duran para toda la vida.",
    meta: "Miércoles · 7:00 PM",
  },
  {
    title: "Ministerio de Niños",
    tag: "Niños",
    icon: Baby,
    color: "cian-link",
    img: "https://images.unsplash.com/photo-1772723246515-6a6c6418156d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Seguro, divertido y centrado en Cristo. Desde la guardería hasta 5.º grado, plantamos semillas que crecen toda una vida.",
    meta: "Domingos · 9 y 11 AM",
  },
  {
    title: "Misiones",
    tag: "Ir",
    icon: Globe,
    color: "pizarra",
    img: "https://images.unsplash.com/photo-1758599667717-27c61bcdd14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Desde nuestro barrio hasta las naciones. Sirviendo, yendo y asociándonos con quienes llevan esperanza al mundo.",
    meta: "Alcance durante todo el año",
  },
  {
    title: "Adoración",
    tag: "Música",
    icon: Music,
    color: "naranja",
    img: "https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Músicos, vocalistas y creativos técnicos usando sus dones para elevar corazones y apuntar cada domingo hacia Jesús.",
    meta: "Ensayos · Jueves",
  },
  {
    title: "Oración",
    tag: "Intercesión",
    icon: HandHeart,
    color: "cobalto",
    img: "https://images.unsplash.com/photo-1662151926492-abb5c7ae485c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "De pie en la brecha por nuestra iglesia, nuestra ciudad y el mundo. Un ministerio silencioso y poderoso que sostiene todo lo demás.",
    meta: "Martes · 6:00 AM",
  },
  {
    title: "Obra Social",
    tag: "Compasión",
    icon: HeartHandshake,
    color: "naranja",
    img: "https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Llevamos esperanza donde más se necesita: comedores, visitas a hogares, ayuda a familias vulnerables y acompañamiento a los que sufren.",
    meta: "Sábados · Actividades semanales",
  },
  {
    title: "Voluntarios",
    tag: "Servir",
    icon: Users,
    color: "oro",
    img: "https://images.unsplash.com/photo-1760992003923-ed5d455c1164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
    desc: "Hospitalidad, instalación, estacionamiento, recepcionistas — el domingo sucede gracias a vos. Encontrá el equipo que se adapta a cómo Dios te hizo.",
    meta: "Todos los domingos",
  },
];

export function Ministries() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/55 to-navy-dark/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
              Encontrá tu gente
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight max-w-3xl">
              Fuiste creado para <span className="italic text-oro">pertenecer</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Desde niños hasta abuelos, músicos hasta misioneros — hay una comunidad aquí donde tu historia encaja.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
            Nuestros ministerios
          </span>
          <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
            Un lugar para cada <span className="italic text-cobalto">temporada</span> de la vida.
          </h2>
          <p className="text-lg text-pizarra leading-relaxed">
            Nueve comunidades, una familia. Explorá dónde encajás.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ministries.map((m) => {
            const Icon = m.icon;
            return (
              <article
                key={m.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                  <span className={`absolute top-4 left-4 bg-${m.color} text-white text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md`}>
                    {m.tag}
                  </span>
                  <div className={`absolute -bottom-6 right-6 w-14 h-14 rounded-2xl bg-${m.color} flex items-center justify-center text-white shadow-xl border-4 border-white`}>
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-7 pt-9 flex flex-col flex-1">
                  <h3 className="text-2xl text-navy-dark mb-3 group-hover:text-cobalto transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-pizarra leading-relaxed mb-5 flex-1">{m.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="text-sm text-pizarra">{m.meta}</span>
                    <ArrowRight
                      size={18}
                      className="text-cobalto group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1760367121593-97b9a02bbd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cobalto/95 via-cobalto/90 to-navy-dark/95" />
          <div className="relative p-10 md:p-16 text-white text-center max-w-3xl mx-auto">
            <HandHeart className="text-oro mx-auto mb-6" size={40} />
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              ¿Listo para <span className="italic text-oro">involucrarte</span>?
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-10">
              Cada don, cada hora, cada "sí" importa. Contanos un poco sobre vos y te ayudaremos a encontrar tu lugar para servir.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-oro hover:bg-oro/90 text-navy-dark px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Conectate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}