
import React from 'react'
import Section from '../components/Section'
import { sectionsNav } from '../data/nav'
import { projects } from '../data/projects'
import ProjectCard from '../components/Projects/ProjectCard'

const Projects = () => {

    return (

        <Section title={sectionsNav.projects.text} description={sectionsNav.projects.description} icon={sectionsNav.projects.icon} reference={sectionsNav.projects.id}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-page w-full">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </Section>
    )
}

export default Projects
