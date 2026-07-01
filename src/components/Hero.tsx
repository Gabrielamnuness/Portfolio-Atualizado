import { motion } from 'framer-motion'; import { FileText, Sparkles, ArrowDown } from 'lucide-react'; import { GithubIcon, LinkedinIcon } from './Icons'; import { profile } from '../data/site';
export default function Hero() {
    return <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pt-28 md:grid-cols-[1.15fr_.85fr]"><motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"><Sparkles size={16} /> {profile.role}</div><h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-7xl">Olá, eu sou <span className="gradient-text">{profile.name}</span></h1><p className="mb-8 max-w-2xl text-lg leading-8 text-slate-400">Crio pontes entre usuário, regra de negócio e tecnologia. Meu foco é análise de sistemas, dados, QA, suporte técnico, banco de dados e soluções digitais com documentação clara.</p><div className="flex flex-wrap gap-4"><a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:scale-105"><GithubIcon size={18} />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-300"><LinkedinIcon size={18} />LinkedIn</a><a href={profile.resume} className="flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-violet-300"><FileText size={18} />Currículo</a></div><a href="#sobre" className="mt-12 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300">Conheça meu trabalho <ArrowDown size={16} /></a></motion.div>
        <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {/* Glow */}
            <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-400/15 blur-[90px]" />

            {/* Foto */}
            <div className="relative">

                <div
                    className="
        rounded-full
        p-[5px]
        bg-gradient-to-r
        from-cyan-400
        via-violet-500
        to-fuchsia-500
        shadow-[0_0_60px_rgba(34,211,238,.35)]
      "
                >
                    <img
                        src="/gabriela.jpg"
                        alt="Gabriela Monteiro"
                        className="
          w-[360px]
          h-[360px]
          rounded-full
          object-cover
          object-top
          bg-slate-900
        "
                    />
                </div>

                {/* Cards inferiores */}
                <div className="mt-8 flex justify-center gap-4">

                    <div className="glass rounded-2xl px-6 py-4 text-center">
                        <p className="text-3xl font-black text-cyan-300">ADS</p>
                        <p className="text-sm text-slate-400">Formação</p>
                    </div>

                    <div className="glass rounded-2xl px-6 py-4 text-center">
                        <p className="text-3xl font-black text-violet-300">SQL</p>
                        <p className="text-sm text-slate-400">Dados</p>
                    </div>

                    <div className="glass rounded-2xl px-6 py-4 text-center">
                        <p className="text-3xl font-black text-fuchsia-300">QA</p>
                        <p className="text-sm text-slate-400">Testes</p>
                    </div>

                </div>

            </div>
        </motion.div>
    </section>;}