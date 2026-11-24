import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Paragraph from '../Paragraph';
import TitleSection from "../TitleSection";
import LanguageCard from "../LanguageCard";
import GoBack from '../GoBack';
import { sectionsNav } from "../../data/nav";

export default function ProjectDetail() {
    const { id: idName } = useParams();

    const project = idName
        ? projects.find((p) => p.name === idName)
        : undefined;


    const gallery = project
        ? [project.image_preview, ...(project.images ?? [])]
        : [];

    const [selected, setSelected] = useState<string | null>(null);

    const imageSelected =
        selected && gallery.includes(selected) ? selected : gallery[0];

    if (!project) {
        return (
            <section className="w-full space-y-4">
                <h1 className="text-3xl font-semibold">Proyecto no encontrado</h1>
                <Link to="/" className="text-primary underline">
                    Volver al inicio
                </Link>
            </section>
        );
    }   

    return (
        <section className="w-full space-y-4 z-10 animate-fade-in">
            <GoBack backLabel={"Proyectos"}/>
            

            <div className="space-y-3">
                <h1 className="text-4xl font-semibold">{project.name}</h1>
                <Paragraph>{project.description}</Paragraph>
            </div>

            <hr />

            <div className="space-y-10">
                <div className="flex flex-col lg:flex-row justify-between gap-4 w-full">
                    <div className="">
                        <img
                            src={imageSelected}
                            alt={`Vista previa del proyecto ${project.name}`}
                            className="w-full max-w-8xl object-fill rounded-xl"
                            loading="lazy"
                        />
                    </div>


                    {gallery.length > 1 && (
                        <div className="grid grid-cols-2 justify-center mx-auto w-2/4 ">
                            {gallery.map((image, index) => (
                                <button
                                    key={image}
                                    type="button"
                                    className="w-28 cursor-pointer rounded-lg z-50"
                                    onMouseEnter={() => setSelected(image)}
                                    onClick={() => setSelected(image)}
                                    aria-label={`Ver imagen ${index + 1}`}
                                >
                                    <img
                                        src={image}
                                        alt={`Miniatura ${index + 1} de ${project.name}`}
                                        className={`aspect-video w-full object-cover rounded-lg border-4 border-transparent hover:ring-2 hover:ring-primary 
                                            ${imageSelected === image
                                                ? "ring-2 ring-primary"
                                                : ""
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-15">
                    <div className="w-full space-y-3">

                        {project.web && (
                            <a
                                href={project.web}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors w-full"
                            >
                                <div className="mx-auto space-x-2">
                                    <span className="text-center">Ver demo</span>
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </div>

                            </a>
                        )}

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-2 items-center justify-center rounded-lg cursor-pointer transition-all border py-2 px-2 hover:border-primary! hover:text-primary! bg-white"
                            style={{
                                color: "var(--theme-social-text)",
                                borderColor: "var(--theme-social-border)",
                            }}
                        >
                            <i className="fa-brands fa-github"></i>
                            Código
                        </a>
                    </div>
                    <div className="space-y-4">
                        <Paragraph>
                            {project.full_description}
                        </Paragraph>

                        <div className="flex flex-wrap gap-3">
                            {
                                project.tec.map((tec) => (
                                    <LanguageCard skill={tec} />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}