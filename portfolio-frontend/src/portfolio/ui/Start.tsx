import { about_me, social_media } from '../data/about'
import PrimaryButton from '../components/PrimaryButton';
import Paragraph from '../components/Paragraph'
import AccentButton from '../components/AccentButton'
import { sectionsNav } from '../data/nav'
import { useNavigate } from 'react-router-dom';
import PDF from "../../../public/documents/CV_Gisela_Estévez_Moleiro_Desarrolladora_Fullstack.pdf"


const About = () => {

    const { name, surname, profile, description } = about_me

    const navigate = useNavigate()

    return (
        <section className='flex items-center scroll-m-30' id={sectionsNav.inicio.id} data-section={sectionsNav.inicio.id}>
            <article className='flex flex-col-reverse justify-between  md:flex-row '>
                <div className='flex justify-between md:w-3/5 flex-row'>
                    <div className='flex flex-col space-y-5 items-center justify-center'>
                        <div className='space-y-3'>
                            <div className='space-y-2'>
                                <h1 className='animate-fade-in animate-delay-25 text-sm flex flex-col space-y-2'>
                                    <div className='flex flex-col font-bold text-3xl sm:text-5xl md:text-5xl/tight' style={{ color: "var(--theme-title-text)" }}>
                                        <span className=''> {name} {surname}</span>
                                    </div>
                                </h1>
                                <h3 className='animate-fade-in animate-delay-85 flex gap-5 text-2xl text-primary font-semibold sm:text-2xl'>{profile}</h3>
                            </div>

                            <Paragraph className='animate-fade-in animate-delay-120'> {description} </Paragraph>
                        </div>

                        <div className='flex items-center gap-3 animate-fade-in animate-delay-200 mt-2'>
                            <a href={PDF}
                                download="CV_Gisela_Estévez_Moleiro_Desarrolladora_Fullstack.pdf">
                                <PrimaryButton className='bg-primary hover:bg-primary-hover text-white'>
                                    <p className=''>Descargar CV</p>
                                    <i className="fa-solid fa-download"></i>
                                </PrimaryButton>
                            </a>

                            {/* <PrimaryButton
                                className='group border-[1px] border-primary/60 hover:bg-primary/10 hover:border-primary'
                                style={{ color: "var(--theme-primary-text)" }}
                                onClick={() => navigate("SobreMi")}
                            >
                                Más información
                                <i className="fa-solid fa-arrow-down-long text-primary group-hover:translate-x-0.5 text-xs transition-all"></i>
                            </PrimaryButton> */}

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
                </div>
                <div className='flex animate-fade-in animate-delay-150 '>
                    <div className='flex md:flex-col justify-center gap-4 items-center sm:gap-8'>
                        <img
                            src={"/images/yo1.png"}
                            alt="Yo"
                            className='rounded-full text-primary-button object-cover size-36 sm:size-42 md:size-64'
                            style={{
                                outline: "4px solid var(--color-primary)",
                                outlineOffset: "2px",
                            }}
                        />
                        <div>
                            <AccentButton >
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

        </section>
    )
}




export default About
