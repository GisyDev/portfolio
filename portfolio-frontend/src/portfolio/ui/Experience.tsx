import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/experience';
import { getImage } from '../../lib/getImage';
import { useState } from 'react';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { education } from '../data/education';



const Experience = () => {

    const [experieceState, setExperieceState] = useState(experiences)

    const setHidden = (id: number) => {

        const experieceModif = experieceState.map((exp) => {
            if (exp.id === id) {
                return {
                    ...exp,
                    hidden: !exp.hidden
                }
            }
            return exp
        })

        setExperieceState(experieceModif)
    }


    const folderImage = "company_icons"
    return (
        <Section title="Experiencia" icon="fa-briefcase" ref={"Experiencia"}>
            <div className='flex gap-6'>
                <article className='flex gap-8 w-full '>
                    {/* <span className='max-h-full border-l-2 bg-white border-primary '></span> */}
                    <div className='space-y-10 w-full'>

                        {
                            experieceState.map((exp) => {
                                const descriptions = exp.description.split("-")
                                return <div
                                    className='bg-white/10 p-8 rounded-2xl border-t-4 border-primary/50 space-y-8 w-full cursor-pointer hover:bg-white/15 hover:border-primary transition-all'
                                    onClick={() => setHidden(exp.id)}
                                >
                                    {/* <div className='absolute'>
                                        <div className='relative right-[90px] first:bg-primary w-4 h-4 rounded-full'></div>
                                    </div> */}
                                    <div className='flex gap-7 items-center w-full'>
                                        <img src={getImage(folderImage, exp.icon)} alt="" className='rounded-lg w-20' />
                                        <div className='flex items-center space-y-2 justify-between  w-full'>
                                            <div className='space-y-2 w-full'>
                                                <div className='flex justify-between '>
                                                    <h1 className='text-xl font-semibold'>{exp.profile}</h1>
                                                    <p className='text-sm text-mute'>{exp.date}</p>
                                                </div>
                                                <h3 className='text-lg text-mute'>{exp.company}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <Paragraph>{exp.resume}</Paragraph>
                                   
                                    {
                                        !exp.hidden && <ul className='list-disc px-3 flex flex-col gap-3 mt-4 text-mute'>
                                            {
                                                descriptions.map((desc) => {
                                                    return <li key={desc}>
                                                        <Paragraph>{desc}</Paragraph>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    }

                                    {/* <a className='cursor-pointer flex items-center gap-1' onClick={() => setHidden(exp.id)}>
                                    <p className='font-semibold'>{exp.hidden ? "Ver más" : "Ver menos"}</p>
                                    <i className={`fa-solid ${exp.hidden ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                                </a> */}

                                </div>
                            })
                        }
                    </div>

                </article>

                <article className='w-3/6'>
                    <div className='flex flex-col gap-5 '>
                        {
                            education.map((educ) => {
                                return <div className='flex gap-5 w-full items-center bg-white/10 rounded-lg p-5 '>
                                    <div className='flex flex-col w-full space-y-3'>
                                        <div className='flex justify-between'>
                                            <img className='w-10 rounded-lg' src={getImage("school_icons", educ.icon)} alt="" />
                                            <p className='text-xs text-mute'>{educ.date}</p>
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='font-semibold'>{educ.title}</h1>
                                            <h3 className='text-mute text-sm'>{educ.name}</h3>
                                        </div>
                                        <p>{educ.description}</p>
                                    </div>

                                    {/* <p className='text-mute w-full text-end'>{educ.date}</p> */}
                                </div>

                            })
                        }
                    </div>

                    <div>

                    </div>

                </article>
            </div>


        </Section>
    )
}

export default Experience