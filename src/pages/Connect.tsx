import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export default function Connect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--card-bg)] font-[Rajdhani] text-[var(--green-text)] p-6 overflow-hidden relative bg-black">
      <div className="neon-orb orb-green top-[10%] left-[5%] animate-pulse-slow"></div>
      <div className="neon-orb orb-cyan top-[40%] left-[50%] animate-ping"></div>
      <div className="neon-orb orb-light top-[20%] left-[20%] animate-pulse"></div>
      <div className="neon-orb orb-green top-[70%] right-[10%] animate-bounce"></div>
      <div className="neon-orb orb-cyan top-[80%] left-[30%] animate-pulse-slow"></div>

      <div className="absolute w-32 h-32 border-4 border-[var(--green-border)] rounded-full top-10 right-10 animate-spin-slow blur-md opacity-70"></div>
      <div className="absolute w-20 h-20 border-t-4 border-[var(--green-text)] rounded-lg bottom-20 left-10 blur-sm opacity-20"></div>
      <div className="absolute w-48 h-48 border-l-4 border-[var(--green-border)] rotate-45 top-[60%] right-[30%] opacity-25 animate-float"></div>
      <div className="absolute w-24 h-24 border-2 border-[var(--green-border)] rounded-md top-[75%] right-[5%] animate-spin-slow opacity-40"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-20">

        {/* Chap panel */}
        <div className="relative p-8 rounded-lg border border-[var(--green-border)] bg-black bg-opacity-30 shadow-lg backdrop-blur-md animate-slide-in-left"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)" }}>
          <h2 className="text-3xl font-bold mb-4">Men haqimda</h2>
          <p className="text-[var(--border-color)] mb-6 leading-relaxed">
            Men Qobiljon, 15 yoshda, full-stack dasturchiman. Backend sohasida
            kuchliman, AI va Telegram botlar bilan ishlashni yaxshi ko‘raman.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail size={20} /> email@example.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} /> +998 90 123 45 67
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/" target="_blank" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* O‘ng panel */}
        <div className="p-8 rounded-lg border border-[var(--green-border)] bg-black bg-opacity-30 shadow-lg backdrop-blur-md animate-slide-in-right"
          style={{ clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}>
          <h2 className="text-3xl font-bold mb-4">Menga yozing</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ismingiz"
              className="px-4 py-3 rounded-lg border border-[var(--green-border)] bg-black bg-opacity-30 text-white focus:outline-none focus:ring-1 focus:ring-[var(--green-text)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg border border-[var(--green-border)] bg-black bg-opacity-30 text-white focus:outline-none focus:ring-1 focus:ring-[var(--green-text)]"
            />
            <textarea
              placeholder="Xabaringiz..."
              rows={4}
              className="px-4 py-3 rounded-lg border border-[var(--green-border)] bg-black bg-opacity-30 text-white focus:outline-none focus:ring-1 focus:ring-[var(--green-text)] resize-none"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[var(--green-border)] text-[var(--green-text)] hover:bg-[var(--green-bg)] hover:text-black transition-colors duration-300"
            >
              <Send size={18} /> Yuborish
            </button>
          </form>
        </div>

      </div>


    </div>

  );
}
