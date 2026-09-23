import { getImage } from '../../lib/getImage';
import MiniButton from '../components/MiniButton';
import TitleSection from '../components/TitleSection';
import { education, languajes } from '../data/education';
import { sectionsNav } from '../data/nav';
import { program_languages, type programLanguagesType } from '../data/skills';
import HorizontalCard from '../components/HorizontalCard';
import LanguageModal from '../modals/LanguajeModal';
import { useState } from 'react';

export type ModalLanguageType = {
    data: programLanguagesType | null
    visibility: boolean
}

const Education = () => {

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
                <article className='m-auto scroll-mt-32'>
                    <TitleSection title={"Tecnologías"} icon={"fa-code"} />
                    <div className='flex gap-4 flex-wrap'>
                        {
                            program_languages.map((skill) => {
                                return <MiniButton>
                                    <img className='w-6' src={getImage("language_icons", skill.image)} alt="" />
                                    <p className='text-sm'>{skill.name}</p>
                                </MiniButton>

                            })
                        }
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