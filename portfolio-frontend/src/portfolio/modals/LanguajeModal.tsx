import { useNavigate, useParams } from 'react-router-dom'
import { languages } from '../data/skills';
import { getImage } from '../../lib/getImage'



const LanguageModal = () => {

    const navigate = useNavigate()
    const { lang: langParam } = useParams()

    const languageFind = languages.find((lang) => lang.name === langParam);


    return (
        <div className='fixed top-0 w-screen h-screen bg-black/30'>
            <div className='fixed bg-slate-950/60 w-1/2  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  rounded-lg  backdrop-blur-2xl shadow-2xl'>
                <div className='text-end px-5 pt-5'>
                    <button className='text-3xl cursor-pointer hover:text-primary transition-all'
                        onClick={(() => navigate("/portfolio"))}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className='pb-20 px-20'>
                    {
                        languageFind && <div className='flex flex-col gap-10'>

                            <div className='flex items-center gap-5 '>
                                <img className="w-30" src={getImage("language_icons", languageFind?.image)} alt="" />
                                <h1 className='text-5xl font-bold'>{languageFind.name}</h1>
                                {/*  */}
                            </div>

                            <div>
                                <ul className='flex flex-col gap-3 text-xl text-mute'>
                                    {
                                        languageFind.description.map((desc) => {
                                            return <li key={desc}>
                                                {desc}
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    }
                </div>

            </div>

        </div>

    )
}

export default LanguageModal