
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl">
          Alejandra<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#sobre-mi" className="transition hover:text-foreground">Sobre mí</a>
          <a href="#stack" className="transition hover:text-foreground">Stack</a>
          <a href="#proyectos" className="transition hover:text-foreground">Proyectos</a>
          <a href="#contacto" className="transition hover:text-foreground">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="group inline-flex items-center gap-1.5 rounded-full border border-foreground px-4 py-1.5 text-sm font-medium transition hover:bg-foreground hover:text-background"
        >
          Disponible
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
        </a>
      </div>
    </header>
  );
}
export default Nav