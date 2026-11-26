import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Paragraph from '../Paragraph';
import TitleSection from "../TitleSection";
import LanguageCard from "../LanguageCard";
import GoBack from '../GoBack';
import { sectionsNav } from "../../data/nav";
import SecondaryButton from "../SecondaryButton";
import { assetUrl } from "../../../lib/assetUrl";


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

    const MAX_ROWS = 4;
    const rows = Math.min(gallery.length, MAX_ROWS);

    const columns = [
        gallery.slice(0, MAX_ROWS),
        gallery.slice(MAX_ROWS),
    ].filter((col) => col.length > 0);

    return (
        <section className="w-full space-y-4 z-10 animate-fade-in max-w-page m-auto"
        >
            <GoBack backLabel={"Proyectos"} />


            <div className="space-y-3">
                <h1 className="text-4xl font-semibold">{project.name}</h1>
                <Paragraph>{project.description}</Paragraph>
            </div>

            <hr />

            <div className="space-y-10">
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <div className="lg:flex-1">
                        <img
                            src={assetUrl(imageSelected)}
                            alt={`Vista previa del proyecto ${project.name}`}
                            className="w-full rounded-xl"
                            loading="lazy"
                        />
                    </div>

                    {gallery.length > 1 && (
                        <div className="flex gap-2 lg:w-[20rem]">
                            {columns.map((col, c) => (
                                <div key={c} className="flex flex-1 flex-col gap-2">
                                    {col.map((image) => {
                                        const index = gallery.indexOf(image);
                                        return (
                                            <button
                                                key={image}
                                                type="button"
                                                onMouseEnter={() => setSelected(image)}
                                                onClick={() => setSelected(image)}
                                                aria-label={`Ver imagen ${index + 1}`}
                                                className={`relative aspect-video  lg:min-h-0 lg:flex-1
                                                cursor-pointer overflow-hidden rounded-lg
                                                hover:ring-2 hover:ring-primary
                                                ${imageSelected === image ? "ring-2 ring-primary" : ""}`}
                                            >
                                                <img
                                                    src={assetUrl(image)}
                                                    alt={`Miniatura ${index + 1} de ${project.name}`}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />
                                            </button>
                                        );
                                    })}

                                    {Array.from({ length: rows - col.length }).map((_, i) => (
                                        <div key={`empty-${i}`} className="hidden lg:block lg:flex-1" />
                                    ))}
                                </div>
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

                        <div className="w-full">
                            <SecondaryButton className={"w-full"}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="space-x-2"
                                    style={{
                                        color: "var(--theme-social-text)",
                                        borderColor: "var(--theme-social-border)",
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i>
                                    <span>Código</span>
                                </a>
                            </SecondaryButton>
                        </div>



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
