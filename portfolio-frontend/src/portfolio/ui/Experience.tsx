import 'react-vertical-timeline-component/style.min.css';
import { getImage } from '../../lib/getImage';
import { useState } from 'react';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { sectionsNav } from '../data/nav';

const experiences = [
    {
        id: 1,
        profile: "Desarrolladora Web",
        company: "PwC España",
        date: "mar 2026 - sept 2026",
        resume: "Desarrollo, mantenimiento y resolucion de incidencias en la aplicación corporativa de MAPFRE",
        description: [
            "Desarrollo y mantenimiento de nuevas funcionalidades, escribiendo código limpio y mantenible, entendiendo los requisitos del cliente y creando documentación técnica de dichos evolutivos.",
            "Diseño y desarrollo de interfaces responsivas, mejorando su legibilidad y formato.",
            "Realización de pruebas y validaciones para el despliegue a producción, así como diagnóstico y corrección de bugs, coordinando la resolución con otros equipos para la subida a producción.",
            "Análisis, gestión y resolución de incidencias creadas por usuarios, utilizando la aplicación corporativa llamada Service Manager de MAPFRE."
        ],
        icon: "pwc_espana_logo.jpg",
        hidden: true,
    },
    {
        id: 2,
        profile: "Administradora de sistemas y Desarrolladora",
        company: "Gobierno de Canarias",
        date: "mar 2023 - jun 2023",
        description: [
            "Desarrollo de aplicaciones con JavaScript",
            "Despliegue, configuración y gestión de entornos utilizando Docker y Kubernetes.",
            "Configuración y administración de servicios DNS para el despliegue de aplicaciones."
        ],
        resume: "Prácticas de FP de DAW en donde he aprendido a desarrollar aplicaciones y despliegue",
        icon: "gobierno_de_canarias_logo.jpg",
        tec: [
            { name: "JavaScript", icon: "javascript.svg" },
            { name: "Kubernetes", icon: "kubernetes.svg" },
            { name: "Docker", icon: "docker.svg" },
        ],
        hidden: true,
    },
    {
        id: 3,
        profile: "Técnica microinformática",
        company: "La Factoría de Innovación",
        date: "mar 2021 - jun 2021",
        description: [
            "Resolución de incidencias de hardware y software",
            "Gestión de inventario informático"
        ],
        resume: "Resolución de incidencias de hardware y software, y gestión de inventario informático.",
        icon: "factoria_innovación.jpg",
        hidden: true,
    }
]


const Experience = () => {

    const [experieceState, setExperieceState] = useState(experiences)

    const setHidden = (id: number) => {

        const experieceModif = experieceState.map((exp) => {
            if (exp.id === id) {
                return {
                    ...exp,
                    hidden: !exp.hidden
                }
            }
            return exp
        })

        setExperieceState(experieceModif)
    }


    const folderImage = "company_icons"
    return (
        <Section title={sectionsNav.experience.text} icon="fa-briefcase" reference={sectionsNav.experience.id}>
            <div className='flex gap-6'>
                <article className='flex gap-8 w-full '>
                    <span className='max-h-full border-l-2 bg-white border-secondary'></span>
                    <div className='space-y-8 w-full'>

                        {
                            experieceState.map((exp, index) => {
                                return <div
                                    className='bg-white/10 p-5 rounded-2xl border-t-4 border-primary/50 space-y-4 w-full cursor-pointer hover:bg-white/15 hover:border-primary transition-all'
                                    onClick={() => setHidden(exp.id)}
                                >
                                    <div className='absolute'>
                                        <div className={`${index === 0 && "ring-4 ring-fuchsia-800"} relative right-[76px] first:bg-primary w-4 h-4 rounded-full`}></div>
                                    </div>
                                    <div className='flex gap-7 items-center w-full'>
                                        <img src={getImage(folderImage, exp.icon)} alt="" className='rounded-lg w-20' />
                                        <div className='flex items-center space-y-1 justify-between  w-full'>
                                            <div className='space-y-1 w-full'>
                                                <div className='flex justify-between '>
                                                    <h1 className='text-xl font-semibold'>{exp.profile}</h1>
                                                    <p className='text-sm text-mute font-semibold'>{exp.date}</p>
                                                </div>
                                                <h3 className='text-lg text-mute '>{exp.company}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <Paragraph>{exp.resume}</Paragraph>

                                    {
                                        !exp.hidden && <ul className='list-disc px-3 flex flex-col gap-3 mt-4 text-mute'>
                                            {
                                                exp.description.map((desc) => {
                                                    return <li key={desc}>
                                                        <Paragraph>{desc}</Paragraph>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    }

                                    {/* <a className='cursor-pointer flex items-center gap-1' onClick={() => setHidden(exp.id)}>
                                    <p className='font-semibold'>{exp.hidden ? "Ver más" : "Ver menos"}</p>
                                    <i className={`fa-solid ${exp.hidden ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                                </a> */}

                                </div>
                            })
                        }
                    </div>

                </article>
            </div>


        </Section>
    )
}

export default Experience