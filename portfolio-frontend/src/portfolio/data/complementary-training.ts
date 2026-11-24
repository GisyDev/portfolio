export const complementary_training = [
    {
        id: "1",
        name: "JavaScript Moderno: Guía para dominar el lenguaje",
        description: "Clases, Propiedades privadas, Vite, ESNext, Node, Npm, Hot Reaload, CRUD, Carga de archivos y más!",
        image: "/images/complementary_training/js-moderno.webp",
        plataform: {
            name: "Udemy",
            icon: "/images/complementary_training/others/udemy.webp"
        },
        cert: "https://www.udemy.com/certificate/UC-1e402776-7cff-4ee1-82e8-b33358bea3d2/",
        tec: [
            { name: "JavaScript", image: "language_icons/javascript.svg", color: "#F7DF1E" },
            { name: "Vite", image: "language_icons/vite.svg", color: "#646CFF" },
            { name: "Node.js", image: "language_icons/nodejs.svg", color: "#339933" },
            { name: "npm", image: "language_icons/npm.svg", color: "#CB3837" }
        ],
    },
    {
        id: "2",
        name: "React y TypeScript - La Guía Completa Creando +10 Proyectos",
        description: "Aprende React desde cero: Hooks y State hasta TypeScript, Zod, Zustand, React Query, Next.js IA React Router MERN y PERN",
        image: "/images/complementary_training/react-typescript.webp",
        plataform: {
            name: "Udemy",
            icon: "/images/complementary_training/others/udemy.webp"
        },
        cert: "https://www.udemy.com/certificate/UC-ed6e7c05-8928-44cb-a8aa-31f24f5fd01c/",
        tec: [
            { name: "React", image: "language_icons/react.svg", color: "#61DAFB" },
            { name: "TypeScript", image: "language_icons/typescript.svg", color: "#3178C6" },
            { name: "Zod", image: "language_icons/zod.svg", color: "#3E67B1" },
            { name: "Zustand", image: "language_icons/zustand.svg", color: "#443E38" },
            { name: "React Query", image: "language_icons/react-query.svg", color: "#FF4154" },
            { name: "Next.js", image: "language_icons/nextjs.svg", color: "#000000" },
            { name: "React Router", image: "language_icons/react-router.svg", color: "#CA4245" },
            { name: "Node.js", image: "language_icons/nodejs.svg", color: "#339933" },
            { name: "MongoDB", image: "language_icons/mongodb.svg", color: "#47A248" },
            { name: "PostgreSQL", image: "language_icons/postgresql.svg", color: "#4169E1" }
        ],
    },
    {
        id: "3",
        name: "Foundations of User Experience (UX) Design",
        description: "Fundamentos del diseño UX: design thinking, diseño centrado en el usuario, ciclo de vida del diseño de producto, accesibilidad, diseño inclusivo y el rol del diseñador UX.",
        image: "/images/complementary_training/ux-design-foundations.svg",
        plataform: {
            name: "Coursera",
            icon: "/images/complementary_training/others/coursera.webp"
        },
        cert: "https://coursera.org/share/74872cab392d1f8680143419d62441af",
        tec: [
            { name: "Design Thinking", image: "language_icons/design-thinking.svg", color: "#F59E0B" },
            { name: "UX Design", image: "language_icons/ux.svg", color: "#7C3AED" },
            { name: "Accesibilidad", image: "language_icons/accessibility.svg", color: "#2563EB" },
            { name: "Diseño inclusivo", image: "language_icons/inclusive-design.svg", color: "#10B981" }
        ],
    },
]

type Platform = {
    name: string;
    icon: string;
};

type Tec = {
    name: string;
    image: string;
    color: string;
};

export type ComplementaryTrainingType = {
    id: string;
    name: string;
    description: string;
    image: string;
    plataform: Platform;
    cert: string;
    tec: Tec[];
};