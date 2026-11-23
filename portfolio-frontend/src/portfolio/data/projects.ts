
export const projects = [
    {
        id: 1,
        name: "TransferLog",
        description: "Aplicación móvil para gestionar empleados, turnos, vacaciones y fichajes en empresas de transporte.",
        full_description: "Aplicación móvil para la gestión de empleados, turnos, vacaciones y fichajes en empresas de transporte. Incluye planificación de turnos, control horario con geolocalización, gestión administrativa y generación de informes PDF.",
        image_preview: "/images/projects/TransferLog/transferlog_preview.png",
        images: [
            "images/projects/TransferLog/transferlog_empleado_1_acceso.png",
            "images/projects/TransferLog/transferlog_empleado_2_horario.png",
            "images/projects/TransferLog/transferlog_empleado_3_vacaciones.png",
            "images/projects/TransferLog/transferlog_admin_1_inicio_solicitudes_turnos.png",
            "images/projects/TransferLog/transferlog_admin_2_asignacion_fichajes_empleados.png",
            "images/projects/TransferLog/transferlog_admin_3_reportes.png"
        ],
        tec: [
            { name: "React Native", image: "language_icons/react.svg", color: "#61DAFB" },
            { name: "Expo", image: "language_icons/expo.svg", color: "#000020" },
            { name: "Supabase", image: "language_icons/supabase.svg", color: "#3ECF8E" },
            { name: "PostgreSQL", image: "language_icons/postgresql.svg", color: "#4F8FC0" },
            { name: "JavaScript", image: "language_icons/javascript.svg", color: "#F7DF1E" }
        ],
        web: "",
        github: "https://github.com/GisyDev/TransferLog_Proyecto_DAM"
    },
    {
        id: 2,
        name: "Quiosco Next",
        description: "Aplicación web de pedidos con catálogo de productos y panel de administración para gestionar órdenes.",
        full_description: "Aplicación web de pedidos para un quiosco con catálogo de productos y panel de administración. Permite gestionar pedidos, controlar su estado y administrar productos, utilizando Server Actions, validaciones y persistencia en base de datos.",
        image_preview: "images/projects/QuioscoNext/freshcoffee_1_quiosco.png",
        images: [
            "images/projects/QuioscoNext/freshcoffee_2_ordenes.png",
            "images/projects/QuioscoNext/freshcoffee_3_ordenes_listas.png",
            "images/projects/QuioscoNext/freshcoffee_4_productos.png",
            "images/projects/QuioscoNext/freshcoffee_5_crear_producto.png"
        ],
        tec: [
            { name: "Next.js", image: "language_icons/nextjs.svg", color: "#000000" },
            { name: "React", image: "language_icons/react.svg", color: "#61DAFB" },
            { name: "TypeScript", image: "language_icons/typescript.svg", color: "#3178C6" },
            { name: "PostgreSQL", image: "language_icons/postgresql.svg", color: "#4F8FC0" },
            { name: "Prisma", image: "language_icons/prisma.svg", color: "#2D3748" },
            { name: "Tailwind", image: "language_icons/tailwind.svg", color: "#38BDF8" },
            { name: "Zustand", image: "language_icons/zustand.svg", color: "#443E38" },
            { name: "SWR", image: "language_icons/swr.svg", color: "#000000" },
            { name: "Zod", image: "language_icons/zod.svg", color: "#3068B7" }
        ],
        web: "https://quioscoshop.netlify.app/order/cafe",
        github: "https://github.com/GisyDev/quiosco-next"
    },
    {
        id: 3,
        name: "Weather App",
        description: "Aplicación meteorológica con previsiones en tiempo real, gráficos interactivos y fondos dinámicos.",
        full_description: "Aplicación meteorológica que permite consultar el tiempo y las previsiones de cualquier ciudad. Incluye gráficos interactivos, alertas meteorológicas, mapa mundial, historial de búsquedas, soporte multidioma y fondos dinámicos según las condiciones meteorológicas.",
        image_preview: "https://github.com/GisyDev/weather-app/raw/main/docs/images/weather-app-cover-tenerife-full.png",
        images: [],
        tec: [
            { name: "React", image: "language_icons/react.svg", color: "#61DAFB" },
            { name: "TypeScript", image: "language_icons/typescript.svg", color: "#3178C6" },
            { name: "Vite", image: "language_icons/vite.svg", color: "#646CFF" },
            { name: "Tailwind", image: "language_icons/tailwind.svg", color: "#38BDF8" },
            { name: "Apache ECharts", image: "language_icons/echarts.svg", color: "#AA344D" },
            { name: "Axios", image: "language_icons/axios.svg", color: "#5A29E4" }
        ],
        web: "https://weather-app-gisy.netlify.app/",
        github: "https://github.com/GisyDev/weather-app"
    }
];

export type ProjectType = {
    id: number
    name: string
    description: string
    full_description: string
    image_preview: string
    images: string[]
    tec: Tec[]
    web: string
    github: string
}

interface Tec {
    name: string
    image: string
    color: string
}
