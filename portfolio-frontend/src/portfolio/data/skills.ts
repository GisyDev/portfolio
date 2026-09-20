export type programLanguagesType = {
    name: string,
    image: string,
    description: []
}


export const program_languages = [
    {
        name: "HTML5",
        image: "html.svg",
        description: [
            "Etiquetas semánticas (header, main, section, article, nav, footer) para estructurar el contenido",
            "Formularios con validación nativa (required, pattern, type=\"email\")",
            "Accesibilidad: alt, aria-label, role y jerarquía correcta de encabezados",
            "APIs del navegador: localStorage, canvas, audio y video",
            "SEO on-page: meta etiquetas y Open Graph"
        ]
    },
    {
        name: "CSS",
        image: "css.svg",
        description: [
            "Maquetación responsive con Flexbox y Grid",
            "Media queries y unidades relativas (rem, %, vw/vh)",
            "Modelo de caja, especificidad de selectores y variables CSS",
            "Animaciones con transition y keyframes",
            "Metodología BEM y frameworks utility-first como Tailwind"
        ]
    },
    {
        name: "JavaScript",
        image: "javascript.svg",
        description: [
            "Closures, scope, hoisting y funcionamiento de this",
            "Asincronía: promesas, async/await y event loop",
            "Consumo de APIs REST con fetch",
            "Manipulación del DOM y delegación de eventos",
            "Métodos de array: map, filter, reduce",
            "ES6+: destructuring, spread/rest, módulos, template literals, arrow functions"
        ]
    },
    {
        name: "TypeScript",
        image: "typescript.svg",
        description: [
            "Tipado de variables, funciones, objetos y componentes",
            "Interfaces, types, genéricos y tipos unión/intersección",
            "Utility types: Partial, Pick, Omit",
            "Configuración de tsconfig.json según el proyecto",
            "Props tipadas en componentes React y tipado de respuestas de APIs"
        ]
    },
    {
        name: "React",
        image: "react.svg",
        description: [
            "Componentes reutilizables y flujo de datos unidireccional",
            "Hooks: useState, useEffect, useContext, useMemo, useCallback",
            "Hooks personalizados",
            "Virtual DOM y optimización de renders",
            "Rutas con React Router y formularios controlados",
            "Integración con Vite como bundler y Tailwind para estilos"
        ]
    },
    // Backend
    {
        name: "Java",
        image: "java.svg",
        description: [
            "Programación orientada a objetos: herencia, polimorfismo, interfaces, clases abstractas",
            "Colecciones: List, Map, Set",
            "Manejo de excepciones",
            "Streams para procesar datos de forma declarativa",
            "Gestión básica de memoria y funcionamiento de la JVM",
            "Construcción de proyectos con Maven o Gradle"
        ]
    },
    {
        name: "Spring Boot",
        image: "spring.svg",
        description: [
            "Arquitectura en capas: controlador, servicio, repositorio",
            "Anotaciones @RestController, @Service, @Autowired para inyección de dependencias",
            "Spring Data JPA e Hibernate para mapear entidades a base de datos",
            "Validaciones con Bean Validation",
            "Manejo centralizado de excepciones",
            "Configuración con application.properties/yml"
        ]
    },
    {
        name: "Node.js",
        image: "nodejs.svg",
        description: [
            "Modelo asíncrono y no bloqueante basado en el event loop",
            "Rutas, middlewares y controladores con Express",
            "Gestión de variables de entorno y conexión a bases de datos",
            "Gestión de dependencias con npm",
            "Construcción de APIs sencillas y prototipos rápidos"
        ]
    },
    {
        name: "PostgreSQL",
        image: "postgresql.svg",
        description: [
            "Diseño de esquemas relacionales normalizados",
            "Claves primarias y foráneas",
            "Consultas SQL con joins, subconsultas, agregaciones y funciones de ventana",
            "Índices para optimizar el rendimiento",
            "Transacciones para garantizar la integridad de los datos"
        ]
    },
    {
        name: "MySQL",
        image: "mysql.svg",
        description: [
            "Diseño y normalización de bases de datos relacionales",
            "Consultas SQL: SELECT, JOIN, GROUP BY, subconsultas",
            "Restricciones de integridad: claves foráneas y únicas",
            "Gestión de usuarios y permisos",
            "Procedimientos almacenados y triggers sencillos",
            "Optimización de consultas con índices"
        ]
    },
    // Herramientas
    {
        name: "Git",
        image: "git.svg",
        description: [
            "Ramas, merges, rebase y resolución de conflictos",
            "Buenas prácticas de commits",
            "Flujos de trabajo: Gitflow y trunk-based",
            "Pull requests para revisión de cambios",
            "Repositorios remotos en GitHub: forks, tags y releases"
        ]
    },
    {
        name: "Postman",
        image: "postman.svg",
        description: [
            "Diseño y prueba de endpoints REST",
            "Colecciones organizadas por proyecto",
            "Variables de entorno para distintos entornos (local, producción)",
            "Verificación de respuestas, códigos de estado y headers",
            "Tests básicos para automatizar comprobaciones",
            "Documentación de APIs para su consumo desde el frontend"
        ]
    },
];
