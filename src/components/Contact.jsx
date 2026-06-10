import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-border bg-foreground text-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono-tag text-background/60">04 / Contacto</p>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          ¿Buscas un junior <br />
          <em className="italic text-accent">que piense</em> antes de programar?
        </h2>
        <p className="mt-8 max-w-xl text-lg text-background/70">
          Estoy abierta a oportunidades de empleo junior o contrato de
          aprendizaje, especialmente en backend. Disponible para trabajar de
          forma remota desde Colombia.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactLink
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="aleja.dev2004@gmail.com"
            href="mailto:aleja.dev2004@gmail.com"
          />
          <ContactLink
            icon={<FaLinkedin className="h-4 w-4" />}
            label="LinkedIn"
            value="in/alejandra-ruiz-dev"
            href="https://linkedin.com/in/alejandra-ruiz-dev"
          />
          <ContactLink
            icon={<FaGithub className="h-4 w-4" />}
            label="GitHub"
            value="@alejandra"
            href="https://github.com/AlejaR522"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between border-t border-background/20 py-5 transition hover:border-accent"
    >
      <span className="flex items-center gap-3">
        <span className="text-background/60 transition group-hover:text-accent">
          {icon}
        </span>
        <span>
          <span className="font-mono-tag block text-background/50">
            {label}
          </span>
          <span className="text-base">{value}</span>
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-background/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}
export default Contact;
