import { getImage } from '../../lib/getImage';
import Section from '../components/Section';
import TitleSection from '../components/TitleSection';
import { education, languajes } from '../data/education';

const Education = () => {

    const folderImage = "school_icons"

    return (

        <section className="scroll-m-30" id='Educacion'>
            <div className='flex gap-10'>

                <article className='w-full flex flex-col'>
                    <TitleSection title={"Educación"} icon={"fa-graduation-cap"} />

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