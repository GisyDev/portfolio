
export const Background = () => {
    // Se genera UNA sola vez (no en cada render): useMemo con deps []
    // guarda el resultado y lo reutiliza en renders posteriores.

    return (
        <>
            <main className=" absolute min-h-screen w-full">
                <div
                    className="relative top-30 left-50 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none z-10"
                />

                 <div
                    className="relative top-10 left-300 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
                />

                <div
                    className=" relative top-0 left-160 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[120px] pointer-events-non"
                />
            </main>
        </>
    );
};
