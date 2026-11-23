import type { ProjectType } from '../../data/projects'
import LanguageCard from '../LanguageCard'
import AccentButton from '../AccentButton';
import { useNavigate } from 'react-router-dom';


type ProjectCardType = {
    project: ProjectType
}

const ProjectCard = ({ project }: ProjectCardType) => {


    const navigate = useNavigate()

    return (
        <article
            key={project.id}
            className=" border border-white/10 rounded-xl overflow-hidden hover:border-primary/50! transition-all duration-300"
            style={{
                backgroundColor: "var(--theme-bg-card)",
                borderColor: "var(--theme-border-card)",
            }}
        >
            
            <div className="relative overflow-hidden group">
                <img
                    src={project.image_preview}
                    alt={project.name}
                    className=" group-hover:scale-105 transition-transform duration-500"
                />
            </div>


            {/* Contenido */}
            <div className="p-6 space-y-5">

                <div>
                    <h3 className="text-xl font-semibold text-white mb-3"
                        style={{ color: "var(--theme-title-text)" }}
                    >
                        {project.name}
                    </h3>

                    <p style={{ color: "var(--theme-primary-text)" }}>
                        {project.description}
                    </p>
                </div>



                <div className="flex flex-wrap g mb-6 items-center">
                    {project.tec.slice(0, 3).map(tech => (
                        <LanguageCard skill={tech} />
                    ))}

                    {(project.tec.length - 1) > 3 &&
                        <p style={{ color: "var(--theme-primary-text)" }}>
                            +{project.tec.length - 3} más
                        </p>}
                </div>

                <hr />

                <div className='flex items-center '>
                    <div>
                        <AccentButton onClickFunction={() => navigate(`Proyecto/${project.name}`)}>
                            <p className="font-medium tracking-wide">{"Detalles"}</p>
                            <i className="fa-solid fa-arrow-right transition-all group-hover:translate-x-1"></i>
                        </AccentButton>
                    </div>
                    <div className="w-full flex items-center justify-end gap-5">

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-2 items-center justify-center rounded-lg cursor-pointer transition-all border py-2 px-2 hover:border-primary! hover:text-primary!"
                            style={{
                                color: "var(--theme-social-text)",
                                borderColor: "var(--theme-social-border)",
                            }}
                        >
                            <i className="fa-brands fa-github"></i>
                            Código
                        </a>

                        {/* <button
                        onClick={() => openProject(project)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        <i className="bi bi-info-circle text-base"></i>
                        Detalles
                    </button> */}

                        {project.web && (
                            <a
                                href={project.web}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors"
                            >
                                Ver demo
                                <i className="fa-solid fa-up-right-from-square"></i>
                            </a>
                        )}

                    </div>
                </div>


            </div>
        </article>
    )
}

export default ProjectCard