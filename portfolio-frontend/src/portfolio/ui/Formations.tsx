import { getImage } from '../../lib/getImage';
import MiniButton from '../components/MiniButton';
import TitleSection from '../components/TitleSection';
import { education, languajes } from '../data/education';
import { sectionsNav } from '../data/nav';
import { program_languages, type programLanguagesType } from '../data/skills';
import HorizontalCard from '../components/HorizontalCard';
import LanguageModal from '../modals/LanguajeModal';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

export type ModalLanguageType = {
    data: programLanguagesType | null
    visibility: boolean
}

const Education = () => {

    // const folderImages = "language_icons"

    // const [emblaRef] = useEmblaCarousel({
    //     loop: true,
    //     align: 'start',
    //     dragFree: true,
    //     containScroll: 'trimSnaps',
    //     slidesToScroll: 1,

    // }, [AutoScroll({ playOnInit: true, speed: 1 })])

    // const folderImage = "school_icons"

    // // const [languageModal, setLanguageModal] = useState(
    // //     {
    // //         data: {},
    // //         visibility: false
    // //     }
    // // )

    // // const setModalLanguage = (language: programLanguagesType) => {
    // //     setLanguageModal({
    // //         data: language,
    // //         visibility: true
    // //     })
    // // }

    // return (
    //     <>
    //         <section className="max-w-max scroll-m-30 flex flex-col gap-20 opacity-0 " id={sectionsNav.education.id} data-section={sectionsNav.education.id}>
    //             <article className='m-auto w-full scroll-mt-32'>
    //                 <TitleSection title={"Tecnologías"} icon={"fa-code"} />
    //                 {/* <div className='grid xs:grid-cols-5 sm:grid-cols-5 gap-4 flex-wrap w-full'>
    //                     {
    //                         program_languages.map((skill) => {
    //                             return <div className=' p-3 flex items-center flex-col gap-3  bg-gray-600/20 basis-[12%] rounded-2xl hover:bg-gray-600/40'>
    //                                 <img className='w-8' src={getImage("language_icons", skill.image)} alt="" />
    //                                 <p className='text-xs text-mute'>{skill.name}</p>
    //                             </div>

    //                         })
    //                     }
    //                 </div> */}

    //                 <div className="overflow-hidden">
    //                     <div
    //                         className="overflow-hidden mask-[linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)]"
    //                         ref={emblaRef}
    //                     >
    //                         <div className="flex touch-pan-y touch-pinch-zoom">
    //                             {program_languages.map((skill) => (
    //                                 <div
    //                                     key={skill.name}
    //                                     className="me-3 transform-gpu grow-0 shrink-0 min-w-0 flex items-center justify-center gap-3 rounded-full px-4 py-2"
    //                                     style={{
    //                                         background: `color-mix(in srgb, ${skill.color} 25%, #000)`,
    //                                     }}
    //                                 >
    //                                     <img
    //                                         className="size-4 object-contain"
    //                                         src={getImage(folderImages, skill.image)}
    //                                         alt=""
    //                                     />
    //                                     <p className="text-xs font-medium text-white whitespace-nowrap">
    //                                         {skill.name}
    //                                     </p>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>
    //                 </div>

    //             </article>
    //         </section>

    //         {/* <LanguageModal modal={languageModal} setModal={setLanguageModal} /> */}
    //     </>
    // )
}

export default Education