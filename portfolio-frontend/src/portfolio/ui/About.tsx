import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"
import { skillsSlider } from '../data/skills'
import { getImage } from '../../lib/getImage'

type AboutType = {
    moreInfoEnable: boolean,
    setMoreInfoEnable: React.Dispatch<React.SetStateAction<boolean>>
}

const About = ({ moreInfoEnable, setMoreInfoEnable }: AboutType) => {

    const { name, profile, description } = about_me

    return (
        <section className='w-full flex items-center h-screen' id='SobreMi'>
            <article className='flex w-3/4 gap-30 mx-auto'>
                <div className='flex gap-10 justify-between w-full'>

                    <div className='flex flex-col justify-between '>
                        <div className='space-y-3'>
                            <div className='flex flex-col space-y-3 '>
                                <div className='space-y-2'>
                                    <h1 className='text-7xl font-bold'>{name}</h1>
                                </div>

                                <h3 className='flex gap-5 text-4xl text-primary '>
                                    <p className='font-semibold'>{profile}</p>
                                </h3>
                            </div>
                            <div className='mt-8 space-y-8'>

                                <p className='text-mute tracking-wide font-semibold text-xl/9 w-3xl '>{description}</p>

                                <div className='flex gap-5'>
                                    <button className='flex items-center gap-1 rounded-lg font-semibold py-3 px-3 bg-primary hover:bg-primary-hover transition-all cursor-pointer'>
                                            <i className="fa-solid fa-download"></i>
                                            <p>Descargar CV</p>
                                    </button>
                                    <button
                                        className=' flex rounded-lg font-semibold py-3 px-3 bg-gray-500 cursor-pointer items-center gap-1 hover:bg-gray-600 transition-all'
                                        onClick={() => setMoreInfoEnable(!moreInfoEnable)}>
                                        <i className="fa-solid fa-circle-info"></i>
                                        <p>Más información</p>
                                    </button>
                                </div>

                                <div className='space-x-5'>
                                    {social_media.map((social) => {
                                        return (
                                            <button key={social.name} className=' p-3 rounded-full border-2 border-primary'>
                                                <a className="flex items-center gap-2" href={social.link} target="blank">
                                                    <i className={`text-2xl ${social.icon}`}></i>
                                                    {social.name && <p className='font-semibold'>{social.name}</p>}
                                                </a>
                                            </button>

                                        );
                                    })}
                                </div>

                                <div className='flex gap-3 flex-wrap'>
                                    {
                                        skillsSlider.map((skill) => {
                                            return <button className='bg-white/15 py-2 px-3 rounded-lg backdrop-blur-2xl flex gap-3 cursor-pointer hover:bg-white/20 transition-all'>
                                                <img className='w-5' src={getImage("language_icons", skill.image)} alt="" />
                                                <p className='text-lg'>{skill.name}</p>
                                            </button>
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={cara} alt="Yo" className='w-full rounded-2xl border-8 text-primary-button border-primary ' />
                </div>
            </article>

        </section>
    )
}




export default About