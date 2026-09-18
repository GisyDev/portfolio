import { getImage } from '../../lib/getImage';
import Section from '../components/Section';
import { education } from '../data/education';

const Education = () => {

    const folderImage = "school_icons"

    return (

        <Section title={"Educación"} icon={"fa-graduation-cap"}>
            <article className='flex gap-6 w-full'>
                {
                    education.map((educ) => {
                        return <div className='flex w-full items-center bg-white/10 rounded-lg p-5 mb-10'>
                            <div className='flex flex-col gap-3 '>
                                <img className='rounded-lg w-18' src={getImage(folderImage, educ.icon)} alt={educ.name} />
                                <div className='space-y-2 mt-3'>
                                    <h1 className='text-lg font-bold'>{educ.title}</h1>
                                    <h3>{educ.name}</h3>
                                </div>
                            </div>

                            {/* <p className='text-mute w-full text-end'>{educ.date}</p> */}
                        </div>

                    })
                }

            </article>
        </Section>
    )
}

export default Education