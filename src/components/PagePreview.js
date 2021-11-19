export default function PagePreview({ bgImg, isOpen, setIsOpen, result, trailerUrl }) {
    return (
        <section className='relative'>
            <CoverImage
                img={bgImg}
            />
            <div
                className='absolute inset-y-28 md:inset-y-auto
                    md:bottom-10 inset-x-4 md:inset-x-12 space-y-6
                    z-50'
            >
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                    {result.title || result.name}
                </h1>
                <div className='flex items-center space-x-3 md:space-x-5'>
                    <PlayButton />
                    <TrailerButton
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        url={trailerUrl}
                    />
                    <AddButton />
                </div>
                <p className='text-xs md:text-sm'>
                    {result.release_date || result.first_air_date} •
                    {" "}
                    {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •
                    {" "}
                    {result.genres.map((genre) => genre.name + " ")}
                    {" "}
                </p>
                <h4 className='text-sm md:text-lg max-w-4xl'>
                    {result.overview}
                </h4>
            </div>
        </section>
    )
}