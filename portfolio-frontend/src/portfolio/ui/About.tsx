import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"
import { languages } from '../data/skills'
import { getImage } from '../../lib/getImage'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton'
import MiniButton from '../components/MiniButton'

type AboutType = {
    moreInfoEnable: boolean,
    setMoreInfoEnable: React.Dispatch<React.SetStateAction<boolean>>
}

const About = ({ moreInfoEnable, setMoreInfoEnable }: AboutType) => {

    const { name, profile, description } = about_me

    return (
        <section className='w-full flex items-center h-screen ' id='SobreMi'>
            <article className='flex w-3/4 gap-10 mx-auto'>
                <div className='flex gap-5 justify-between w-3/4'>

                    <div className='flex flex-col justify-between '>
                        <div className='space-y-3'>
                            <div className='flex flex-col space-y-3 '>
                                <div className='space-y-2'>
                                    <h1 className='text-6xl font-bold'>{name}</h1>
                                </div>

                                <h3 className='flex gap-5 text-3xl text-primary '>
                                    <p className='font-semibold'>{profile}</p>
                                </h3>
                            </div>
                            <div className='mt-8 space-y-8'>

                                <p className='text-mute tracking-wide font-semibold text-xl/9  '>{description}</p>

                                <div className='flex gap-5'>
                                    <PrimaryButton className='bg-primary hover:bg-primary-hover'>
                                        <i className="fa-solid fa-download"></i>
                                        <p>Descargar CV</p>
                                    </PrimaryButton>

                                    <PrimaryButton className='bg-gray-500 hover:bg-gray-500/90' onClick={() => setMoreInfoEnable(!moreInfoEnable)}>
                                        <i className="fa-solid fa-circle-info"></i>
                                        <p>Más información</p>
                                    </PrimaryButton>

                                </div>

                                <div className='space-x-5'>
                                    {social_media.map((social) => {
                                        return (
                                            <SecondaryButton className='border-primary' key={social.name}>
                                                <a className="flex items-center gap-2" href={social.link} target="blank">
                                                    <i className={`${social.icon}`}></i>
                                                    {social.name && <p className='font-semibold'>{social.name}</p>}
                                                </a>
                                            </SecondaryButton>

                                        );
                                    })}
                                </div>

                                <div className='flex gap-4 flex-wrap'>
                                    {
                                        languages.map((skill) => {
                                            return <Link to={{pathname: `lenguaje/${skill.name}`}}>
                                                <MiniButton>
                                                    <img className='w-6' src={getImage("language_icons", skill.image)} alt="" />
                                                    <p className=''>{skill.name}</p>
                                                </MiniButton>
                                            </Link>
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex items-center w-1/3'>
                    <img src={cara} alt="Yo" className='w-full rounded-2xl border-8 text-primary-button border-primary ' />
                </div>
            </article>

        </section>
    )
}




export default About