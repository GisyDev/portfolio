import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"

const About = () => {

    const { name, profile, description } = about_me

    return (
        <section className='pt-30 w-full'>
            <article className='flex w-7xl gap-10 mx-auto'>
                <div>
                    <img src={cara} alt="Yo" className='w-120 rounded-2xl' />
                </div>
                <div className='flex gap-10 justify-between '>

                    <div className='flex flex-col justify-between'>
                        <div className='space-y-3'>
                            <h1 className='text-5xl'>¡Hola! Soy {name}</h1>
                            <h3 className='text-2xl flex gap-5'>
                                <p>{"<"}</p>
                                {profile}
                                <p>{">"}</p>

                            </h3>
                            <p>{description}</p>
                        </div>

                        <div className='space-x-5'>
                            <button className='border p-2'>
                                <a className="flex items-center gap-1" href={""} target="blank">
                                    <i className="fa-solid fa-circle-info"></i>
                                    <p>Más información</p>
                                </a>
                            </button>

                            <button className='border p-2'>
                                <a className="flex items-center gap-1" href={""} target="blank">
                                    <i className="fa-solid fa-download"></i>
                                    <p>Descargar CV</p>
                                </a>

                            </button>

                            {social_media.map((social) => {
                                return (
                                    <button key={social.name} className='border p-2 rounded-lg'>
                                        <a className="flex items-center gap-1" href={social.link} target="blank">
                                            <i className={social.icon}></i>
                                            <p>{social.name}</p>
                                        </a>
                                    </button>

                                );
                            })}
                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}




export default About