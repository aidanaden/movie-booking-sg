import { useState } from 'react'
import Head from 'next/head'
import NextImage from 'next/image'

import Header from 'components/Header'
import { PlusIcon } from '@heroicons/react/solid'

const CoverImage = ({ img }) => {
    return (
        <div className='relative min-h-[calc(100vh-72px)]'>
            <NextImage
                src={img}
                layout='fill'
                objectFit='cover'
            />
        </div>
    )
}

const PlayButton = () => {
    return (
        <button
            className='flex items-center justify-center
            px-6 py-2.5 rounded text-xs md:text-base border-[1px]
            text-black bg-[#f9f9f9] hover:bg-[#c6c6c6]
            transition duration-300 hover:border-[#c6c6c6]'
        >
            <img
                src='/images/play-icon-black.svg'
                alt=''
                className='h-6 md:h-8'
            />
            <span className='uppercase font-medium tracking-wide'>
                Play
            </span>
        </button>
    )
}

const TrailerButton = () => {
    return (
        <button
            className='flex items-center justify-center px-6
            py-2.5 rounded text-xs md:text-base border-[1px]
            border-white text-[#f9f9f9] bg-black/30
            hover:bg-[#c6c6c6] hover:border-[#c6c6c6]
            transition duration-300'
        >
            <img
                src='/images/play-icon-white.svg'
                alt=''
                className='h-6 md:h-8'
            />
            <span className='uppercase font-medium tracking-wide'>
                Trailer
            </span>
        </button>
    )
}

const AddButton = () => {
    return (
        <div
            className='w-11 h-11 rounded-full border-[1px]
            border-white flex items-center justify-center
            bg-black/60 cursor-pointer hover:bg-[#c6c6c6]
            hover:border-[#c6c6c6] transition duration-300'
        >
            <PlusIcon className='h-6' />
        </div>
    )
}

export default function Show({ result }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const img = `${BASE_URL}/${result.backdrop_path}` || `${BASE_URL}/${result.poster_path}`

    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <div>
            <Head>
                <title>
                    {result.title || result.name}
                </title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <section className='relative'>
                <CoverImage
                    img={img}
                />
                <div
                    className='absolute inset-y-28 md:inset-y-auto
                    md:bottom-10 inset-x-4 md:inset-x-12 space-y-6
                    z-50'
                >
                    <h1
                        className='text-3xl sm:text-4xl md:text-5xl
                        font-bold'    
                    >
                        {result.title || result.name}
                    </h1>
                    <div className='flex items-center space-x-3 md:space-x-5'>
                        <PlayButton />
                        <TrailerButton />
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
                {/* BG OVERLAY */}
                {showPlayer && (
                    <div className='absolute inset-0 bg-black/50 h-full w-full' />
                )}
                
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id

    const request = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`)
    .then((response) => response.json());

    return {
        props: {
            result: request
        }
    }
}