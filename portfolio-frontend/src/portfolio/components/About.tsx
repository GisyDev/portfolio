import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"

const About = () => {

    const { name, profile, description } = about_me

    return (
        <section className='w-full h-screen flex items-center'>
            <article className='flex w-7xl gap-30 mx-auto'>

                <div className='flex gap-10 justify-between '>

                    <div className='flex flex-col justify-between'>
                        <div className='space-y-3'>
                            <div className='flex flex-col space-y-3'>
                                <h1 className='text-8xl font-semibold'>Hola, Soy <strong className='text-primary'>{name}</strong></h1>
                                <h3 className='flex gap-5 text-3xl'>
                                    <p className='text-secondary-text font-bold '>{"<"}</p>
                                    <p className='font-semibold '>{profile}</p>
                                    <p className='text-secondary-text font-bold '>{">"}</p>
                                </h3>
                            </div>
                            <div className='mt-8 space-y-8'>
                                
                                <p className='text-mute tracking-wide font-semibold text-xl w-3xl'>{description}</p>

                                <div className='space-x-5'>
                                    <button className='bg-primary rounded-lg font-semibold py-3 px-3 '>
                                        <a className="flex items-center gap-1" href={""} target="blank">
                                            <i className="fa-solid fa-circle-info"></i>
                                            <p>Más información</p>
                                        </a>
                                    </button>

                                    <button className='rounded-lg font-semibold py-3 px-3 border-4 border-primary'>
                                        <a className="flex items-center gap-1" href={""} target="blank">
                                            <i className="fa-solid fa-download"></i>
                                            <p>Descargar CV</p>
                                        </a>
                                    </button>
                                </div>

                                <div className='space-x-5'>
                                    {social_media.map((social) => {
                                        return (
                                            <button key={social.name} className='border-4 p-3 rounded-full border-primary'>
                                                <a className="flex items-center gap-2" href={social.link} target="blank">
                                                    <i className={`text-2xl ${social.icon}`}></i>
                                                    {social.name && <p className='font-semibold'>{social.name}</p>}
                                                </a>
                                            </button>

                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={cara} alt="Yo" className='w-lg rounded-2xl border-8 text-primary-button border-primary ' />
                    </div>
                </div>
            </article>

        </section>
    )
}




export default About