import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Smartphone,
  Shield,
  TrendingDown,
  Star,
  Send,
  MessageCircle,
  Clock,
} from "lucide-react";
import program from "../src/assets/prog.jpeg"
import solar from "../src/assets/Solar.jpeg"
import { Code2, Sun, BatteryCharging, Zap, Globe } from "lucide-react";

/* ─── TYPES ─────────────────────────────────────────────── */
interface FaqItem {
  q: string;
  a: string;
}

/* ─── DATA ───────────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    q: "Dois-je avoir des bases en informatique pour la formation Python ?",
    a: "Non, notre formation est conçue pour accueillir des profils de tous niveaux. Nous commençons par les bases (ordinateur, logique, programmation) avant de progresser vers des concepts plus avancés.",
  },

  {
    q: "Est-ce que la formation est pratique ou théorique ?",
    a: "Elle est majoritairement pratique. Vous travaillez sur des projets concrets pour maîtriser réellement Python et être opérationnel rapidement.",
  },
  {
    q: "Comment se passe l'installation du kit solaire ?",
    a: "Nos équipes techniques se déplacent directement sur votre site pour procéder à l'installation complète du matériel (panneaux, caméras, congélateur) et vous forment à l'utilisation.",
  },
  {
    q: "Combien de temps dure l'installation du kit ?",
    a: "L'installation prend généralement entre quelques heures et une journée complète, selon la configuration du site et les équipements choisis.",
  },
  {
    q: "Comment vous contacter en cas de besoin ?",
    a: "Vous pouvez nous contacter via WhatsApp, email ou téléphone. Un support rapide est disponible pour répondre à toutes vos questions.",
  },
];

const testimonials = [
  {
    name: "Jean-Paul T.",
    role: "Entrepreneur",
    text: "La formation Python a complètement changé ma trajectoire professionnelle. En 3 mois, j'ai acquis les compétences nécessaires pour automatiser la gestion de mon commerce.",
    avatar: "JP",
  },
  {
    name: "Marie-Ange K.",
    role: "Gérante de Poissonnerie",
    text: "Le kit solaire a sauvé ma poissonnerie des coupures fréquentes. Mes congélateurs tournent H24 et les caméras me rassurent quand je ne suis pas sur place.",
    avatar: "MK",
  },
  {
    name: "Koffi A.",
    role: "Propriétaire de Bar",
    text: "Payer un peu chaque jour pour un équipement de telle qualité est une opportunité incroyable. L'installation a été rapide et l'application est très intuitive.",
    avatar: "KA",
  },
];




/* ─── SUB-COMPONENTS ──────────────────────────────────────── */
function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg tracking-tight">B&DB SAS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {["Formation", "Solutions Solaires", "Avantages", "Témoignages"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-gray-900 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
            Formation &amp; Énergie
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
            Formation en<br />
            programmation<br />
            Python &amp;{" "}
            <span className="text-green-700">
              Solutions<br />solaires
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-md">
            Développez vos compétences numériques pour l'avenir et réduisez
            drastiquement vos coûts énergétiques grâce à nos kits solaires
            performants.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#formation"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              S'inscrire à la formation
            </a>
            <a
              href="#solaire"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Demander un devis solaire
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-5">
            {["Formation certifiante", "Installation en 48h"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <span className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — floating icon nodes ── */}
        <div className="relative h-72 md:h-80 hidden md:flex items-center justify-center">
          {/* SVG connector lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 320 300"
            preserveAspectRatio="none"
          >
            {[
              [160, 150, 72, 72],
              [160, 150, 252, 66],
              [160, 150, 60, 240],
              [160, 150, 262, 234],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Center node */}
          <div
            className="absolute z-10 w-20 h-20 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", animation: "floatNode 3s ease-in-out infinite" }}
          >
            <Zap size={32} className="text-red-700" />
          </div>

          {/* Satellite nodes */}
          {[
            { Icon: Code2, color: "text-red-600", bg: "bg-white", border: "border-gray-200", style: { top: "12%", left: "10%", animationDelay: "0.4s" } },
            { Icon: Sun, color: "text-amber-500", bg: "bg-white", border: "border-gray-200", style: { top: "8%", right: "10%", animationDelay: "0.8s" } },
            { Icon: BatteryCharging, color: "text-green-600", bg: "bg-white", border: "border-gray-200", style: { bottom: "10%", left: "8%", animationDelay: "1.2s" } },
            { Icon: Globe, color: "text-blue-600", bg: "bg-white", border: "border-gray-200", style: { bottom: "14%", right: "6%", animationDelay: "0.2s" } },
          ].map(({ Icon, color, bg, border, style }, i) => (
            <div
              key={i}
              className={`absolute w-14 h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center shadow-sm`}
              style={{ ...style, animation: `floatNode 3s ease-in-out infinite` }}
            >
              <Icon size={22} className={color} />
            </div>
          ))}

          {/* Float keyframes */}
          <style>{`
            @keyframes floatNode {
              0%, 100% { transform: translateY(0); }
              50%       { transform: translateY(-8px); }
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}


function PythonSection() {
  return (
    <section id="formation" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Nos Services</h2>
          <div className="w-12 h-1 bg-red-700 mx-auto mt-2 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Icon placeholder */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl aspect-video flex items-center justify-center border border-red-100">

          <img src={program} alt="" />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-700 rounded-xl flex items-center justify-center">
              <Code2 size={20} className="text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Formation en programmation Python</h2>
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">
            Maîtrisez l'un des langages de programmation les plus demandés au monde. Notre programme
            intensif est conçu pour vous rendre opérationnel rapidement.
          </p>
          <p className="font-semibold text-gray-800 mb-4">Détails du programme :</p>
          <div className="space-y-3 mb-8">
            {[
              { icon: Globe, text: "Ouvert à tous : débutants, étudiants, professionnels" },
              { icon: Clock, text: "Durée intensive : 3 mois de pratique et théorie" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-gray-600">
                <Icon size={18} className="text-green-600 flex-shrink-0" />

                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Advantages card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-4">Avantages clés</p>
            <div className="space-y-3">
              {[
                "Acquérir une compétence hautement rentable sur le marché",
                "S'ouvrir à des opportunités professionnelles internationales",
                "Développer et automatiser votre propre business",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            S'inscrire maintenant <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function SolarKitSection() {
  return (
    <section id="solaire" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <Sun size={20} className="text-white" />

            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Kit solaire pour ménages et commerces</h2>
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">
            Idéal pour cafétérias, restaurants, bars, poissonneries et boucheries. Sécurisez votre chaîne
            de froid et votre activité avec notre pack complet.
          </p>

          <p className="font-semibold text-gray-800 mb-4">Contenu du kit complet :</p>
          <div className="grid grid-cols-2 gap-2 mb-8">
            {[
              "Congélateur ou réfrigérateur",
              "Téléphone + SIM + 3 mois d'appels",
              "Assurance de 2 ans incluse",
              "2 téléphones ou tablettes de service",
              "Garantie matériel de 2 ans",
              "Application de gestion intégrée",
              "Internet haut débit inclus",
              "4 caméras de surveillance",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-xs text-gray-400 mb-1">Plan 3 ans</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900">1 975</span>
                <span className="text-xs text-gray-500">FCFA / jour</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Plan 2 ans</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900">2 650</span>
                <span className="text-xs text-gray-500">FCFA / jour</span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Commander maintenant <ChevronRight size={16} />
          </a>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={solar}
            alt="Panneaux solaires"
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fallback = t.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div className="hidden bg-gradient-to-br from-green-100 to-green-300 aspect-video items-center justify-center rounded-2xl">
            <Sun size={72} className="text-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: TrendingDown,
      color: "bg-yellow-100 text-yellow-700",
      title: "Réduction des coûts",
      desc: "Éliminez vos factures d'électricité coûteuses et imprévus grâce à une source d'énergie autonome et constante.",
    },
    {
      icon: Smartphone,
      color: "bg-green-100 text-green-700",
      title: "Gestion à distance",
      desc: "Pilotez votre entreprise où que vous soyez grâce à notre application de gestion exclusive et vos tablettes incluses.",
    },
    {
      icon: Shield,
      color: "bg-green-100 text-green-700",
      title: "Sécurité maximale",
      desc: "Gardez un œil sur votre commerce 24/7 avec les 4 caméras de surveillance connectées directement à votre réseau.",
    },
  ];

  return (
    <section id="avantages" className="bg-green-800 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Pourquoi choisir B&DB SAS ?</h2>
        <p className="text-green-200 mb-12">Des solutions pensées pour la rentabilité et la sécurité de votre activité.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-8 text-left shadow-sm">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="témoignages" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, avatar }) => (
            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Questions Fréquentes</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-800 text-sm">{q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-500 mb-8">Vous avez un projet ou des questions ? Notre équipe est prête à vous accompagner.</p>
          <div className="space-y-4">
            {[
              { icon: MapPin, text: "Abomey-Calavi, Bénin" },
              { icon: Mail, text: "BuildDevelopBetter@outlook.fr" },
              { icon: Phone, text: "+229 01 92 59 54 92" },
              { icon: Phone, text: "+229 01 41 42 44 47" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-gray-600 text-sm">
                <Icon size={16} className="text-red-700 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <a
              href="mailto:BuildDevelopBetter@outlook.fr"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-5 py-3 rounded-lg transition-colors text-sm w-fit"
            >
              <Mail size={16} /> Envoyer un email
            </a>
            <a
              href="https://wa.me/2290192595492"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm w-fit"
            >
              <MessageCircle size={16} /> Contacter sur WhatsApp
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+229 ..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Bonjour, je souhaiterais des informations sur..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-white resize-none"
              />
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
              <Send size={16} /> Envoyer le message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-gray-900">B&DB SAS</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            L'alliance parfaite entre l'innovation technologique et les solutions énergétiques durables au Bénin.
          </p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-4">Liens rapides</p>
          <div className="space-y-2">
            {["Formation Python", "Kits Solaires", "Nos Avantages", "Témoignages"].map((item) => (
              <a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-4">Coordonnées</p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>Abomey-Calavi, Bénin</p>
            <p>BuildDevelopBetter@outlook.fr</p>
            <p>+229 01 92 59 54 92</p>
            <p>+229 01 41 42 44 47</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
        © 2025 B&DB SAS. Tous droits réservés.
      </div>
    </footer>
  );
}

/* ─── APP ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />
      <Hero />
      <PythonSection />
      <SolarKitSection />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
