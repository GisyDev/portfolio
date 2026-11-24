import { Fragment } from "react";
import { sectionsNav } from "../../data/nav";
import { CountUp } from 'use-count-up'

const defaultStats = [
    { value: 1, valueLabel: "año", label: "Experiencia laboral", icon: "fa-users" },
    { value: 20, valueLabel: "+", label: "Proyectos", icon: sectionsNav.projects.icon },
];

export default function StatsBar({ items = defaultStats }) {
    return (
        
        <article className="w-full block mt-5 sm:absolute sm:mt-0 top-[95%] sm:top-[95%] lg:top-[90%] max-w-md rounded-3xl 
        animate-fade-in animate-delay-30
        px-6 py-3 shadow-lg sm:rounded-full sm:px-10"
            style={{
                backgroundColor: "var(--theme-bg-card)",
                borderColor: "var(--theme-border-card)",
            }}

        >
            <ul className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                {items.map((item, i) => (
                    <Fragment key={item.label}>
                        {i > 0 && (
                            <li
                                aria-hidden="true"
                                className="hidden h-12 w-px bg-gray-200 sm:block"
                            />
                        )}
                        <li className="flex items-center gap-6">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary ">
                                <i className={`fa-solid ${item.icon} text-white  text-xl`}></i>
                            </span>
                            <div className="leading-tight">

                                <div className="text-2xl font-semibold flex gap-1"
                                    style={{ color: "var(--theme-primary-text)" }}
                                >   
                                    <CountUp isCounting end={+item.value} duration={2} />
                                    <span>{item.valueLabel}</span>
                                </div>


                                <p className="mt-1 text-xs font-medium "
                                    style={{ color: "var(--theme-primary-text)" }}
                                >

                                    {item.label}
                                </p>
                            </div>
                        </li>

                    </Fragment>
                ))}
            </ul>
        </article>
    );
}
