import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Mail, MapPin, Phone, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/history", label: "Historia" },
    { path: "/pastors", label: "Pastores" },
    { path: "/ministries", label: "Ministerios" },
    { path: "/meetings", label: "Reuniones" },
    { path: "/contact", label: "Contacto" },
  ];

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileMenuOpen;
  const isActive = (p: string) => location.pathname === p;

  return (
    <div className="min-h-screen bg-hueso">
      {/* tailwind-safelist: bg-cobalto bg-naranja bg-oro bg-cian-link bg-pizarra text-cobalto text-naranja text-oro text-cian-link text-pizarra bg-cobalto/10 bg-naranja/10 bg-oro/10 bg-cian-link/10 bg-pizarra/10 border-cobalto border-naranja border-oro */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-lg shadow-sm border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cobalto to-navy-dark rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white">✝</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`${transparent ? "text-white" : "text-navy-dark"} tracking-tight`}>
                  Iglesia Cristo La Roca
                </span>
                <span className={`text-xs ${transparent ? "text-white/70" : "text-pizarra"}`}>
                  Un lugar al que pertenecer
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative transition-colors text-sm ${
                    isActive(link.path)
                      ? transparent ? "text-oro" : "text-cobalto"
                      : transparent ? "text-white/90 hover:text-oro" : "text-pizarra hover:text-cobalto"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className={`absolute -bottom-2 left-0 right-0 h-0.5 rounded-full ${transparent ? "bg-oro" : "bg-cobalto"}`} />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-naranja hover:bg-naranja/90 text-white px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
              >
                Visítanos <ArrowRight size={14} />
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden ${transparent ? "text-white" : "text-pizarra"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-black/5 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded-xl transition-colors ${
                    isActive(link.path)
                      ? "bg-cobalto/10 text-cobalto"
                      : "text-pizarra hover:bg-hueso"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 flex items-center justify-center gap-2 bg-naranja text-white py-3 rounded-xl"
              >
                Visítanos <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className={isHome ? "" : "pt-20"}>
        <Outlet />
      </main>

      <footer className="bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-cobalto to-cian-link rounded-xl flex items-center justify-center">
                  <span className="text-white">✝</span>
                </div>
                <span className="text-lg">Iglesia Cristo La Roca</span>
              </div>
              <p className="text-acero leading-relaxed mb-6">
                Una comunidad cálida de fe, esperanza y amor — donde todos tienen un lugar en la mesa.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube].map((Ic, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-oro hover:text-navy-dark flex items-center justify-center transition-all"
                  >
                    <Ic size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-oro uppercase tracking-widest text-sm">Explorar</h3>
              <ul className="space-y-3 text-acero">
                {navLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-oro uppercase tracking-widest text-sm">Visitanos</h3>
              <ul className="space-y-3 text-acero">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 flex-shrink-0 text-cian-link" />
                  <span>Calle Diego Maria Crehuet 13<br />Cáceres, Cáceres 10002</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-cian-link" /> (+34) 000-000-000
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-cian-link" /> info@iglesiacristolaroca.org
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-oro uppercase tracking-widest text-sm">Horarios de culto</h3>
              <ul className="space-y-3 text-acero">
                <li><span className="text-white">Domingo</span><br />9:00 AM y 11:00 AM</li>
                <li><span className="text-white">Miércoles</span><br />7:00 PM culto central</li>
                <li><span className="text-white">Jueves</span><br />Estudio mujeres · 10 AM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-acero text-sm">
            <p>&copy; 2026 Iglesia Cristo La Roca. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
