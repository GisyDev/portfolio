import HorizontalCard from './HorizontalCard'

type TimelineSectionType = {
    data: {
        title: string,
        subtitle: string,
        date?: string,
        resume?: string,
        description?: string[]
        hidden?: boolean,
        image: string
    },
    index?: number,
    folderImage: string
}


const TimelineSection = ({ data, index }: TimelineSectionType) => {

    return (
        <div>
            <div className='absolute'>
                <div className={`${index === 0 && "animate-ping"} relative right-[38px] top-[46px] bg-primary w-3 h-3 rounded-full`}></div>
                <div className={`absolute right-[38px] top-[46px] bg-primary w-3 h-3 rounded-full`}></div>
            </div>
            <HorizontalCard>
                <div className='flex gap-5 items-center w-full'>
                    <img src={`/images/${data.image}`} alt="" className='rounded-lg w-14' />
                    <div className='flex items-center space-y-1 justify-between  w-full'>
                        <div className='w-full space-y-1'>
                            <div className='flex gap-1 flex-col-reverse justify-between sm:flex-row'>
                                <div>
                                    <h1 className='text-sm font-semibold '>{data.title}</h1>
                                    <h3 className='text-xs sm:text-sm'>{data.subtitle}</h3>
                                </div>

                                {data.date && <p className='text-xs font-semibold text-primary-text'>{data.date}</p>}

                            </div>

                        </div>
                    </div>
                </div>

                {/* {
                    data.description 
                    && <Paragraph className='text-xs'>{data.resume}</Paragraph>
                    
                } */}

                {
                    data.description && <div>
                        <div className="overflow-hidden pl-5 ">
                            <ul className="list-disc  text-primary-text space-y-3 mb-2">
                                {data.description?.map((desc) => (
                                    <li key={desc} className=''>
                                        <p className="text-sm">{desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }


            </HorizontalCard>
        </div>
    )
}

export default TimelineSection