import { div } from 'motion/react-client'
import { about_me } from '../data/about'
import Paragraph from '../components/Paragraph'
import MiniButton from '../components/MiniButton'


type MoreInformationModalType = {
    setMoreInfoEnable: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreInformationModal = ({ setMoreInfoEnable }: MoreInformationModalType) => {

    const { profile, full_description, soft_skills, languajes, more_information } = about_me

    return (
        <div className='fixed top-0 w-screen h-screen bg-black/30 z-50'>
            <div className='fixed bg-slate-950/60 w-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-20 rounded-lg space-y-10 backdrop-blur-2xl shadow-2xl'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <h1 className='text-4xl font-bold'>Más información sobre mí</h1>
                        <button className='text-3xl cursor-pointer hover:text-primary transition-all' onClick={() => setMoreInfoEnable(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <p className='text-2xl text-primary font-semibold'>{profile}</p>
                </div>

                <div className='mt-5 space-y-5'>
                    {
                        full_description.map((paragraph) => {
                            return <Paragraph>{paragraph}</Paragraph>
                        })
                    }
                </div>
                <div>
                    <h3 className='text-2xl'>Aptitudes</h3>
                    <ul className='flex gap-5 mt-5 flex-wrap'>
                        {
                            soft_skills.map((skill) => {

                                return <li>
                                    <MiniButton>
                                        <i className={`${skill.icon}`}></i>
                                        <p>{skill.name}</p>
                                    </MiniButton>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl'>Más información</h3>
                    <ul className='flex gap-5 mt-5 flex-wrap'>
                        {
                            more_information.map((skill) => {
                                return <li className='flex items-center gap-2 bg-white/25 px-3 py-2 rounded-lg'>


                                    <i className={`${skill.icon}`}></i>
                                    <div className='flex gap-2'>
                                        <p>{skill.label}</p>
                                        <p>{skill.value}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>

        </div>

    )
}

export default MoreInformationModal