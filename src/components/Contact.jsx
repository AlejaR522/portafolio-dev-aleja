// function Contact() {
//   return (
//     <section id="contact" className="px-5 py-24 md:px-8">
//       <div className="mx-auto flex max-w-6xl flex-col gap-12">
//         <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
//           <div className="flex flex-col gap-4">
//             <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#256f45]">
//               Contacto
//             </span>
//             <h2 className="text-5xl font-semibold leading-tight text-[#141414] md:text-7xl">
//               Hablemos
//             </h2>
//           </div>
//           <p className="max-w-xl text-lg leading-8 text-[#5f5b53]">
//             Estoy buscando{' '}
//             <span className="font-semibold text-[#141414]">empleo junior o contrato de aprendizaje</span>,
//             disponible para trabajo remoto desde Villavicencio, Meta.
//             Si tienes una oportunidad o quieres conectar, escribeme.
//           </p>
//         </div>

//         <div className="grid gap-5 md:grid-cols-3">
//           <a
//             href="mailto:aleja.dev2004@gmail.com"
//             className="group rounded-[1.5rem] bg-[#141414] p-6 text-white shadow-[0_24px_70px_rgba(20,20,20,0.16)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#256f45]"
//           >
//             <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Correo</span>
//             <span className="mt-8 block text-2xl font-semibold">Escribirme</span>
//             <span className="mt-2 block text-sm text-white/65">aleja.dev2004@gmail.com</span>
//           </a>

//           <a
//             href="https://github.com/AlejaR522"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 text-[#141414] shadow-[0_18px_50px_rgba(20,20,20,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#256f45]"
//           >
//             <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f5b53]">GitHub</span>
//             <span className="mt-8 block text-2xl font-semibold">AlejaR522</span>
//             <span className="mt-2 block text-sm text-[#5f5b53]">Ver repositorios</span>
//           </a>

//           <a
//             href="https://linkedin.com/in/alejandra-ruiz-dev"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 text-[#141414] shadow-[0_18px_50px_rgba(20,20,20,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#256f45]"
//           >
//             <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f5b53]">LinkedIn</span>
//             <span className="mt-8 block text-2xl font-semibold">alejandra-ruiz-dev</span>
//             <span className="mt-2 block text-sm text-[#5f5b53]">Conectar</span>
//           </a>
//         </div>

//         <p className="border-t border-black/10 pt-8 text-center text-sm text-[#7a746b]">
//           Alejandra Tibidor - 2026
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Contact
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contacto" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono-tag text-background/60">04 / Contacto</p>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          ¿Buscas un junior <br />
          <em className="italic text-accent">que piense</em> antes de programar?
        </h2>
        <p className="mt-8 max-w-xl text-lg text-background/70">
          Estoy abierta a oportunidades de empleo junior o contrato de aprendizaje, especialmente en
          backend. Disponible para trabajar de forma remota desde Colombia.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactLink icon={<Mail className="h-4 w-4" />} label="Email" value="aleja.dev2004@gmail.com" href="mailto:aleja.dev2004@gmail.com" />
          <ContactLink icon={<FaLinkedin className="h-4 w-4" />} label="LinkedIn" href="https://linkedin.com/in/alejandra-ruiz-dev" />
          <ContactLink icon={<FaGithub className="h-4 w-4" />} label="GitHub" value="@alejandra" href="https://github.com/AlejaR522" />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,}) 
  {
    return (
      <a
        href={href}
        className="group flex items-center justify-between border-t border-background/20 py-5 transition hover:border-accent"
      >
        <span className="flex items-center gap-3">
          <span className="text-background/60 transition group-hover:text-accent">{icon}</span>
          <span>
            <span className="font-mono-tag block text-background/50">{label}</span>
            <span className="text-base">{value}</span>
          </span>
        </span>
        <ArrowUpRight className="h-4 w-4 text-background/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </a>
    );
  }
export default Contact;