import type { ProjectType } from '../../data/projects'
import LanguageCard from '../LanguageCard'
import { useNavigate } from 'react-router-dom'
import { assetUrl } from '../../../lib/assetUrl'
import PrimaryButton from '../PrimaryButton'

type ProjectCardType = {
    project: ProjectType
}

const MAX_TECH = 3

const ProjectCard = ({ project }: ProjectCardType) => {
    const navigate = useNavigate()

    const detailsFunction = (projectName: string) => {
        navigate(`Proyecto/${projectName}`)
        window.scrollTo(0, 0)
    }

    const hiddenTech = Math.max(project.tec.length - MAX_TECH, 0)

    return (
        <article
            className="@container h-full overflow-hidden rounded-xl transition-all duration-300  w-full"
            style={{ backgroundColor: 'var(--theme-bg-card)' }}
        >
            <div className="flex h-full flex-col w-full">
                <div className="group relative overflow-hidden">
                    <img
                        src={assetUrl(project.image_preview)}
                        alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-4 @sm:p-6">
                    <div>
                        <h3
                            className="mb-2 text-lg font-semibold @sm:text-xl"
                            style={{ color: 'var(--theme-title-text)' }}
                        >
                            {project.name}
                        </h3>
                        <p
                            className="line-clamp-3 text-sm @sm:text-base"
                            style={{ color: 'var(--theme-primary-text)' }}
                        >
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {project.tec.slice(0, MAX_TECH).map((tech) => (
                            <LanguageCard key={tech.name} skill={tech} />
                        ))}
                        {hiddenTech > 0 && (
                            <p
                                className="text-sm"
                                style={{ color: 'var(--theme-primary-text)' }}
                            >
                                +{hiddenTech} más
                            </p>
                        )}
                    </div>

                    <hr className="mt-auto border-[var(--theme-border-card)]" />

                    <div className="flex flex-col gap-3 @md:flex-row @md:items-center">
                        <PrimaryButton
                            className="group min-h-11 w-full justify-center bg-secondary text-white hover:bg-secondary-hover @md:w-auto"
                            onClick={() => detailsFunction(project.name)}
                        >
                            <span className="font-medium tracking-wide">Detalles</span>
                            <i
                                className="fa-solid fa-arrow-right transition-all group-hover:translate-x-1"
                                aria-hidden="true"
                            ></i>
                        </PrimaryButton>

                        <div className="flex flex-wrap gap-3 @md:ml-auto">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-11 min-w-fit flex-1 items-center justify-center gap-2 rounded-lg border bg-[var(--theme-bg-card)] px-4 py-2 transition-colors hover:border-primary! hover:text-primary! @md:flex-none"
                                style={{
                                    color: 'var(--theme-social-text)',
                                    borderColor: 'var(--theme-social-border)',
                                }}
                            >
                                <i className="fa-brands fa-github" aria-hidden="true"></i>
                                <span>Código</span>
                            </a>

                            {project.web && (
                                <a
                                    href={project.web}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex min-h-11 min-w-fit flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-hover @md:flex-none"
                                >
                                    Ver demo
                                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard