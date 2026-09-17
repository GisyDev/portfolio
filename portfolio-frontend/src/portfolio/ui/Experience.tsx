import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/experience';
import { getImage } from '../../lib/getImage';
import { useState } from 'react';
import TitleSection from '../components/TitleSection';



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
        <section className='w-7xl m-auto scroll-mt-32' id='Experiencia'>
            <TitleSection title={"Experiencia"} icon={"fa-briefcase"}/>

            <article className='w-full flex gap-8'>

                {/* <VerticalTimeline layout="1-column-left">
                    {
                        experiences.map((experience) => {

                            const descriptions = experience.description.split("-")

                            console.log(descriptions);
                            return <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={experience.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', overflow: "hidden",  }}
                                icon={<img src={getImage(folderImage, experience.icon)}/>}
                            >   
                                <h3 className="vertical-timeline-element-title text-2xl font-semibold">{experience.profile}</h3>
                                <h4 className="vertical-timeline-element-subtitle text-lg">{experience.company}</h4>
                                <ul className='list-disc px-3 flex flex-col gap-2 mt-4'>
                                    {
                                        descriptions.map((desc) => {
                                            return <li> {desc} </li>
                                        })
                                    }
                                </ul>
                            </VerticalTimelineElement>
                        })
                    }
                </VerticalTimeline> */}


                <span className='max-h-full border-l-2 bg-white border-primary '></span>

                <div className='space-y-10 w-full'>

                    {

                        experieceState.map((exp) => {
                            const descriptions = exp.description.split("-")
                            return <div className='bg-white/10 p-8 rounded-2xl border-t-4 border-primary space-y-8 w-full'>
                                <div className='absolute'>
                                    <div className='relative right-18 bg-primary w-3 h-3 rounded-full'></div>
                                </div>
                                <div className='flex gap-7 items-center w-full'>
                                    <img src={getImage(folderImage, exp.icon)} alt="" className='rounded-lg w-20' />
                                    <div className='flex items-center space-y-2 justify-between  w-full'>
                                        <div className='space-y-2 w-full'>
                                            <div className='flex justify-between '>
                                                <h1 className='text-3xl font-semibold'>{exp.profile}</h1>
                                                <p className='font-semibold'>{exp.date}</p>
                                            </div>
                                            <h3 className='text-lg text-mute'>{exp.company}</h3>
                                        </div>
                                    </div>
                                </div>
                                {
                                    !exp.hidden && <ul className='list-disc px-3 flex flex-col gap-3 mt-4 text-mute'>
                                        {
                                            descriptions.map((desc) => {
                                                return <li key={desc} className='text-xl'>{desc}</li>
                                            })
                                        }
                                    </ul>
                                }

                                <a className='cursor-pointer flex items-center gap-3' onClick={() => setHidden(exp.id)}>
                                    <p className='font-semibold'>{exp.hidden ? "Ver más" : "Ver menos"}</p>
                                    <i className={`fa-solid ${exp.hidden ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                                </a>
                            </div>
                        })
                    }
                </div>

            </article>
        </section>
    )
}

export default Experience