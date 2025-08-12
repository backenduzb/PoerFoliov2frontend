import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[var(--card-bg)] text-[var(--green-text)] font-[Rajdhani] overflow-hidden relative">
        <div className="neon-orb orb-green top-[10%] left-[5%] animate-pulse-slow"></div>
      <div className="neon-orb orb-cyan top-[40%] left-[50%] animate-ping"></div>
      <div className="neon-orb orb-light top-[20%] left-[20%] animate-pulse"></div>
      <div className="neon-orb orb-green top-[70%] right-[10%] animate-bounce"></div>
      <div className="neon-orb orb-cyan top-[80%] left-[30%] animate-pulse-slow"></div>

      <div className="absolute w-32 h-32 border-4 border-[var(--green-border)] rounded-full top-10 right-10 animate-spin-slow blur-md opacity-70"></div>
      <div className="absolute w-20 h-20 border-t-4 border-[var(--green-text)] rounded-lg bottom-20 left-10 blur-sm opacity-20"></div>
      <div className="absolute w-48 h-48 border-l-4 border-[var(--green-border)] rotate-45 top-[60%] right-[30%] opacity-25 animate-float"></div>
      <div className="absolute w-24 h-24 border-2 border-[var(--green-border)] rounded-md top-[75%] right-[5%] animate-spin-slow opacity-40"></div>
      <div className="w-full min-h-screen bg-black bg-opacity-30 border border-[var(--green-border)] shadow-lg">
        <h1 className="text-9xl font-bold mb-4 tracking-wider mt-[20%]">404</h1>
        <p className="text-xl mb-6 text-[var(--border-color)]">
          Siz qidirayotgan sahifa topilmadi...
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-lg border border-[var(--green-border)] text-[var(--green-text)] hover:bg-[var(--green-bg)] hover:text-black transition-colors duration-300"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
