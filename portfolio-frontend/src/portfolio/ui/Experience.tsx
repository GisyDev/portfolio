import 'react-vertical-timeline-component/style.min.css';
import { getImage } from '../../lib/getImage';
import { useState } from 'react';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { sectionsNav } from '../data/nav';
import HorizontalCard from '../components/HorizontalCard';

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
                <article className='flex gap-6 w-full '>
                    <span className='max-h-full border-l-2 bg-white border-gray'></span>
                    <div className='space-y-8 w-full'>

                        {
                            experieceState.map((exp, index) => {
                                return <div>
                                    <div className='absolute'>
                                        <div className={`${index === 0 && "animate-ping"} relative right-[31px] top-[40px] bg-primary w-3 h-3 rounded-full`}></div>
                                        <div className={`absolute right-[31px] top-[40px] bg-primary w-3 h-3 rounded-full`}></div>
                                    </div>
                                    <HorizontalCard onClick={() => setHidden(exp.id)}>

                                        <div className='flex gap-5 items-center w-full'>
                                            <img src={getImage(folderImage, exp.icon)} alt="" className='rounded-lg w-14' />
                                            <div className='flex items-center space-y-1 justify-between  w-full'>
                                                <div className='w-full space-y-1'>
                                                    <div className='flex gap-1 flex-col-reverse justify-between sm:flex-row'>
                                                        <h1 className='text-sm font-semibold sm:text-base'>{exp.profile}</h1>
                                                        <p className='text-xs text-mute font-semibold'>{exp.date}</p>
                                                    </div>
                                                    <h3 className='text-xs sm:text-sm text-mute '>{exp.company}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <Paragraph className='text-sm'>{exp.resume}</Paragraph>
                                        <div
                                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out
                                            ${exp.hidden ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
                                        >

                                            <div className="overflow-hidden pl-5 mb-2">
                                                <ul className="list-disc px-3 text-mute space-y-2">
                                                    {exp.description.map((desc) => (
                                                        <li key={desc} className=''> 
                                                            <p className="text-sm">{desc}</p>
                                                        </li>
                                                    ))} 
                                                </ul>
                                            </div>
                                            <a className='cursor-pointer flex items-center justify-center gap-1 text-xs text-mute/80' onClick={() => setHidden(exp.id)}>
                                                {/* <p className=''>{exp.hidden ? "Ver más" : "Ver menos"}</p> */}
                                                <i className={`fa-solid fa-chevron-down duration-300 ${exp.hidden ? "rotate-0" : " -rotate-180"}`}></i>
                                            </a>
                                        </div>




                                    </HorizontalCard>
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