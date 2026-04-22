import { Link } from "react-router";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1773808195036-5a9aa53423b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";
const story1 = "https://images.unsplash.com/photo-1760319726429-fcda77d3cb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const story2 = "https://images.unsplash.com/photo-1675285131277-b7097b8b1bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const story3 = "https://images.unsplash.com/photo-1760367121593-97b9a02bbd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const closingImg = "https://images.unsplash.com/photo-1775400713633-e4b2b3577fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";

const chapters = [
  {
    year: "1985",
    title: "Un pequeño comienzo",
    sub: "La fundación",
    body:
      "Todo comenzó en una sala de estar — un puñado de familias con el corazón lleno y las paredes vacías. Oraban, cantaban y creyeron a Dios por más. La Iglesia Cristo La Roca nació de ese comienzo ordinario y fiel.",
    img: story1,
  },
  {
    year: "1992",
    title: "Nuestro primer hogar",
    sub: "Un edificio, un hito",
    body:
      "Después de siete años reuniéndonos en hogares y salones alquilados, la congregación adquirió un pequeño edificio en la Calle Fe. No era lujoso — pero era nuestro, y fue el suelo donde incontables historias se desarrollaron.",
    img: story2,
  },
  {
    year: "2005 – 2015",
    title: "Una comunidad que crece",
    sub: "Nuevos ministerios, nuevos corazones",
    body:
      "Ministerio de niños. Noches de jóvenes. Estudios bíblicos para mujeres. Desayunos de hombres. Viajes misioneros a Latinoamérica y África. A medida que la iglesia creció, también lo hizo su alcance — no solo en números, sino en profundidad.",
    img: story3,
  },
];

const timeline = [
  { year: "1985", event: "Iglesia fundada", color: "cobalto" },
  { year: "1992", event: "Primer edificio", color: "naranja" },
  { year: "2005", event: "Expansión de ministerios", color: "oro" },
  { year: "2015", event: "Misiones globales lanzadas", color: "cian-link" },
  { year: "2020", event: "Ministerio digital", color: "pizarra" },
  { year: "2026", event: "Creciendo con fuerza", color: "cobalto" },
];

export function History() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src={heroImg} alt="Our history" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
              Desde 1985
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight max-w-3xl">
              Cuatro décadas de <span className="italic text-oro">gracia</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Cada banco guarda una historia. Cada domingo, se escribe un nuevo capítulo.
              Esta es la nuestra.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
          El corazón de nuestra historia
        </span>
        <h2 className="text-4xl md:text-5xl text-navy-dark mb-8 leading-tight">
          Una historia que Dios sigue <span className="italic text-cobalto">escribiendo</span>.
        </h2>
        <p className="text-lg text-pizarra leading-relaxed">
          Por más de cuarenta años, la Iglesia Cristo La Roca ha sido un faro de fe en nuestra ciudad — no por lo que construimos, sino por a Quién fuimos invitados a seguir. Esta es la historia de personas ordinarias diciendo sí a un Dios extraordinario.
        </p>
      </section>

      {/* ZIGZAG CHAPTERS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {chapters.map((c, i) => (
            <article
              key={c.year}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative group">
                <div className={`absolute -inset-4 ${i % 2 === 0 ? "bg-cobalto/10" : "bg-naranja/10"} rounded-3xl -z-10 transition-transform group-hover:scale-105`} />
                <img
                  src={c.img}
                  alt={c.title}
                  className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4">
                  <div className="text-naranja text-sm uppercase tracking-widest">Capítulo</div>
                  <div className="text-3xl text-navy-dark">{c.year}</div>
                </div>
              </div>

              <div>
                <span className="text-naranja uppercase tracking-widest text-sm mb-3 inline-block">
                  {c.sub}
                </span>
                <h3 className="text-3xl md:text-4xl text-navy-dark mb-6 leading-tight">
                  {c.title}
                </h3>
                <p className="text-lg text-pizarra leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISUAL TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
            Hitos
          </span>
          <h2 className="text-4xl md:text-5xl text-navy-dark mb-6">Nuestro camino de un vistazo</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cobalto via-naranja to-oro rounded-full" />
          <div className="space-y-10 md:space-y-16">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 w-full">
                  <div
                    className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 md:p-8 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className={`inline-block bg-${t.color} text-white px-4 py-1.5 rounded-full text-sm mb-3`}>
                      {t.year}
                    </div>
                    <h3 className="text-xl text-navy-dark">{t.event}</h3>
                  </div>
                </div>
                <div className={`hidden md:flex w-6 h-6 bg-${t.color} rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0`} />
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / CLOSING */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <img src={closingImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-cobalto/90 to-navy-dark/95" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Sparkles className="text-oro mx-auto mb-6" size={40} />
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            El mejor capítulo es el <span className="italic text-oro">próximo</span>.
          </h2>
          <p className="text-xl text-white/85 leading-relaxed mb-12 max-w-2xl mx-auto">
            Seguimos soñando. Seguimos alcanzando. Seguimos creyendo a Dios por lo imposible.
            Y nos encantaría que vos seas parte de lo que viene.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-oro hover:bg-oro/90 text-navy-dark px-7 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Unite a la historia <ArrowRight size={16} />
            </Link>
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-7 py-4 rounded-xl transition-all"
            >
              Explorar ministerios
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl text-oro mb-2">40+</div>
              <div className="text-sm text-white/70 flex items-center justify-center gap-1.5"><Heart size={14}/> Años</div>
            </div>
            <div>
              <div className="text-4xl text-oro mb-2">500+</div>
              <div className="text-sm text-white/70 flex items-center justify-center gap-1.5"><Users size={14}/> Miembros</div>
            </div>
            <div>
              <div className="text-4xl text-oro mb-2">12</div>
              <div className="text-sm text-white/70 flex items-center justify-center gap-1.5"><Sparkles size={14}/> Ministerios</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}