

const LanguageCard = ({ skill }: { skill: any }) => {



    return (
        <div
            key={skill.name}
            className={`me-3 transform-gpu grow-0 shrink-0 min-w-0 flex items-center justify-center gap-2 rounded-full px-3 py-2`}
            style={{
                background: `color-mix(in srgb, ${skill.color} 15%, var(--theme-skill-bg-mix))`,
            }}
        >
            <img
                className="size-4 object-contain"
                src={`/images/${skill.image}`}
                alt=""
            />
            <p
                className="text-xs font-medium whitespace-nowrap"
                style={{ color: "var(--theme-title-text)" }}
            >
                {skill.name}
            </p>
        </div>
    )
}

export default LanguageCard
