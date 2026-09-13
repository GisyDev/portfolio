import useEmblaCarousel from 'embla-carousel-react'
import { skillsSlider } from '../data/skills';
import { getImage } from '../../lib/getImage';
import AutoScroll from 'embla-carousel-auto-scroll';


const Skills = () => {

    const folderImages = "language_icons"

    const [emblaRef] = useEmblaCarousel({ 
        loop: true,
        dragFree: true
    }, [AutoScroll({ playOnInit: true, speed: 1 })])

    return (
        <section className='w-7xl m-auto space-y-7'>
            <h1 className='font-bold text-4xl'>Tecnologías</h1>
            <div className="overflow-hidden">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y touch-pinch-zoom gap-3 ">
                        {
                            skillsSlider.map((skill) => {
                                return <div className="w-min flex-none basis-1/6 last:mr-3 items-center rounded-3xl border-2 p-3" key={skill.name}>
                                    <img className='w-30 m-auto' src={getImage(folderImages, skill.image)} alt="" />
                                    <p className='text-center'>{skill.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills