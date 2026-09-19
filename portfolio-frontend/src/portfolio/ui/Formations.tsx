import { Link } from 'react-router-dom';
import { getImage } from '../../lib/getImage';
import MiniButton from '../components/MiniButton';
import Section from '../components/Section';
import TitleSection from '../components/TitleSection';
import { education, languajes } from '../data/education';
import { sectionsNav } from '../data/nav';
import { program_languages } from '../data/skills';

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



            <div className='flex gap-10'>

                <article className='w-full flex flex-col' >
                    <TitleSection title={"Educación"} icon={"fa-briefcase"} />

                    <div className='flex flex-col gap-3'>
                        {
                            education.map((educ) => {
                                return <div className='flex w-full items-center bg-white/10 rounded-lg p-5'>
                                    <div className='flex gap-5 items-center '>
                                        <img className='rounded-lg w-15' src={getImage(folderImage, educ.icon)} alt={educ.name} />
                                        <div className='space-y-2'>
                                            <h1 className='font-semibold'>{educ.title}</h1>
                                            <h3 className='text-sm text-mute'>{educ.name}</h3>
                                        </div>
                                    </div>

                                    {/* <p className='text-mute w-full text-end'>{educ.date}</p> */}
                                </div>

                            })
                        }
                    </div>


                </article>

                <article className='w-full flex flex-col'>

                    <TitleSection title={"Idiomas"} icon={"fa-language"} />

                    <div className='flex flex-col gap-3'>
                        {
                            languajes.map((lang) => {
                                return <div className='p-3 bg-white/10 rounded-2xl'>
                                    <h1>{lang.lang}</h1>
                                </div>
                            })
                        }
                    </div>

                </article>
            </div>
        </section>
    )
}

export default Education