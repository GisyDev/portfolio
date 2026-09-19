import { Link } from 'react-router-dom';
import { getImage } from '../../lib/getImage';
import MiniButton from '../components/MiniButton';
import Section from '../components/Section';
import TitleSection from '../components/TitleSection';
import { education, languajes } from '../data/education';
import { sectionsNav } from '../data/nav';
import { program_languages } from '../data/skills';
import HorizontalCard from '../components/HorizontalCard';

const Education = () => {

    const folderImage = "school_icons"

    return (

        <section className="scroll-m-30 flex flex-col gap-20" id={sectionsNav.education.id} data-section={sectionsNav.education.id}>
            <Section title={"Tecnologías"} icon={"fa-code"}>

                <div className='flex gap-4 flex-wrap'>
                    {
                        program_languages.map((skill) => {
                            return <Link to={{ pathname: `lenguaje/${skill.name}` }}>
                                <MiniButton>
                                    <img className='w-6' src={getImage("language_icons", skill.image)} alt="" />
                                    <p>{skill.name}</p>
                                </MiniButton>
                            </Link>
                        })
                    }
                </div>

            </Section>



            <div className='flex gap-10 w-full '>

                <article className=' flex flex-col w-full' >
                    <TitleSection title={"Educación"} icon={"fa-briefcase"} />

                    <div className='flex flex-col gap-3'>
                        {
                            education.map((educ) => {
                                return <HorizontalCard>
                                    <div className='flex gap-5 items-center w-full'>
                                        <img className='rounded-lg w-15' src={getImage(folderImage, educ.icon)} alt={educ.name} />
                                        <div className='space-y-2 w-full'>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='font-semibold'>{educ.title}</h1>
                                                <p className='text-mute text-sm'>{educ.date}</p>
                                            </div>
                                            <h3 className='text-sm text-mute'>{educ.name}</h3>
                                        </div>
                                    </div>
                                </HorizontalCard>

                            })
                        }
                    </div>


                </article>

                <article className='flex flex-col w-2xs '>

                    <TitleSection title={"Idiomas"} icon={"fa-language"} />

                    <div className='flex flex-col gap-3 w-full '>
                        {
                            languajes.map((lang) => {
                                return <HorizontalCard>
                                    <h1 className='text-lg font-semibold'>{lang.lang}</h1>
                                    <p className='text-mute'>{lang.nivel}</p>
                                </HorizontalCard>


                            })
                        }
                    </div>

                </article>


            </div>
        </section>
    )
}

export default Education