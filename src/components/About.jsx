import SectionLabel from "./label";
import { MapPin } from "lucide-react";

function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">
      <SectionLabel n="01 /" label="Sobre mí" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Pensar el problema <em className="italic">antes</em> que el código.
          </h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-7">
          <p>
            Me apasiona diseñar sistemas pensando en cómo van a funcionar de verdad: qué problema
            resuelven, cómo se estructuran y cómo conectan todas sus partes.
          </p>
          <p>
            Esa forma de pensar — entender los requerimientos, dibujar el flujo, decidir la arquitectura — es
            lo que más me define como desarrolladora. Trabajo cómoda con backend (Node, Spring Boot) y
            también construyo frontends limpios con React, Next.js y Tailwind.
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4 text-accent" /> Villavicencio · Disponible para trabajo remoto
          </p>
        </div>
      </div>
    </section>
  );
}


export default About
