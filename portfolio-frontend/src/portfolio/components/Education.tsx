import { getImage } from '../../lib/getImage';
import { education } from '../data/education';

const Education = () => {

    const folderImage = "school_icons"

    return (
        <section className='w-7xl m-auto mt-20' id='Educacion'>
            <div className='flex items-center gap-3 text-5xl mb-12'>
                <i className="fa-solid fa-graduation-cap text-primary"></i>
                <h1 className='text-5xl font-bold'>Educación</h1>
            </div>
            <article className='mt-8 flex gap-6'>
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
        </section>
    )
}

export default Education