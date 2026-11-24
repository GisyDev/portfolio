
import React from 'react'
import Section from '../components/Section'
import { sectionsNav } from '../data/nav'
import { projects } from '../data/projects'
import ProjectCard from '../components/Projects/ProjectCard'

const Projects = () => {

    return (

        <Section title='Proyectos' icon={sectionsNav.projects.icon} reference={sectionsNav.projects.id}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-page">
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}
            </div>

        </Section>
    )
}

export default Projects
