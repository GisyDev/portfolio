import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/experience';
import { getImage } from '../../lib/getImage';
import { li } from 'motion/react-client';

const Experience = () => {

    const folderImage = "company_icons"
    return (
        <section className='w-5xl m-auto mt-20'>
            <div className='space-y-3'>
                <h1 className='font-bold text-4xl'>Experiencia</h1>
                <p>Trayectoria profesional</p>
            </div>

            <article>
                <VerticalTimeline layout="1-column-left">
                    {
                        experiences.map((experience) => {

                            const descriptions = experience.description.split("-")

                            console.log(descriptions);
                            return <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={experience.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', overflow: "hidden" }}
                                icon={<img src={getImage(folderImage, experience.icon)}/>}
                            >   
                                <h3 className="vertical-timeline-element-title">{experience.profile}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                                <ul className='list-disc px-3'>
                                    {
                                        descriptions.map((desc) => {
                                            return <li> {desc} </li>
                                        })
                                    }
                                </ul>
                            </VerticalTimelineElement>
                        })
                    }
                </VerticalTimeline>
            </article>
        </section>
    )
}

export default Experience