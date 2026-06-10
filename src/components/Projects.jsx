import SectionLabel from "./label";
import { ArrowUpRight } from "lucide-react";
import makeupImg from "../assets/imagenes/makeup.png";
import viewImg from "../assets/imagenes/view_App.png";
import viewPremiumImg from "../assets/imagenes/view_premium.png";
import corredorImg from "../assets/imagenes/Corredor_Ecolo.png";
import { projects } from "../data/Portafolio";

function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="03 /" label="Proyectos seleccionados" />
      <div className="divide-y divide-border border-y border-border">
        {projects.map((p, index) => (
          <a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative grid grid-cols-12 items-start gap-4 py-8 transition hover:bg-card/50 md:gap-8 md:py-10"
          >
            <span className="font-mono-tag col-span-2 pt-2 text-muted-foreground md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="col-span-10 md:col-span-6">
              <h3 className="font-display text-2xl leading-tight md:text-3xl">
                {p.title}
              </h3>

              <p className="font-mono-tag mt-2 text-muted-foreground">
                {p.subtitle}
              </p>
            </div>

            <p className="col-span-12 text-muted-foreground md:col-span-4">
              {p.description}
            </p>

            <ArrowUpRight className="col-span-12 ml-auto h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:col-span-1" />

            <div className="col-span-12 flex flex-wrap gap-2 md:col-start-3">
              {p.stack.map((t) => (
                <span key={t} className="font-mono-tag text-muted-foreground">
                  / {t}
                </span>
              ))}
            </div>

            {/* Preview flotante */}
            {p.image && (
              <div
                className="
                pointer-events-none
                absolute
                right-10
                top-1/2
                z-50
                hidden
                w-95
                -translate-y-1/2
                rotate-2
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:translate-x-0
                lg:block
              "
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                  rounded-xl
                  border
                  border-border
                  shadow-[0_20px_80px_rgba(0,0,0,0.25)]
                "
                />
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;
