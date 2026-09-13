import { getImage } from '../../lib/getImage';
import { education } from '../data/education';

const Education = () => {

    const folderImage = "school_icons"

    return (
        <section className='w-7xl m-auto mt-20'>
            <div>
                <h1 className='text-4xl font-bold'>Educación</h1>
                <p>Lo que he estudiado</p>
            </div>
            <article className='mt-5 flex gap-5'>
                {
                    education.map((educ) => {
                        return <div className='flex space-y-4 space-x-3 bg-red w-full border-2 items-center'>
                            <div>
                                <img src={getImage(folderImage, educ.icon)} alt={educ.name}/>
                            </div>
                            <div>
                                <h1>{educ.name}</h1>
                                <h3>{educ.title}</h3>
                                <p>{educ.date}</p>
                            </div>
                        </div>

                    })
                }

            </article>
        </section>
    )
}

export default Education