export const sectionsNav = {
    about: {
        id: 'SobreMi',
        text: 'Sobre mí',
        enlace: "#SobreMi"
    },
    experience: {
        id: 'Experiencia',
        text: 'Experiencia',
        icon: "fa-briefcase",
        enlace: "#Experiencia"
    },
    education: {
        id: 'Formacion',
        text: 'Formacion',
        icon: "fa-graduation-cap",
        enlace: "#Formacion"
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