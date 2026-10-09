import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';
import { sectionsNav, } from '../data/nav';
import TitleSection from '../components/TitleSection';
import Timeline from '../components/Timeline';
import TimelineSection from '../components/TimelineSection';
import { education } from '../data/education';

const experiences = [
    {
        id: 1,
        profile: "Desarrolladora Web",
        company: "PwC España",
        date: "mar - sept 2026",
        resume: "Desarrollo, mantenimiento y resolucion de incidencias en la aplicación corporativa de MAPFRE",
        description: [
            "Desarrollé y mantuve funcionalidades de una aplicación.",
            "Diseñé interfaces responsivas y mejoré su usabilidad.",
            "Gestioné incidencias, resolví errores y validé despliegues a producción."
        ],
        icon: "pwc_espana_logo.jpg",
        hidden: true,
    },
    {
        id: 2,
        profile: "Administradora de sistemas y Desarrolladora",
        company: "Gobierno de Canarias",
        date: "mar - jun 2023",
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
        date: "mar - jun 2021",
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

    const set = (params) => {

    }


    const folderImageExperience = "company_icons"
    const folderImageEducation = "school_icons"
    return (
        <section>
            <div className='flex gap-24'>


                <article className='flex flex-col w-full '>
                    <TitleSection title={sectionsNav.experience.text} icon={sectionsNav.experience.icon} />

                    <Timeline>
                        {
                            experiences.map((exp, index) => {

                                const data = {
                                    title: exp.profile,
                                    subtitle: exp.company,
                                    date: exp.date,
                                    resume: exp.resume,
                                    description: exp.description,
                                    image: exp.icon
                                }

                                return <TimelineSection key={exp.id} data={data} index={index} folderImage={folderImageExperience} />
                            })
                        }

                    </Timeline>
                </article>

                <article className='flex flex-col w-full '>
                    <TitleSection title={sectionsNav.education.text} icon={sectionsNav.education.icon} />

                    <Timeline>
                        {
                            education.map((educ, index) => {

                                const data = {
                                    title: educ.title,
                                    subtitle: educ.name,
                                    date: educ.date,
                                    image: educ.icon
                                }

                                return <TimelineSection key={educ.name} data={data} index={index} folderImage={folderImageEducation} />
                            })
                        }

                    </Timeline>
                </article>
            </div>
        </section>
    )
}

export default Experience