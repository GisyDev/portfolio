import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/experience';
import { getImage } from '../../lib/getImage';

const Experience = () => {

    const folderImage = "company_icons"
    return (
        <section className='w-7xl m-auto  space-y-10 scroll-mt-32' id='Experiencia'>
            <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-briefcase text-primary text-5xl"></i>
                <h1 className='font-bold text-5xl'>Experiencia</h1>
            </div>

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
                <div className='space-y-10'>
                    {
                        experiences.map((exp) => {
                            const descriptions = exp.description.split("-")
                            return <div className='bg-white/10 p-8 rounded-2xl border-t-4 border-primary space-y-8'>
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
                                <ul className='list-disc px-3 flex flex-col gap-3 mt-4 text-mute'>
                                    {
                                        descriptions.map((desc) => {
                                            return <li className='text-xl'>{desc}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>

            </article>
        </section>
    )
}

export default Experience