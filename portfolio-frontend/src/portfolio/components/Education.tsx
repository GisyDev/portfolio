import { getImage } from '../../lib/getImage';
import { education } from '../data/education';

const Education = () => {

    const folderImage = "school_icons"

    return (
        <section className='w-7xl m-auto mt-20'>
            <div className='space-y-3'>
                <h1 className='text-4xl font-bold text-primary'>Educación</h1>
                <p className='text-mute font-semibold'>Lo que he estudiado</p>
            </div>
            <article className='mt-5 flex gap-5'>
                {
                    education.map((educ) => {
                        return <div className='flex flex-col space-y-4 space-x-3 bg-red w-full items-center bg-bg-card rounded-lg p-5'>
                            <div className='flex gap-3 '>
                                <img className='rounded-lg' src={getImage(folderImage, educ.icon)} alt={educ.name} />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-lg font-bold'>{educ.title}</h1>
                                <h3>{educ.name}</h3>
                            </div>
                            <p className='items-end'>{educ.date}</p>
                        </div>

                    })
                }

            </article>
        </section>
    )
}

export default Education