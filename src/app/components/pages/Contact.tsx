import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Youtube, CheckCircle, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router";

const heroImg =
  "https://images.unsplash.com/photo-1558541966-ee7182e26d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=80";
const prayerImg =
  "https://images.unsplash.com/photo-1644292364271-59f2b61a2323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";

const contactItems = [
  {
    icon: MapPin,
    color: "cobalto",
    label: "Dirección",
    lines: ["Calle Fe 123", "Ciudad, Provincia 1234"],
  },
  {
    icon: Phone,
    color: "naranja",
    label: "Teléfono",
    lines: ["(555) 123-4567"],
  },
  {
    icon: Mail,
    color: "oro",
    label: "Correo electrónico",
    lines: ["info@iglesiacristolaroca.org"],
  },
];

const hours = [
  { day: "Lunes – Viernes", time: "9:00 AM – 5:00 PM" },
  { day: "Sábado", time: "Cerrado" },
  { day: "Domingo", time: "8:00 AM – 1:00 PM" },
];

const faqs = [
  {
    q: "¿Tengo que ser creyente para venir?",
    a: "¡Para nada! Todos son bienvenidos, independientemente de su historia o creencias. Solo venís como sos.",
  },
  {
    q: "¿Hay lugar para mis hijos?",
    a: "Sí, contamos con ministerio de niños durante todos los cultos del domingo, desde bebés hasta 5.º grado.",
  },
  {
    q: "¿Cómo puedo conectarme a un grupo pequeño?",
    a: "Escribinos o acercate cualquier domingo. Te ayudaremos a encontrar el grupo ideal para vos.",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Contacto" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy-dark/55 to-navy-dark/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <span className="text-oro uppercase tracking-widest text-sm mb-4 inline-block">
              Estamos para escucharte
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight max-w-3xl">
              Hablemos, <span className="italic text-oro">es fácil</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Tenés preguntas, necesitás oración o simplemente querés conocernos — estamos aquí y nos alegra saber de vos.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hueso to-transparent" />
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <span className="text-naranja uppercase tracking-widest text-sm mb-3 inline-block">
              Escribinos
            </span>
            <h2 className="text-3xl md:text-4xl text-navy-dark mb-8 leading-tight">
              Envianos un mensaje
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-cobalto/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-cobalto" size={40} />
                </div>
                <h3 className="text-2xl text-navy-dark mb-3">¡Mensaje recibido!</h3>
                <p className="text-pizarra max-w-sm leading-relaxed">
                  Gracias por comunicarte. Nuestro equipo te responderá en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-navy-dark text-sm mb-2">
                      Tu nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan García"
                      className="w-full px-4 py-3 bg-hueso border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cobalto focus:border-transparent transition-all text-navy-dark placeholder-acero"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-navy-dark text-sm mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@ejemplo.com"
                      className="w-full px-4 py-3 bg-hueso border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cobalto focus:border-transparent transition-all text-navy-dark placeholder-acero"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-navy-dark text-sm mb-2">
                    Motivo del contacto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-hueso border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cobalto focus:border-transparent transition-all text-navy-dark appearance-none cursor-pointer"
                  >
                    <option value="">Seleccioná una opción…</option>
                    <option value="visita">Quiero visitar la iglesia</option>
                    <option value="oracion">Pedido de oración</option>
                    <option value="ministerio">Unirme a un ministerio</option>
                    <option value="pastor">Hablar con un pastor</option>
                    <option value="evento">Información sobre un evento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy-dark text-sm mb-2">
                    Tu mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 bg-hueso border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cobalto focus:border-transparent transition-all resize-none text-navy-dark placeholder-acero"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cobalto hover:bg-cobalto/90 text-white px-8 py-4 rounded-xl transition-all shadow-lg shadow-cobalto/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 group"
                >
                  <Send size={18} />
                  Enviar mensaje
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-acero text-center">
                  Respondemos en menos de 24 horas · Tu información es privada
                </p>
              </form>
            )}
          </div>

          {/* Info — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info card */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl text-navy-dark mb-6">Información de contacto</h3>
              <div className="space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`text-${item.color}`} size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-acero mb-1">{item.label}</p>
                        {item.lines.map((l) => (
                          <p key={l} className="text-navy-dark">{l}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-black/5">
                <p className="text-sm text-acero mb-3">Seguinos en redes</p>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Youtube].map((Ic, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-hueso hover:bg-cobalto hover:text-white text-pizarra flex items-center justify-center transition-all"
                    >
                      <Ic size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-naranja/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-naranja" size={20} />
                </div>
                <h3 className="text-xl text-navy-dark">Horario de oficina</h3>
              </div>
              <div className="space-y-1">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-3 ${
                      i < hours.length - 1 ? "border-b border-black/5" : ""
                    }`}
                  >
                    <span className="text-pizarra text-sm">{h.day}</span>
                    <span
                      className={`text-sm ${
                        h.time === "Cerrado" ? "text-acero" : "text-navy-dark"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer CTA */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src={prayerImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-cobalto/95 to-navy-dark/95" />
              <div className="relative p-8 text-white">
                <Heart className="text-oro mb-4" size={32} />
                <h3 className="text-2xl mb-3">¿Necesitás oración?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Nuestro equipo de intercesión está listo para llevar tus pedidos delante de Dios.
                </p>
                <Link
                  to="/pastors"
                  className="inline-flex items-center gap-2 bg-oro hover:bg-oro/90 text-navy-dark px-5 py-2.5 rounded-xl transition-all text-sm group"
                >
                  Enviar pedido
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <iframe
              title="Ubicación de la iglesia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9109244267!2d-6.3747411000000005!3d39.471340999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd15dfc2ec532e99%3A0x29b57ced51a7e6b7!2sIglesia%20Evangelica%20Cristo%20La%20Roca!5e0!3m2!1ses!2ses!4v1776856506883!5m2!1ses!2ses"
              className="w-full h-full border-0"
            />
          </div>
          <div>
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Venís como sos
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark mb-6 leading-tight">
              Visitanos este domingo
            </h2>
            <p className="text-lg text-pizarra leading-relaxed mb-8">
              No hace falta reserva ni ropa especial. Solo venís, te recibimos con los brazos abiertos y te dejamos experimentar lo que pasa cada semana en nuestra iglesia.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cobalto/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-cobalto" size={20} />
                </div>
                <div>
                  <p className="text-navy-dark">Calle Diego maria crehuet 13, Cáceres</p>
                  <p className="text-sm text-pizarra">Fácil acceso en transporte público</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-naranja/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-naranja" size={20} />
                </div>
                <div>
                  <p className="text-navy-dark">Domingos · 9:00 AM y 11:00 AM</p>
                  <p className="text-sm text-pizarra">Miércoles · 7:00 PM culto de mitad de semana</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/xiojoJVCF2mng7uT8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-cobalto hover:bg-cobalto/90 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-cobalto/20 hover:-translate-y-0.5 group"
              >
                <MapPin size={16} /> Cómo llegar
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/meetings"
                className="inline-flex items-center gap-2 border border-acero/30 hover:border-cobalto hover:text-cobalto text-pizarra px-6 py-3 rounded-xl transition-all"
              >
                Ver calendario
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-naranja uppercase tracking-widest text-sm mb-4 inline-block">
              Preguntas frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl text-navy-dark">
              Dudas que todos tienen
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-hueso rounded-2xl overflow-hidden transition-all border ${
                  openFaq === i ? "border-cobalto/30 shadow-md" : "border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                >
                  <span className="text-navy-dark pr-4">{faq.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      openFaq === i
                        ? "bg-cobalto text-white rotate-45"
                        : "bg-white text-pizarra"
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6">
                    <p className="text-pizarra leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
