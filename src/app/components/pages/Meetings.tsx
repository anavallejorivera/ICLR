import { Link } from "react-router";
import { Clock, MapPin, ArrowRight, Calendar, Coffee, Music, BookOpen, Sparkles, Users, HandHeart } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1762013728525-4e093240ae7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";
const sundayImg = "https://images.unsplash.com/photo-1775400713633-e4b2b3577fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80";

const sundays = [
  { time: "9:00 AM", title: "Primer culto", desc: "Adoración contemporánea y predicación", icon: Music, color: "cobalto" },
  { time: "10:30 AM", title: "Escuela dominical", desc: "Todas las edades, distintas aulas", icon: BookOpen, color: "oro" },
  { time: "11:00 AM", title: "Segundo culto", desc: "El mismo mensaje, diferente horario", icon: Music, color: "cobalto" },
];

const midweek = [
  {
    day: "Martes",
    time: "6:00 AM",
    title: "Reunión de oración",
    desc: "Intercesión temprana por nuestra iglesia y ciudad.",
    location: "Capilla",
    icon: HandHeart,
    color: "cobalto",
    img: "https://images.unsplash.com/photo-1662151926492-abb5c7ae485c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
  },
  {
    day: "Miércoles",
    time: "7:00 PM",
    title: "Estudio bíblico central",
    desc: "Profundizá en las Escrituras juntos. El grupo de jóvenes se reúne al mismo tiempo.",
    location: "Santuario principal",
    icon: BookOpen,
    color: "naranja",
    img: "https://images.unsplash.com/photo-1716666178764-2d8749193d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
  },
  {
    day: "Jueves",
    time: "6:30 PM",
    title: "Estudio bíblico de mujeres",
    desc: "Escritura, historias y comunidad para mujeres de todas las edades.",
    location: "Salón de compañerismo",
    icon: Sparkles,
    color: "oro",
    img: "https://images.unsplash.com/photo-1515615200917-f9623be1d8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
  },
  {
    day: "Sábado",
    time: "8:00 AM",
    title: "Desayuno de hombres",
    desc: "Café, huevos, conversaciones honestas y oración para la semana.",
    location: "Salón de compañerismo",
    icon: Coffee,
    color: "pizarra",
    img: "https://images.unsplash.com/photo-1760574740271-55e6683afe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80",
  },
];

const specials = [
  {
    title: "Celebración de Pascua",
    date: "3 de mayo · 9:00 AM",
    desc: "Una mañana llena de gozo con adoración, bautismos y la mejor noticia de la historia.",
    img: "https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    badge: "Especial",
  },
  {
    title: "Cena comunitaria",
    date: "10 de mayo · 6:00 PM",
    desc: "Todos son bienvenidos a la mesa. Traé un amigo, traé hambre.",
    img: "https://images.unsplash.com/photo-1772723246515-6a6c6418156d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    badge: "Familia",
  },
  {
    title: "Domingo de misiones",
    date: "1 de junio · 11:00 AM",
    desc: "Conocé a nuestros socios globales y aprendé cómo participar en lo que Dios está haciendo.",
    img: "https://images.unsplash.com/photo-1758599667717-27c61bcdd14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    badge: "Misiones",
  },
];

export function Meetings() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/55 to-navy-dark/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
              Cuando nos reunimos
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight max-w-3xl">
              Te esperamos el <span className="italic text-oro">domingo</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Cultos, estudios y momentos donde la fe se vuelve real. Todos bienvenidos — venís como sos.
            </p>
          </div>
        </div>
      </section>

      {/* SUNDAY FEATURED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-cobalto/10 rounded-3xl -z-10" />
            <img
              src={sundayImg}
              alt="Sunday worship"
              className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-naranja/10 flex items-center justify-center">
                  <Coffee className="text-naranja" size={22} />
                </div>
                <div>
                  <div className="text-navy-dark">Cafetería</div>
                  <div className="text-sm text-pizarra">Todos los domingos</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Cultos del domingo
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
              La <span className="italic text-cobalto">reunión</span> principal.
            </h2>
            <p className="text-lg text-pizarra leading-relaxed mb-10">
              Adoración dinámica, enseñanza práctica y una comunidad que recibe. Ambos cultos ofrecen la misma experiencia — venís cuando más te convenga.
            </p>

            <div className="space-y-4 mb-8">
              {sundays.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-${s.color} text-white flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-pizarra mb-1">
                        <Clock size={14} /> {s.time}
                      </div>
                      <h3 className="text-xl text-navy-dark">{s.title}</h3>
                      <p className="text-sm text-pizarra">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-naranja hover:bg-naranja/90 text-white px-7 py-4 rounded-xl transition-all shadow-lg shadow-naranja/20 hover:-translate-y-0.5"
            >
              Acompañanos este domingo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MIDWEEK */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Ritmos entre semana
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
              Fe entre <span className="italic text-cobalto">domingos</span>.
            </h2>
            <p className="text-lg text-pizarra leading-relaxed">
              Más pequeños, más profundos, más cercanos. Así seguimos creciendo durante la semana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {midweek.map((m) => {
              const Icon = m.icon;
              return (
                <article
                  key={m.title}
                  className="group bg-hueso rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 relative overflow-hidden">
                      <img
                        src={m.img}
                        alt={m.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-navy-dark/20" />
                      <div className={`absolute top-4 left-4 bg-${m.color} text-white px-3 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-md`}>
                        {m.day}
                      </div>
                    </div>
                    <div className="col-span-3 p-6">
                      <div className="flex items-center gap-2 text-sm text-pizarra mb-2">
                        <Icon size={16} className={`text-${m.color}`} />
                        <Clock size={14} /> {m.time}
                      </div>
                      <h3 className="text-xl text-navy-dark mb-2 group-hover:text-cobalto transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-sm text-pizarra leading-relaxed mb-4">{m.desc}</p>
                      <div className="flex items-center gap-1.5 text-xs text-pizarra">
                        <MapPin size={12} /> {m.location}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-naranja uppercase tracking-widest text-sm mb-3 inline-block">
              Eventos especiales
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark leading-tight">
              Marcá tu <span className="italic text-cobalto">calendario</span>.
            </h2>
          </div>
          <Link to="/contact" className="text-cobalto hover:text-naranja inline-flex items-center gap-2 group">
            Recibir recordatorios <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specials.map((e) => (
            <article
              key={e.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                <span className="absolute top-4 right-4 bg-oro text-navy-dark text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  {e.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-naranja mb-3">
                  <Calendar size={14} /> {e.date}
                </div>
                <h3 className="text-xl text-navy-dark mb-3 group-hover:text-cobalto transition-colors">
                  {e.title}
                </h3>
                <p className="text-sm text-pizarra leading-relaxed">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PLAN YOUR VISIT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl text-navy-dark mb-4 leading-tight">
              ¿Es tu primera vez?
            </h2>
            <p className="text-lg text-pizarra">
              Todo lo que necesitás para sentirte como en casa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: MapPin, color: "cobalto", title: "Dónde", body: "Calle Fe 123\nCiudad, Provincia 1234" },
              { icon: Users, color: "naranja", title: "Vestimenta", body: "Vienes tal como eres.\nLo casual está perfecto." },
              { icon: Clock, color: "oro", title: "Llegá temprano", body: "15 minutos antes\npara café y saludos." },
            ].map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.title} className="text-center">
                  <div className={`w-16 h-16 bg-${i.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`text-${i.color}`} size={26} />
                  </div>
                  <h3 className="text-xl text-navy-dark mb-2">{i.title}</h3>
                  <p className="text-pizarra whitespace-pre-line">{i.body}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cobalto hover:bg-cobalto/90 text-white px-7 py-4 rounded-xl transition-all shadow-lg shadow-cobalto/20 hover:-translate-y-0.5"
            >
              Avisanos que vienes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
