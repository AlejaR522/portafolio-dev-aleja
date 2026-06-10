import makeupImg from '../assets/imagenes/makeup.png';
import viewImg from '../assets/imagenes/view_App.png';
import viewPremiumImg from '../assets/imagenes/view_premium.png';
import corredorImg from '../assets/imagenes/Corredor_Ecolo.png';

export const projects = [
    {
    title: "Página de E-commerce — Make Up",
    image: makeupImg,
    subtitle: "Diseño UI en Figma · Maquetación",
    description:
      "Diseño completo en Figma de un sitio para una marca de maquillaje: vistas de inicio, catálogo, detalle de producto y checkout, con sistema visual consistente.",
    stack: ["Figma", "UI", "Requerimientos"],
    github: 'https://www.figma.com/design/N3HwplRhLUOjpPhRh7DVe5/Untitled?node-id=195-149&m=dev&t=HhDfokeTHOCdHU7A-1',
  },
  {
    title: 'View App',
    image: viewImg, 
    subtitle: 'Mini Red Social',
    description: 'Aplicacion fullstack con autenticacion JWT, panel de administracion con control de roles, CRUD de clientes y exportacion a PDF. Base de datos hibrida: PostgreSQL + MongoDB.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/AlejaR522/View',
  },
  {
    title: 'View App Premium',
    image: viewPremiumImg,
    subtitle: 'Mini Red Social con sistema de suscripción Premium',
    description: 'View Premium es un directorio de contactos ejecutivos completo con autenticación, gestión de perfiles, membresías premium, manejo de PDF y un panel de administración para el seguimiento de inventario y ventas.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/AlejaR522/View_Premium.git',
  },
  {
    title: 'Corredor Ecologico',
    image: corredorImg,
    subtitle: 'Job Board Platform',
    description: 'Plataforma de bolsa de empleo con dos roles: administrador y usuario. Admins publican y gestionan vacantes, usuarios aplican y administran su perfil.',
    stack: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
    github: 'https://github.com/AlejaR522/proyecto-corredor-ecologico',
  },
];

export const stack = {
  Backend: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs", "JWT"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Datos & ORM": ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma"],
  Herramientas: ["Visual Studio Code","Git", "GitHub", "Figma"],
};
