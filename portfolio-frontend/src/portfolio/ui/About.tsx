import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton'
import Paragraph from '../components/Paragraph'
import AccentButton from '../components/AccentButton'
import { sectionsNav } from '../data/nav'
import { useNavigate } from 'react-router-dom';
import MiniButton from '../components/MiniButton';
import { useState } from 'react';
import PDF from "../../public/documents/CV_Gisela_Estévez_Moleiro_Desarrolladora_Fullstack.pdf"


const About = () => {

    const { name, profile, description } = about_me

    const navigate = useNavigate()


    return (
        <section className='flex items-center scroll-m-30' id={sectionsNav.about.id} data-section={sectionsNav.about.id}>
            <article className='flex flex-col-reverse gap-12 md:flex-row'>
                <div className='flex justify-between md:w-3/5 flex-row'>
                    <div className='flex flex-col space-y-5 '>
                        <div className=' space-y-3'>
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

                        <div className='flex items-center gap-3 animate-fade-in animate-delay-200 mt-2'>
                            <a href={PDF}
                                download="CV_Gisela_Estévez_Moleiro_Desarrolladora_Fullstack.pdf">
                                <PrimaryButton className='bg-primary hover:bg-primary-hover'>
                                    {/* fa-lg */}
                                    <p className=''>Descargar CV</p>
                                    <i className="fa-solid fa-download"></i>
                                </PrimaryButton>
                            </a>

                            <PrimaryButton className='group border-[1px] border-primary/60 hover:bg-primary/10 hover:border-primary ' onClick={() => navigate("SobreMi")}>
                                Más información
                                <i className="fa-solid fa-chevron-right text-primary group-hover:translate-x-0.5 text-xs transition-all"></i>
                            </PrimaryButton>
                        </div>



                        <div className='flex gap-3 flex-wrap animate-fade-in animate-delay-300 text-xs'>
                            {social_media.map((social) => {
                                return (
                                    <a

                                        className="group flex gap-2 items-center justify-center rounded-lg cursor-pointer transition-all text-zinc-300 border border-zinc-600/60 py-2 px-2 hover:border-primary hover:text-primary" href={social.link} target="blank">
                                        <i className={`${social.icon} fa-xl`}></i>
                                        {/* fa-xl */}
                                        <p className='text-zinc-300 group-hover:text-white transition-all'>{social.name}</p>

                                        {/* <i className="text-gray-500 font-extralight fa-solid fa-up-right-from-square"></i> */}
                                        {/* <i className="text-[10px]  font-extralight fa-solid fa-up-right-from-square"></i> */}
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
                            <AccentButton text={'Disponible para trabajar'}>
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