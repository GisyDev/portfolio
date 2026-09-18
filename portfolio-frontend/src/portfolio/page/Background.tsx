
export const Background = () => {
    // Se genera UNA sola vez (no en cada render): useMemo con deps []
    // guarda el resultado y lo reutiliza en renders posteriores.

    return (
        <>
            <main className="w-screen absolute inset-0 pointer-events-none ">
                <div
                    className="relative top-30 left-50 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] bg-secondary/15 rounded-full blur-[120px] "
                />

                 <div
                    className="relative top-10 left-400 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-primary/15 rounded-full blur-[120px] "
                />

                <div
                    className=" relative top-0 left-160 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/15 rounded-full blur-[120px] "
                />

                <div
                    className=" relative top-0 left-50 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-secondary/15 rounded-full blur-[120px] "
                />
            </main>
        </>
    );
};
