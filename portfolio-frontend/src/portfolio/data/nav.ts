
export const sectionsNav = {
    inicio: {
        id: 'Inicio',
        text: 'Inicio',
        description: 'Conoce mi perfil, experiencia y trayectoria como desarrolladora Full Stack.',
        icon: 'fa-house',
        enlace: '#Inicio'
    },
    experience: {
        id: 'Experiencia',
        text: 'Experiencia',
        description: 'Mi trayectoria profesional y los proyectos en los que he trabajado.',
        icon: 'fa-briefcase',
        enlace: '#Experiencia'
    },
    projects: {
        id: 'Proyecto',
        text: 'Proyectos',
        description: 'Aplicaciones y proyectos personales desarrollados con diferentes tecnologías.',
        icon: 'fa-layer-group',
        enlace: '#Project'
    },
    complementaryTraining: {
        id: 'FormacionComplementaria',
        text: 'Formación Complementaria',
        description: 'Cursos, certificaciones y formación adicional para seguir ampliando mis conocimientos.',
        icon: 'fa-book-open',
        enlace: '#Training'
    },
} as const;



const sectionsNavObject = Object.entries(sectionsNav)

export const sectionsNavArray = Object.values(sectionsNavObject).map(([key, { id, text, enlace, icon }]) => {
    return {
        id,
        text,
        enlace,
        icon
    }
})