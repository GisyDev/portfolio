import { about_me, social_media } from '../data/about'
import PrimaryButton from '../components/PrimaryButton';
import Paragraph from '../components/Paragraph'
import AccentButton from '../components/AccentButton'
import { sectionsNav } from '../data/nav'
import PDF from "../../../public/documents/CV_Gisela_Estévez_Moleiro_Desarrolladora_Fullstack.pdf"
import StatusBarProfile from '../components/AboutMe/StatusBarProfile';
import { assetUrl } from '../../lib/assetUrl';


const About = () => {

    const { name, surname, profile, description } = about_me

    return (
        <section className='mx-auto relative flex flex-col items-center scroll-m-30 w-full px-x' id={sectionsNav.inicio.id} data-section={sectionsNav.inicio.id}>
            <article className='flex flex-col-reverse justify-center md:flex-row md:max-w-page rounded-lg px-5 py-5'
                style={{
                    backgroundColor: "var(--theme-bg-card)",
                    borderColor: "var(--theme-border-card)",
                }}
            >
                <div className='flex flex-col space-y-5 md:w-3/5 justify-center '>
                    <div className='space-y-3 w-full lg:w-4/5'>
                        <div className='space-y-2'>
                            <h1 className='animate-fade-in animate-delay-25 text-sm flex flex-col space-y-2'>
                                <div className='flex flex-col font-bold text-3xl sm:text-4xl lg:text-5xl' style={{ color: "var(--theme-title-text)" }}>
                                    <span className=''> {name} {surname}</span>
                                </div>
                            </h1>
                            <h3 className='animate-fade-in animate-delay-85 text-xl md:text-2xl text-primary font-semibold '>{profile}</h3>
                        </div>

                        <Paragraph className='animate-fade-in animate-delay-120'> {description} </Paragraph>
                    </div>

                    <div className='flex flex-col gap-3 animate-fade-in animate-delay-200 mt-2 w-full'>

                        <div className='flex gap-3'>
                            <a href={PDF}
                                download="CV_Gisela_Estévez_Moleiro_Desarrolladora_Fullstack.pdf">
                                <PrimaryButton className='bg-primary hover:bg-primary-hover text-white'>
                                    <i className="fa-solid fa-download"></i>
                                    <p className=''>Descargar CV</p>
                                </PrimaryButton>
                            </a>

                            <PrimaryButton className='bg-secondary hover:bg-secondary-hover text-white' 
                            onClick={() => document.getElementById(sectionsNav.projects.id)?.scrollIntoView({behavior: 'smooth'})}
                            >
                                <i className={`fa-solid ${sectionsNav.projects.icon}`}></i>
                                <p className=''>Proyectos</p>
                            </PrimaryButton>
                        </div>


                        <div className='flex gap-3 flex-wrap animate-fade-in animate-delay-300 text-xs'>
                            {social_media.map((social) => {
                                return (
                                    <a
                                        key={social.name}
                                        className="group flex gap-2 items-center justify-center rounded-lg cursor-pointer transition-all border py-2 px-2 hover:border-primary! hover:text-primary!"
                                        style={{
                                            color: "var(--theme-social-text)",
                                            borderColor: "var(--theme-social-border)",
                                        }}
                                        href={social.link}
                                        target="blank"
                                    >
                                        <i className={`${social.icon} fa-xl`}></i>
                                        <p className='transition-all' >{social.name}</p>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex animate-fade-in animate-delay-150 '>
                    <div className='flex md:flex-col justify-center gap-6 items-center sm:gap-8 px-3 py-3'>
                        <img
                            src={assetUrl("/images/yo2.jpeg")}
                            alt="Yo"
                            className='rounded-full text-primary-button object-cover size-32 sm:size-42 md:size-60 lg:size-64 xl:size-72 mb-5 lg:mb-0'
                            style={{
                                outline: "4px solid var(--color-primary)",
                                outlineOffset: "5px",
                            }}
                        />
                        <div className=''>
                            <AccentButton>
                                <p className="font-medium tracking-wide">{"Disponible para trabajar"}</p>
                                <span className="relative flex size-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-95"></span>
                                    <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
                                </span>
                            </AccentButton>
                        </div>
                    </div>
                </div>
            </article>

            <StatusBarProfile />

        </section>
    )
}




export default About
