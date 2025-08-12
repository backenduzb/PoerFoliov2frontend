
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Neon Orbs */}
      <div className="neon-orb orb-green top-[10%] left-[5%] animate-pulse-slow"></div>
      <div className="neon-orb orb-cyan top-[40%] left-[50%] animate-ping"></div>
      <div className="neon-orb orb-light top-[20%] left-[20%] animate-pulse"></div>
      <div className="neon-orb orb-green top-[70%] right-[10%] animate-bounce"></div>
      <div className="neon-orb orb-cyan top-[80%] left-[30%] animate-pulse-slow"></div>

      {/* Geometric Shapes */}
      <div className="absolute w-32 h-32 border-4 border-[var(--green-border)] rounded-full top-10 right-10 animate-spin-slow blur-md opacity-70"></div>
      <div className="absolute w-20 h-20 border-t-4 border-[var(--green-text)] rounded-lg bottom-20 left-10 blur-sm opacity-20"></div>
      <div className="absolute w-48 h-48 border-l-4 border-[var(--green-border)] rotate-45 top-[60%] right-[30%] opacity-25 animate-float"></div>
      <div className="absolute w-24 h-24 border-2 border-[var(--green-border)] rounded-md top-[75%] right-[5%] animate-spin-slow opacity-40"></div>


      {/* Main Content */}
      <div className="z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[var(--green-text)] drop-shadow-[0_0_20px_var(--green-text)] mb-6 flex items-center justify-center gap-4">
          <span className="animate-pulse"><ChevronDown size={36} className='-rotate-90' /></span>
          Hush kelibsiz
          <span className="animate-pulse"><ChevronDown size={36} className='rotate-90' /></span>
        </h1>

        <h2 className="text-4xl font-semibold text-white drop-shadow-[0_0_10px_var(--green-border)] mb-4">
          Men "Javohir" – Fullstack Dasturchi
        </h2>

        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
          Web saytlar, Telegram botlar, AI, va zamonaviy texnologiyalar asosida kuchli va interaktiv ilovalarni yarataman.
          Portfolio orqali ishlarim bilan tanishib chiqing.
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 border border-[var(--green-border)] text-[var(--green-text)] rounded-lg backdrop-blur-md bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
        >
          Ishlarimni ko‘rish
        </a>
      </div>

      {/* Scroll Down Chevron */}
      <div className="absolute bottom-6 text-[var(--green-text)] animate-bounce">
        <ChevronDown size={36} />
      </div>
    </section>
  );
};

export default Hero;
