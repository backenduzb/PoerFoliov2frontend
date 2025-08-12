import { useState, useEffect } from 'react';
import { Github, Users, FolderGit2, MapPin, UserCircle, Calendar } from "lucide-react";


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 40 },
      { name: "TypeScript", level: 50 },
      { name: "CSS/Tailwind", level: 85 },
      { name: "Next.js", level: 10 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 30 },
      { name: "Python", level: 60 },
      { name: "PostgreSQL", level: 10 },
      { name: "MongoDB", level: 1 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 45 },
      { name: "Docker", level: 36 },
      { name: "AWS", level: 25 },
      { name: "Figma", level: 50 }
    ]
  }
];

const Skills = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        setProgress(prev => ({ ...prev, [skill.name]: 0 }));

        const interval = setInterval(() => {
          setProgress(prev => {
            const current = prev[skill.name] ?? 0;
            if (current >= skill.level) {
              clearInterval(interval);
              return prev;
            }
            return { ...prev, [skill.name]: current + 1 };
          });
        }, 50);

        intervals.push(interval);
      });
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/backenduzb`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("GitHub API error:", err));
  }, []);

  if (!profile) return null;
  return (
    <section id="skills" className="py-20 px-6  text-white relative overflow-hidden">

      <div className="neon-orb orb-green top-[10%] left-[5%] animate-pulse-slow"></div>
      <div className="neon-orb orb-cyan top-[40%] left-[50%] animate-ping"></div>
      <div className="neon-orb orb-light top-[20%] left-[20%] animate-pulse"></div>
      <div className="neon-orb orb-green top-[70%] right-[10%] animate-bounce"></div>
      <div className="neon-orb orb-cyan top-[80%] left-[30%] animate-pulse-slow"></div>
      <div className="absolute w-32 h-32 border-4 border-[var(--green-border)] rounded-full top-10 right-10 animate-spin-slow blur-md opacity-70"></div>
      <div className="absolute w-20 h-20 border-t-4 border-[var(--green-text)] rounded-lg bottom-20 left-10 blur-sm opacity-20"></div>
      <div className="absolute w-48 h-48 border-l-4 border-[var(--green-border)] rotate-45 top-[60%] right-[30%] opacity-25 animate-float"></div>
      <div className="absolute w-24 h-24 border-2 border-[var(--green-border)] rounded-md top-[75%] right-[5%] animate-spin-slow opacity-40"></div>

      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-16">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 transition-all duration-700 ease-out transform">
          <div className="transition-all  duration-700 ease-out transform opacity-100 translate-x-0 translate-y-0 custom-card p-8 h-100 rounded-lg bg-black bg-opacity-30 border border-l-0 border-[var(--green-border)] shadow-[0_0_0_20px_var(--green-text)] animate-slide-in-left" style={{ clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)" }}>
            <h3 className="text-2xl font-semibold mb-6 custom-green-text text-center">
              Frontend
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">React</span>
                  <span className="custom-green-text">{progress["React"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["React"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">TypeScript</span>
                  <span className="custom-green-text">{progress["TypeScript"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["TypeScript"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">CSS/Tailwind</span>
                  <span className="custom-green-text">{progress["CSS/Tailwind"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["CSS/Tailwind"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Next.js</span>
                  <span className="custom-green-text">{progress["Next.js"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["Next.js"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="transition-all duration-700 ease-out transform opacity-100 translate-x-0 translate-y-0 custom-card p-8 h-full rounded-lg bg-black bg-opacity-30 border border-l-0 border-r-0 border-[var(--green-border)] animate-bounce-up" style={{
            clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)"
          }}>
            <h3 className="text-2xl font-semibold mb-6 custom-green-text text-center">
              Backend
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Node.js</span>
                  <span className="custom-green-text">{progress["Node.js"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["Node.js"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Python</span>
                  <span className="custom-green-text">{progress["Python"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["Python"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">PostgreSQL</span>
                  <span className="custom-green-text">{progress["PostgreSQL"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["PostgreSQL"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">MongoDB</span>
                  <span className="custom-green-text">{progress["MongoDB"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["MongoDB"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="transition-all duration-700 ease-out transform opacity-100 translate-x-0 translate-y-0 custom-card p-8 h-full rounded-lg bg-black bg-opacity-30 border border-r-0 border-[var(--green-border)] animate-slide-in-right" style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)"
          }}


          >
            <h3 className="text-2xl font-semibold mb-6 custom-green-text text-center">
              Tools & Others
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Git</span>
                  <span className="custom-green-text">{progress["Git"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["Git"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Docker</span>
                  <span className="custom-green-text">{progress["Docker"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["Docker"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">AWS</span>
                  <span className="custom-green-text">{progress["AWS"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["AWS"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Figma</span>
                  <span className="custom-green-text">{progress["Figma"] ?? 0}%</span>
                </div>
                <div className="w-full bg-zinc-500 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress["Figma"] ?? 0}%`, background: `linear-gradient(90deg, var(--green-border), var(--green-text))` }} />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl md:col-span-3 font-bold text-center mt-20 ">
            <span className="gradient-text">Boshqalar</span>
          </h2>
        
            <div className="max-w-md w-full mx-auto p-6 mt-[50px] bg-black bg-opacity-30 rounded-lg border border-[var(--green-border)] text-white backdrop-blur-md shadow-md border-l-0 animate-slide-in-left" >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={profile.avatar_url}
                  alt="GitHub Avatar"
                  className="w-16 h-16 rounded-full border-2 border-[var(--green-border)]"
                />
                <div>
                  <h2 className="text-xl font-bold text-[var(--green-text)] flex items-center gap-2">
                    <Github size={20} /> {profile.name}
                  </h2>
                  <p className="text-sm text-gray-400">{profile.bio}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-sm mt-4 ">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-[var(--green-text)]" />
                  {profile.followers} followers
                </div>
                <div className="flex items-center gap-2">
                  <FolderGit2 size={18} className="text-[var(--green-text)]" />
                  {profile.public_repos} repositories
                </div>
                <div className="flex items-center gap-2">
                  <UserCircle size={18} className="text-[var(--green-text)]" />
                  {profile.following} Following
                </div>
                {profile.created_at && (<div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[var(--green-text)]" />
                  {new Date(profile.created_at).toLocaleDateString("uz-UZ", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                  })}
                </div>)}

                {profile.location && (
                  <div className="flex items-center gap-2 col-span-2">
                    <MapPin size={18} className="text-[var(--green-text)]" />
                    {profile.location}
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-2 mt-[50px] w-full rounded-lg overflow-hidden shadow-lg border border-[var(--green-border)] bg-black bg-opacity-30 border-r-0 backdrop-blur-md animate-slide-in-right">
              <iframe
                title="Spotify Embed: Recommendation Playlist"
                src="https://open.spotify.com/embed/playlist/5wexoRET4adgrE2HMnDHWN?utm_source=generator&theme=0"
                width="100%"
                height="380"
                style={{ border: "none", minHeight: '200px' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
        </div>



      </div>


    </section>
  );
};

export default Skills;
