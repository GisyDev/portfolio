

const LanguageCard = ({ skill }: { skill: {} }) => {

    console.log(`/images/${skill.image}`);

    return (
        <div
            key={skill.name}
            className="me-3 transform-gpu grow-0 shrink-0 min-w-0 flex items-center justify-center gap-3 rounded-full px-4 py-2"
            style={{
                background: `color-mix(in srgb, ${skill.color} 25%, #000)`,
            }}
        >
            <img
                className="size-4 object-contain"
                src={`/images/${skill.image}`}
                alt=""
            />
            <p className="text-xs font-medium text-title-text whitespace-nowrap">
                {skill.name}
            </p>
        </div>
    )
}

export default LanguageCard