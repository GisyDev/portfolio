const TitleSection = ({ title, icon }: { title: string, icon: string }) => {
    return (
        <div className='flex gap-3 items-center mb-12'>
            <i className={`fa-solid ${icon} text-primary text-5xl`}></i>
            <h1 className='font-bold text-5xl'>{title}</h1>
        </div>
    )
}

export default TitleSection