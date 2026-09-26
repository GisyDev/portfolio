import { getImage } from '../../lib/getImage'
import type { ModalLanguageType } from '../ui/Formations'

type LanguageModalType = {
    modal: ModalLanguageType
    setModal: React.Dispatch<React.SetStateAction<ModalLanguageType>>
}

const LanguageModal = ({ modal, setModal }: LanguageModalType) => {

    const { visibility, data: language } = modal

    const visibilityModal = visibility ? "opacity-100" : "opacity-0 pointer-events-none"

    console.log(language != null)

    return (
        <div className={`${visibilityModal} fixed top-0 w-screen h-screen bg-black/30 transition-all z-50`}>
            <div className={`${visibilityModal} fixed bg-slate-950/60 w-1/3  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg  backdrop-blur-lg border-2 border-primary/60`}>
                <div className='text-end px-5 pt-3'>
                    <button className='text-3xl cursor-pointer hover:text-primary transition-all'
                        onClick={() => setModal({visibility: false, data: null })}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className='px-10 pb-10'>
                    {
                        modal.data && <div className='flex flex-col gap-5'>

                            <div className='flex items-center gap-5 '>
                                <img className="w-10" src={getImage("language_icons", modal.data.image)} alt="" />
                                <h1 className='text-2xl font-bold'>{modal.data.name}</h1>
                                {/*  */}
                            </div>

                            <div>
                                <ul className='flex flex-col gap-2 text-primary-text list-disc '>
                                    {
                                        language?.description != null && language?.description.map((desc) => {
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