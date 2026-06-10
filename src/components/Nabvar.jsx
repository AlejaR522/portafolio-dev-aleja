// function Navbar() {
//   const links = [
//     { href: '#about', label: 'Sobre mi' },
//     { href: '#projects', label: 'Proyectos' },
//     { href: '#contact', label: 'Contacto' },
//   ]

//   return (
//     <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f8f5ef]/85 shadow-[0_16px_50px_rgba(20,20,20,0.07)] backdrop-blur-xl ">
//       <div className="flex w-full items-center justify-between px-5 py-4 md:px-10 lg:px-14">
//         <a
//           href="#"
//           className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-[#141414]"
//           aria-label="Ir al inicio"
//         >
//           <span className="grid size-9 place-items-center rounded-full bg-[#141414] text-xs text-[#f8f5ef] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
//             AT
//           </span>
//           <span className="hidden sm:inline">alejandra.dev</span>
//         </a>

//         <ul className="flex items-center gap-2 text-xs font-medium text-[#5f5b53] sm:text-sm md:gap-6">
//           {links.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="block border-b border-transparent px-1 py-2 transition-all duration-300 hover:border-[#256f45] hover:text-[#141414] focus-visible:border-[#256f45] focus-visible:text-[#141414] focus-visible:outline-none"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
// import { createFileRoute } from "@tanstack/react-router";
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