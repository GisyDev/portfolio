import React, { useId, useState } from 'react'
import type { ComplementaryTrainingType } from '../../data/complementary-training'
import Paragraph from '../Paragraph';
import AccentButton from '../AccentButton';
import PrimaryButton from '../PrimaryButton';
import { assetUrl } from '../../../lib/assetUrl';


type TrainingCardType = {
    training: ComplementaryTrainingType
}


const TrainingCard = ({ training }: TrainingCardType) => {


    const { id, name, description, image, tec, plataform, cert } = training

    const [open, setOpen] = useState(false);

    const panelId = useId()

    return (
        <div
            className="border border-white/10 rounded-xl overflow-hidden hover:border-primary/50! transition-all duration-300"
            style={{
                backgroundColor: "var(--theme-bg-card)",
                borderColor: "var(--theme-border-card)",
            }}

        >
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 rounded-[32px] transition-opacity duration-500 motion-reduce:transition-none ${open ? "opacity-100" : "opacity-0"
                    }`}
            />

            <div className="relative">
                {/* Imagen + título */}
                <div className="relative overflow-hidden">


                    <img
                        src={assetUrl(image)}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 ">
                        <p className="text-xs font-semibold  text-white text-wrap  w-full">
                            {name}
                        </p>

                    </div>
                </div>



                {/* Panel desplegable */}
                <div
                    id={training.id}
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div
                            className={`mt-2 space-y-4 rounded-[22px]  p-4 transition-opacity duration-500 motion-reduce:transition-none ${open ? "opacity-100" : "opacity-0"
                                }`}
                        >

                            <p className={`text-sm leading-[1.7]`} style={{ color: "var(--theme-primary-text)" }}>
                                {description}
                            </p>

                            {/* <ul className="flex flex-wrap gap-2">
                                {tec.map((tec) => (
                                    <li
                                        key={tec.name}
                                        className="flex items-center gap-1.5 rounded-xl border  px-2.5 py-1.5 text-xs font-medium text-neutral-100"
                                        style={{ borderColor: `${tec.color}66` }}
                                    >
                                        <img
                                            src={assetUrl(`/images/${tec.image}`)}
                                            alt=""
                                            className="h-3.5 w-3.5 object-contain"
                                        />
                                        {tec.name}
                                    </li>
                                ))}
                            </ul> */}

                            <hr />

                            <div className='flex justify-between'>

                                <div className='flex items-center gap-2'>
                                    <img className='w-8 rounded-lg' src={assetUrl(plataform.icon)} alt="" />
                                    <p>{plataform.name}</p>
                                </div>

                                <a href={cert} target='_blank'>
                                    <PrimaryButton className='bg-primary hover:bg-primary-hover text-white'>
                                        <i className="fa-solid fa-award"></i>
                                        Certificado
                                    </PrimaryButton>

                                </a>

                            </div>

                        </div>
                    </div>


                </div>

                {/* Botón para expandir */}
                <button
                    className={`cursor-pointer mx-auto my-2 flex  w-full items-center justify-center rounded-2xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 text-neutral-800
                        }`}
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform duration-500 motion-reduce:transition-none ${open ? "rotate-180" : ""
                            }`}
                            style={{ color: "var(--theme-primary-text)" }}
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default TrainingCard
