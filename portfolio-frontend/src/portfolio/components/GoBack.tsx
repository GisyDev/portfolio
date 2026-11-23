import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import AccentButton from './AccentButton';

type Crumb = {
    label: string;
    to?: string;
};

type ProjectTopBarProps = {
    backLabel?: string;
    backTo?: string;
    items?: Crumb[];
    rootLabel?: string;
};

function crumbsFromPath(pathname: string, rootLabel: string): Crumb[] {
    const segments = pathname.split("/").filter(Boolean);

    const crumbs: Crumb[] = [{ label: rootLabel, to: "/" }];

    segments.forEach((segment, index) => {
        const isLast = index === segments.length - 1;
        crumbs.push({
            label: decodeURIComponent(segment),
            to: isLast ? undefined : "/" + segments.slice(0, index + 1).join("/"),
        });
    });

    return crumbs;
}

export default function GoBack({ backLabel = "Proyectos", backTo = "/", items, rootLabel = "Portafolio" }: ProjectTopBarProps) {
    const { pathname } = useLocation();
    const crumbs = items ?? crumbsFromPath(pathname, rootLabel);

    return (
        <div className="flex flex-wrap items-center justify-between gap-3">


            <Link to={backTo}>
                <AccentButton>
                    <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1"></i>
                    <p className="font-medium tracking-wide">{"Detalles"}</p>
                </AccentButton>
            </Link>


            <nav aria-label="Ruta actual">
                <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-neutral-600">
                    {crumbs.map((crumb, index) => (
                        <Fragment key={`${crumb.label}-${index}`}>
                            {index > 0 && (
                                <li aria-hidden="true" className="text-neutral-400">
                                    /
                                </li>
                            )}
                            <li>
                                {crumb.to ? (
                                    <Link
                                        to={crumb.to}
                                        className="hover:text-primary hover:underline"
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span aria-current="page" className="text-neutral-900">
                                        {crumb.label}
                                    </span>
                                )}
                            </li>
                        </Fragment>
                    ))}
                </ol>
            </nav>
        </div>
    );
}