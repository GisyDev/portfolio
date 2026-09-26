import { getImage } from '../../lib/getImage';
import MiniButton from '../components/MiniButton';
import TitleSection from '../components/TitleSection';
import { education, languajes } from '../data/education';
import { sectionsNav } from '../data/nav';
import { program_languages, type programLanguagesType } from '../data/skills';
import HorizontalCard from '../components/HorizontalCard';
import LanguageModal from '../modals/LanguajeModal';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

export type ModalLanguageType = {
    data: programLanguagesType | null
    visibility: boolean
}

const Education = () => {

    const folderImages = "language_icons"

    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'start',
        dragFree: true,
        containScroll: 'trimSnaps',
        slidesToScroll: 1,

    }, [AutoScroll({ playOnInit: true, speed: 1 })])

    const folderImage = "school_icons"

    // const [languageModal, setLanguageModal] = useState(
    //     {
    //         data: {},
    //         visibility: false
    //     }
    // )

    // const setModalLanguage = (language: programLanguagesType) => {
    //     setLanguageModal({
    //         data: language,
    //         visibility: true
    //     })
    // }

    return (
        <>
            <section className="max-w-max scroll-m-30 flex flex-col gap-20 opacity-0 " id={sectionsNav.education.id} data-section={sectionsNav.education.id}>
                <article className='m-auto w-full scroll-mt-32'>
                    <TitleSection title={"Tecnologías"} icon={"fa-code"} />
                    {/* <div className='grid xs:grid-cols-5 sm:grid-cols-5 gap-4 flex-wrap w-full'>
                        {
                            program_languages.map((skill) => {
                                return <div className=' p-3 flex items-center flex-col gap-3  bg-gray-600/20 basis-[12%] rounded-2xl hover:bg-gray-600/40'>
                                    <img className='w-8' src={getImage("language_icons", skill.image)} alt="" />
                                    <p className='text-xs text-mute'>{skill.name}</p>
                                </div>

                            })
                        }
                    </div> */}

                    <div className="overflow-hidden">
                        <div
                            className="overflow-hidden mask-[linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)]"
                            ref={emblaRef}
                        >
                            <div className="flex touch-pan-y touch-pinch-zoom">
                                {program_languages.map((skill) => {
                                    return (
                                        <div
                                            className="me-5 transform-gpu grow-0 shrink-0 basis-[12%] min-w-0 flex flex-col items-center justify-center border border-zinc-600/70 rounded-2xl gap-2 bg-black py-2"
                                            key={skill.name}
                                        >
                                            <div>
                                                <img className="w-12 m-auto p-1 object-cover" src={getImage(folderImages, skill.image)} alt="" />
                                            </div>
                                            <div>
                                                <p className="p-1 text-xs text-mute">{skill.name}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </article>

                <article className='flex flex-col gap-10 w-full sm:flex-row'>
                    <div className=' flex flex-col w-full ' >
                        <TitleSection title={"Educación"} icon={"fa-briefcase"} />
                        <div className='flex flex-col gap-3'>
                            {
                                education.map((educ) => {
                                    return <HorizontalCard>
                                        <div className='flex gap-5 items-center w-full'>
                                            <img className='rounded-lg w-15' src={getImage(folderImage, educ.icon)} alt={educ.name} />
                                            <div className='space-y-1 w-full'>
                                                <div className='flex flex-col-reverse w-full md:flex-row sm:justify-between '>
                                                    <h1 className=' text-sm font-semibold'>{educ.title}</h1>
                                                    <p className='text-primary-text text-xs'>{educ.date}</p>
                                                </div>
                                                <h3 className='text-sm text-primary-text'>{educ.name}</h3>
                                            </div>
                                        </div>
                                    </HorizontalCard>

                                })
                            }
                        </div>
                    </div>

                    <div className='flex flex-col w-2xs '>
                        <TitleSection title={"Idiomas"} icon={"fa-language"} />
                        <div className='flex flex-row gap-3 w-full sm:flex-col'>
                            {
                                languajes.map((lang) => {
                                    return <HorizontalCard>
                                        <div className='space-y-2'>
                                            <h1 className='text-lg font-semibold'>{lang.lang}</h1>
                                            <p className='text-primary-text'>{lang.nivel}</p>
                                        </div>
                                    </HorizontalCard>
                                })
                            }
                        </div>
                    </div>
                </article>

            </section>

            {/* <LanguageModal modal={languageModal} setModal={setLanguageModal} /> */}
        </>
    )
}

export default Education