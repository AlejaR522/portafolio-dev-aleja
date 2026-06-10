import { ArrowUpRight } from "lucide-react";
import foto from "../assets/imagenes/foto.jpg";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-8 md:pt-28">
        <div className="md:col-span-7">
          <p className="font-mono-tag mb-6 text-muted-foreground">
            Villavicencio, Colombia · <span className="text-accent">Disponible junior / aprendizaje</span>
          </p>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            Diseño sistemas <em className="italic text-accent">pensados</em> para funcionar de verdad.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Soy <span className="text-foreground">Alejandra Tibidor</span>, estudiante de Tecnología en Desarrollo
            de Software en UNIMINUTO Villavicencio. Enfocada en <span className="text-foreground">backend</span> y
            arquitectura de aplicaciones web. Pienso primero el problema, después el código.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium underline decoration-rule decoration-1 underline-offset-8 transition hover:decoration-accent"
            >
              Contactarme
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:self-center">
          <div className="relative mx-auto max-w-[390px] rounded border border-border bg-background p-2 shadow-[0_18px_50px_rgba(23,16,12,0.08)] md:mr-0">
            <img
              src={foto}
              alt="Alejandra Tibidor"
              className="aspect-4/5 w-full rounded object-cover grayscale contrast-110"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded bg-foreground/90 px-2 py-1 font-mono-tag text-background">
              A.T.
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 rounded bg-foreground/90 px-2 py-1 font-mono-tag text-background">
              2026
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5 font-mono-tag text-muted-foreground">
          <span>Backend</span>
          <span className="hidden h-px flex-1 bg-border md:block" />
          <span>Arquitectura web</span>
          <span className="hidden h-px flex-1 bg-border md:block" />
          <span>APIs REST</span>
          <span className="hidden h-px flex-1 bg-border md:block" />
          <span>Bases de datos</span>
          <span className="hidden h-px flex-1 bg-border md:block" />
          <span>Remoto</span>
        </div>
      </div>
    </section>
  );
}
export default Hero
