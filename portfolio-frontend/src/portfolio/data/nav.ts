export const sectionsNav = {
    inicio: {
        id: 'Inicio',
        text: 'Inicio',
        enlace: "#Inicio"
    },
    experience: {
        id: 'Experiencia',
        text: 'Experiencia',
        icon: "fa-briefcase",
        enlace: "#Experiencia"
    },
    sobreMi: {
        id: 'SobreMi',
        text: 'Sobre mí',
        icon: "fa-graduation-cap",
        enlace: "#SobreMi"
    }
} as const


const sectionsNavObject = Object.entries(sectionsNav)

export const sectionsNavArray = Object.values(sectionsNavObject).map(([key, { id, text, enlace }]) => {
    return {
        id,
        text,
        enlace
    }
})