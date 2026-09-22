import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton'
import Paragraph from '../components/Paragraph'
import AccentButton from '../components/AccentButton'
import { sectionsNav } from '../data/nav'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {

    const { name, profile, description } = about_me

    const navigate = useNavigate()

    return (
        <section className='flex items-center scroll-m-30' id={sectionsNav.about.id} data-section={sectionsNav.about.id}>
            <article className='flex flex-col-reverse gap-12 '>
                <div className='flex gap-5 justify-between'>
                    <div className='flex flex-col space-y-6 '>
                        <div className='space-y-3 '>
                            {/* <AccentButton className='bg-secondary-background text-primary/90 border-primary/50'>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                                </span>
                                <p>Disponible para trabajar - Santa Cruz de Tenerife</p>
                            </AccentButton> */}

                            <h1 className='animate-fade-in animate-delay-25 text-2xl font-bold '>{name}</h1>
                            <h3 className='animate-fade-in animate-delay-85 flex gap-5 text-xl text-primary font-semibold'>{profile}</h3>
                        </div>
                        <Paragraph className='animate-fade-in animate-delay-120'> {description} </Paragraph>

                        <div className='flex text-xs items-center gap-3 animate-fade-in animate-delay-200 space-x-3'>
                            <PrimaryButton className='bg-primary hover:bg-primary-hover'>
                                <i className="fa-solid fa-download text-xs"></i>
                                {/* fa-lg */}
                                <p className='text-xs'>Descargar CV</p>
                            </PrimaryButton>

                            <PrimaryButton className='bg-gray-500 hover:bg-gray-500/90' onClick={() => navigate("SobreMi")}>
                                <i className="fa-solid fa-circle-info fa-lg"></i>
                                <p className='text-xs'>Más información</p>
                            </PrimaryButton>
                        </div>



                        <div className='flex space-x-3 animate-fade-in animate-delay-300'>
                            {social_media.map((social) => {
                                return (
                                    <SecondaryButton className='border-primary' key={social.name}>
                                        <a className="flex items-center gap-2" href={social.link} target="blank">
                                            <i className={`${social.icon} fa-lg`}></i>
                                            {/* fa-xl */}
                                            {social.name && <p className='hidden'>{social.name}</p>}
                                        </a>
                                    </SecondaryButton>

                                );
                            })}
                        </div>

                    </div>
                </div>
                <div className='flex w-1/3 animate-fade-in animate-delay-150'>
                    <img src={cara} alt="Yo" className='w-full rounded-2xl text-primary-button border-4 border-primary ' />
                </div>
            </article>

        </section>
    )
}




export default About