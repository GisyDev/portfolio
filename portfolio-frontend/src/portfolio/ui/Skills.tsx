import useEmblaCarousel from 'embla-carousel-react'
import { program_languages } from '../data/skills';
import { getImage } from '../../lib/getImage';
import AutoScroll from 'embla-carousel-auto-scroll';


const Skills = () => {

    const folderImages = "language_icons"

    const [emblaRef] = useEmblaCarousel({
        loop: true,
        dragFree: true
    }, [AutoScroll({ playOnInit: true, speed: 2 })])

    return (
        <section className='w-6xl m-auto space-y-7'>
            <h1 className='font-bold text-4xl'>Mi Stack</h1>
            <div className="overflow-hidden">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y touch-pinch-zoom gap-5">
                        {
                            program_languages.map((skill) => {
                                return <div className="flex-none basis-1/5 last:mr-3 items-center rounded-lg p-3 bg-white/10 border-t-4 border-primary" key={skill.name}>
                                    <img className='w-30 m-auto p-3' src={getImage(folderImages, skill.image)} alt="" />
                                    <p className='text-2xl text-center mt-5 font-semibold'>{skill.name}</p>
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