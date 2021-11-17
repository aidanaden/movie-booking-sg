import NextImage from 'next/image'

const BrandItem = ({ img, video }) => {
    return (
        <div className='brand group'>
            <NextImage
                src={img}
                layout='fill'
                objectFit='cover'
            />
            <video
                className='hidden group-hover:inline rounded-lg object-cover'
                autoPlay
                loop
                playsInline
            >
                <source src={video} type='video/mp4' />
            </video>
        </div>
    )
}

export default function Brands() {
    return (
        <section
            className='flex flex-col md:flex-row justify-center
            items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto'
        >
            <BrandItem img='/images/disney.png' video='videos/disney.mp4' />
            <BrandItem img='/images/pixar.png' video='videos/pixar.mp4' />
            <BrandItem img='/images/marvel.png' video='videos/marvel.mp4' />
            <BrandItem img='/images/starwars.png' video='videos/star-wars.mp4' />
            <BrandItem img='/images/national-geographic.png' video='videos/national-geographic.mp4' />
        </section>
    )
}
