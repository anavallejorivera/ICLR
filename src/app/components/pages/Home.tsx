import { Link } from "react-router";
import {
  Heart,
  Users,
  Sparkles,
  Play,
  Calendar,
  MapPin,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  Baby,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

const heroImg =
  "https://images.unsplash.com/photo-1775400713633-e4b2b3577fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";
const communityImg =
  "https://images.unsplash.com/photo-1760367121593-97b9a02bbd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80";
const bowedImg =
  "https://images.unsplash.com/photo-1760367120345-2b96c53de838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const familyImg =
  "https://images.unsplash.com/photo-1772723246515-6a6c6418156d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const youngMenImg =
  "https://images.unsplash.com/photo-1760574740271-55e6683afe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const bibleStudyImg =
  "https://images.unsplash.com/photo-1716666178764-2d8749193d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const prayerImg =
  "https://images.unsplash.com/photo-1662151926492-abb5c7ae485c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const readingImg =
  "https://images.unsplash.com/photo-1515615200917-f9623be1d8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const crossImg =
  "https://images.unsplash.com/photo-1766052828568-a958dd21b978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const handsRaisedImg =
  "https://images.unsplash.com/photo-1662151820001-0c8d949304a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

const ministries = [
  { name: "Ministerio de Hombres", icon: Users, color: "cobalto", img: youngMenImg, desc: "Hermandad, rendición de cuentas y crecimiento." },
  { name: "Ministerio de Mujeres", icon: Heart, color: "naranja", img: readingImg, desc: "Una hermandad arraigada en la fe y el propósito." },
  { name: "Jóvenes", icon: Sparkles, color: "oro", img: bibleStudyImg, desc: "Empoderando a la próxima generación." },
  { name: "Niños", icon: Baby, color: "cian-link", img: familyImg, desc: "Aprendizaje seguro, divertido y centrado en Cristo." },
  { name: "Misiones", icon: Globe, color: "pizarra", img: crossImg, desc: "Llevando esperanza a nuestra ciudad y al mundo." },
  { name: "Oración", icon: HandHeart, color: "cobalto", img: prayerImg, desc: "De pie juntos delante de Dios." },
];

const testimonials = [
  {
    name: "María González",
    role: "Miembro desde 2019",
    img: "https://images.unsplash.com/photo-1772242859666-67d57946c3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
    quote: "La Iglesia Cristo La Roca se siente como un hogar. El amor y el apoyo que encontré aquí transformó mi caminar con Dios.",
  },
  {
    name: "Javier & Sara Wilson",
    role: "Casados en 2023",
    img: "https://images.unsplash.com/photo-1662151939035-7b7651690c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
    quote: "Nos conocimos en un grupo pequeño y crecimos juntos en la fe. Esta iglesia es donde se construyó nuestra familia.",
  },
  {
    name: "David Okafor",
    role: "Líder de Jóvenes",
    img: "https://images.unsplash.com/photo-1631801752478-f45b08891d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
    quote: "De estar perdido a liderar — esta comunidad me dio un propósito y una familia que nunca supe que necesitaba.",
  },
];

const gallery = [
  { src: communityImg, h: "h-80" },
  { src: handsRaisedImg, h: "h-56" },
  { src: bowedImg, h: "h-64" },
  { src: bibleStudyImg, h: "h-72" },
  { src: prayerImg, h: "h-60" },
  { src: familyImg, h: "h-80" },
  { src: crossImg, h: "h-64" },
  { src: youngMenImg, h: "h-56" },
];

export function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[640px] max-h-[900px] overflow-hidden">
        <img src={heroImg} alt="Worship community" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-oro animate-pulse" />
                Domingos a las 9:00 AM y 11:00 AM
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight">
                Este es tú <span className="text-oro italic">lugar</span>.
              </h1>
              <p className="text-lg md:text-2xl text-white/85 mb-10 max-w-2xl leading-relaxed">
                Una comunidad cálida y acogedora donde la fe, la esperanza y el amor cobran vida juntos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-naranja hover:bg-naranja/90 text-white px-7 py-4 rounded-xl transition-all shadow-lg shadow-naranja/30 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Planificá tu visita
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#sermon"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-7 py-4 rounded-xl transition-all"
                >
                  <Play size={16} /> Ver último sermón
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hueso to-transparent" />
      </section>

      {/* ===== WELCOME ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-oro/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cobalto/20 rounded-full blur-3xl" />
            <img
              src={communityImg}
              alt="Our community"
              className="relative rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-naranja/10 flex items-center justify-center">
                  <Heart className="text-naranja" size={22} />
                </div>
                <div>
                  <div className="text-2xl text-navy-dark">500+</div>
                  <div className="text-sm text-pizarra">Vidas tocadas por semana</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Bienvenido a casa
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
              Un lugar donde <span className="text-cobalto">todos</span> encuentran gracia.
            </h2>
            <p className="text-lg text-pizarra leading-relaxed mb-6">
              Somos una comunidad multigeneracional vibrante dedicada a amar a Dios y amar a las personas. Ya sea que estés explorando la fe por primera vez o caminando con Jesús desde hace décadas, hay un lugar aquí con tu nombre.
            </p>
            <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-cobalto mb-8">
              <Quote className="text-cobalto mb-3" size={28} />
              <p className="text-xl text-navy-dark italic mb-3 leading-relaxed">
                "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos."
              </p>
              <p className="text-pizarra">— Mateo 18:20</p>
            </div>
            <Link
              to="/history"
              className="inline-flex items-center gap-2 text-cobalto hover:text-naranja transition-colors group"
            >
              Conocé nuestra historia
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERMON ===== */}
      <section id="sermon" className="relative py-20 lg:py-28 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={handsRaisedImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
                Último sermón
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                Encontrando paz en tiempos <span className="italic text-oro">inciertos</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                El Pastor Miguel Johnson nos guía a través de Filipenses 4 y nos muestra cómo la paz de Dios puede guardar nuestros corazones y mentes, incluso cuando todo parece incierto.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-white/70 mb-8">
                <span className="flex items-center gap-2"><Calendar size={16} /> 19 de abril, 2026</span>
                <span className="flex items-center gap-2"><Play size={16} /> 38 min</span>
              </div>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-naranja hover:bg-naranja/90 text-white px-6 py-3 rounded-xl transition-all"
              >
                <Play size={16} /> Ver sermón completo
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black group cursor-pointer">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                title="Latest sermon"
                allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEXT EVENT ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-naranja uppercase tracking-widest text-sm mb-2 inline-block">
              No te lo pierdas
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark">Próximos eventos</h2>
          </div>
          <Link to="/meetings" className="text-cobalto hover:text-naranja inline-flex items-center gap-2 group">
            Ver todos los eventos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Celebración de Pascua", date: "May 3", time: "9:00 AM", img: handsRaisedImg, badge: "Especial" },
            { title: "Cena Comunitaria", date: "May 10", time: "6:00 PM", img: familyImg, badge: "Todos" },
            { title: "Noche de Jóvenes", date: "May 17", time: "7:00 PM", img: bibleStudyImg, badge: "Estudiantes" },
          ].map((e) => (
            <article
              key={e.title}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 text-center shadow-md">
                  <div className="text-naranja text-xs uppercase tracking-wider">{e.date.split(" ")[0]}</div>
                  <div className="text-navy-dark text-xl leading-none">{e.date.split(" ")[1]}</div>
                </div>
                <span className="absolute top-4 right-4 bg-cobalto text-white text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {e.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-navy-dark mb-3 group-hover:text-cobalto transition-colors">{e.title}</h3>
                <div className="flex items-center gap-4 text-sm text-pizarra">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {e.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== MINISTRIES GRID ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Encuentra tu lugar
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark mb-6">
              Ministerios para cada <span className="italic text-cobalto">temporada</span>
            </h2>
            <p className="text-lg text-pizarra leading-relaxed">
              Desde los más pequeños hasta los abuelos, hay una comunidad esperando caminar con vos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.name}
                  to="/ministries"
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 aspect-[4/5]"
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className={`w-12 h-12 rounded-full bg-${m.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-2xl mb-2">{m.name}</h3>
                    <p className="text-white/80 text-sm mb-3">{m.desc}</p>
                    <span className="inline-flex items-center gap-1 text-oro text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-hueso via-white to-hueso overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cobalto/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-naranja/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark">De nuestra familia</h2>
          </div>

          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-14 min-h-[360px]">
            <Quote className="text-oro mb-6" size={48} />
            <div key={testimonialIdx} className="animate-[fadeIn_0.6s_ease]">
              <p className="text-xl md:text-2xl text-navy-dark leading-relaxed mb-8 italic">
                "{testimonials[testimonialIdx].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[testimonialIdx].img}
                  alt={testimonials[testimonialIdx].name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <div className="text-navy-dark">{testimonials[testimonialIdx].name}</div>
                  <div className="text-sm text-pizarra">{testimonials[testimonialIdx].role}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === testimonialIdx ? "w-8 bg-cobalto" : "w-2 bg-acero/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-acero/30 hover:bg-cobalto hover:text-white hover:border-cobalto text-pizarra flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-acero/30 hover:bg-cobalto hover:text-white hover:border-cobalto text-pizarra flex items-center justify-center transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
            Vida en la Iglesia
          </span>
          <h2 className="text-4xl md:text-5xl text-navy-dark mb-6">Momentos que amamos</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallery.map((g, i) => (
            <div
              key={i}
              className={`break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer ${g.h}`}
            >
              <img
                src={g.src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== DONATIONS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src={bowedImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-cobalto via-cobalto/95 to-navy-dark/95" />
          <div className="relative px-6 py-16 md:p-16 grid lg:grid-cols-2 gap-10 items-center text-white">
            <div>
              <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
                Asociate con nosotros
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                Tu ofrenda cambia <span className="italic text-oro">vidas</span>.
              </h2>
              <p className="text-white/85 text-lg leading-relaxed">
                Cada donación ayuda a alimentar familias, discipular líderes y compartir la esperanza de Jesús en nuestra ciudad y alrededor del mundo.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["$25", "$50", "$100"].map((v) => (
                  <button
                    key={v}
                    className="py-3 rounded-xl border border-white/30 hover:bg-oro hover:border-oro hover:text-navy-dark transition-all"
                  >
                    {v}
                  </button>
                ))}
              </div>
              <button className="w-full bg-oro hover:bg-oro/90 text-navy-dark py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                <HandHeart size={18} /> Donar con seguridad
              </button>
              <p className="text-white/60 text-xs text-center mt-4">
                Pago seguro · Deducible de impuestos · 100% a la misión
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <iframe
                title="Church location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01,40.705,-73.99,40.72&layer=mapnik"
                className="w-full h-full border-0"
              />
            </div>
            <div>
              <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
                Ven como eres
              </span>
              <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
                Visitanos este domingo
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cobalto/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cobalto" size={20} />
                  </div>
                  <div>
                    <div className="text-navy-dark">Calle Diego Maria claret 13</div>
                    <div className="text-pizarra text-sm">Centro-casco antiguo, Cáceres 10002</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-naranja/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-naranja" size={20} />
                  </div>
                  <div>
                    <div className="text-navy-dark">Domingos · 9:00 AM y 11:00 AM</div>
                    <div className="text-pizarra text-sm">Miércoles · 7:00 PM culto de mitad de semana</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-cobalto hover:bg-cobalto/90 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-cobalto/20 hover:-translate-y-0.5"
                >
                  Contactanos <ArrowRight size={16} />
                </Link>
                <Link
                  to="/meetings"
                  className="inline-flex items-center gap-2 border border-acero/30 hover:border-cobalto hover:text-cobalto text-pizarra px-6 py-3 rounded-xl transition-all"
                >
                  Ver horarios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
