import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Wrench, Smartphone, Database } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Skills",
        icon: <Wrench size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "RateMyAlbum",
        subtitle: "Proyecto personal",
        description: "Desarrollo de una aplicación web para calificar discos musicales y escribir reseñas, con sistema de puntuación promedio basado en usuarios. Construida con JavaScript, Node.js, HTML y CSS, inspirada en plataformas como Letterboxd y Musicboard.",
        date: "Dic 2025",
    },
    {
        id: 2,
        title: "Scouter",
        subtitle: "Proyecto académico colaborativo",
        description: "Desarrollo de una web de scouting de rugby junto a mis compañeros Nicolás Escolar y Nahuel Delménico, enfocada en estadísticas de jugadores de distintas ligas. Implementada con Django, JavaScript, HTML y CSS.",
        date: "Nov 2025",
    },
    {
        id: 3,
        title: "Aplicaciones Android",
        subtitle: "Proyectos académicos",
        description: "Desarrollo de aplicaciones móviles en Java, incluyendo un juego estilo trivia y un sistema CRUD de gestión de biblioteca, enfocados en lógica y estructuras de datos.",
        date: "Ago-Dic '25",
    },
    {
        id: 4,
        title: "Wizzard Games",
        subtitle: "Proyecto con Laravel",
        description: "Maqueta de e-commerce de juegos retro desarrollada con Laravel y MySQL, aplicando conceptos de backend, base de datos y arquitectura MVC.",
        date: "Jun 2025",
    },
    {
        id: 5,
        title: "Backend con Laravel y MySQL",
        subtitle: "Formación académica",
        description: "Aprendizaje de desarrollo backend con PHP y Laravel, integrando bases de datos relacionales con MySQL.",
        date: "Mar 2025",
    },
    {
        id: 6,
        title: "Programación Orientada a Objetos y Web",
        subtitle: "Formación académica",
        description: "Profundización en Java con programación orientada a objetos y primeros pasos en desarrollo web con PHP.",
        date: "Jun 2024",
    },
    {
        id: 7,
        title: "Inicio en programación",
        subtitle: "HTML, CSS y Java",
        description: "Primer contacto con el desarrollo web mediante HTML y CSS, seguido del aprendizaje de lógica de programación con Java.",
        date: "Mar-May '24",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años programando",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Proyectos personales",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 15,
        text: "Tecnologías usadas",
        lineRight: true,
        lineRightMobile: true,
    },
    // {
    //     id: 3,
    //     endCounter: 100,
    //     text: "% dedicación",
    //     lineRight: false,
    //     lineRightMobile: false,
    // },
];

export const serviceData = [
    {
        icon: <Computer />,
        key: "webDev",
    },
    {
        icon: <CodeSquare />,
        key: "frontend",
    },
    {
        icon: <Database />,
        key: "backend",
    },
    {
        icon: <Smartphone />,
        key: "mobile",
    },
    {
        icon: <Rocket />,
        key: "custom",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "RateMyAlbum",
        image: "/rma-home2.png",
        urlGithub: "https://github.com/nicosantone/album-vibe",
        //urlDemo: "https://rate-my-album.vercel.app/",
    },
    {
        id: 2,
        title: "La Clásica",
        image: "/portada_laClasica_portfolio.jpeg",
        urlGithub: "https://github.com/nicosantone/la-clasica",
        urlDemo: "https://www.picadaslaclasica.com/",
    },
    {
        id: 3,
        title: "Kynetic",
        image: "/kynetic-logo.png",
        urlGithub: "https://github.com/NahuDelmenico/KinetycApp",
        //urlDemo: "https://rate-my-album.vercel.app/",
    },
    {
        id: 4,
        title: "Scouter",
        image: "/scouter.jpeg",
        urlGithub: "https://github.com/nicosantone/scouter",
        //urlDemo: "#!",
    },
    {
        id: 5,
        title: "androidCrud",
        image: "/appLibreria4.jpg",
        urlGithub: "https://github.com/nicosantone/AppLibreria",
        //urlDemo: "#!",
    },
    {
        id: 6,
        title: "triviaApp",
        image: "/trivia2.jpg",
        urlGithub: "https://github.com/nicosantone/Mini-app-de-preguntas",
        //urlDemo: "#!",
    },
    {
        id: 7,
        title: "Wizzard Games",
        image: "/wizzard2.jpeg",
        urlGithub: "https://github.com/nicosantone/Wizzard-Games",
        //urlDemo: "#!",
    },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

import { 
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiMysql,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

import { FaJava, FaCss3 } from "react-icons/fa";

import { TanstackIcon } from "@dev.icons/react";

export const skillsData = [
{ id: 1, icon: <SiReact color="#61DAFB" />, name: "React" },
{ id: 2, icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
{ id: 3, icon: <SiNodedotjs color="#339933" />, name: "Node.js" },

{ id: 4, icon: <SiExpress color="#ffffff" />, name: "Express" },
{ id: 5, icon: <SiPython color="#fcc100" />, name: "Python" },
{ id: 6, icon: <SiDjango color="#157e57" />, name: "Django" },

{ id: 7, icon: <SiFlask color="#ffffff" />, name: "Flask" },
{ id: 8, icon: <SiMysql color="#4479A1" />, name: "MySQL" },
{ id: 9, icon: <FaJava color="#f89820" />, name: "Java" },

{ id: 10, icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
{ id: 11, icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
{ id: 12, icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
{ id: 13, icon: <SiPhp color="#777BB4" />, name: "PHP" },
{ id: 14, icon: <SiLaravel color="#FF2D20" />, name: "Laravel" },
{ id: 15, icon: <TanstackIcon />, name: "TanStack Start" },

];