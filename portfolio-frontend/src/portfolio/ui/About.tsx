import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton'
import Paragraph from '../components/Paragraph'
import AccentButton from '../components/AccentButton'
import { sectionsNav } from '../data/nav'
import { useNavigate } from 'react-router-dom';

const About = () => {

    const { name, profile, description } = about_me

    const navigate = useNavigate()

    return (
        <section className='flex items-center scroll-m-30' id={sectionsNav.about.id} data-section={sectionsNav.about.id}>
            <article className='flex flex-col-reverse gap-12 md:flex-row'>
                <div className='flex justify-between md:w-3/5 flex-row'>
                    <div className='flex flex-col space-y-5 '>
                        <div className=' space-y-2'>
                            {/* <AccentButton className='bg-secondary-background text-primary/90 border-primary/50'>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                                </span>
                                <p>Disponible para trabajar - Santa Cruz de Tenerife</p>
                            </AccentButton> */}
                            <div className='space-y-2'>
                                <h1 className='text-primary-text animate-fade-in animate-delay-25 text-sm flex flex-col space-y-2'>
                                    <div className='flex gap-1 text-sm sm:text-base'>
                                        <p className='text-primary'>{">"}</p>
                                        <p className='text-primary-text sm:text-md'>{"Hola, soy"}</p>
                                    </div>
                                    <span className='text-white font-bold text-3xl sm:text-4xl md:text-4xl'> {name}</span>
                                </h1>
                                <h3 className='animate-fade-in animate-delay-85 flex gap-5 text-lg text-primary font-semibold sm:text-xl'>{profile}</h3>
                            </div>

                            <Paragraph className='animate-fade-in animate-delay-120'> {description} </Paragraph>
                        </div>

                        <div className='flex items-center gap-3 animate-fade-in animate-delay-200 mt-4'>
                            <PrimaryButton className='bg-primary hover:bg-primary-hover'>
                                <i className="fa-solid fa-download"></i>
                                {/* fa-lg */}
                                <p className=''>Descargar CV</p>
                            </PrimaryButton>

                            <PrimaryButton className='border-[1px] border-primary/50 hover:border-primary' onClick={() => navigate("SobreMi")}>
                                <p className=''>Más información</p>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </PrimaryButton>
                        </div>



                        <div className='flex gap-3 flex-wrap animate-fade-in animate-delay-300 text-sm'>
                            {social_media.map((social) => {
                                return (
                                    <a className="flex gap-2 items-center p-2 rounded-full  border-2 border-gray/90 hover:border-primary/60 cursor-pointer transition-all " href={social.link} target="blank">
                                        <i className={`${social.icon} fa-lg`}></i>
                                        {/* fa-xl */}
                                        {social.name}
                                    </a>

                                );
                            })}
                        </div>

                    </div>
                </div>
                <div className='flex animate-fade-in animate-delay-150 '>
                    <div className='flex md:flex-col justify-center gap-4 items-center sm:gap-8'>
                        <img src={cara} alt="Yo" className='rounded-full text-primary-button ring-offset-2 ring-offset-black ring-2 ring-primary object-cover size-28 sm:size-35 md:size-56' />
                        <div>
                            <button className="group flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white border border-primary/50 bg-primary/10 backdrop-blur-sm  hover:border-primary transition-all duration-300 ">
                                <span className="relative flex size-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-95"></span>
                                    <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
                                </span>
                                <p className="font-medium tracking-wide">Disponible para trabajar</p>
                            </button>
                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}




export default About