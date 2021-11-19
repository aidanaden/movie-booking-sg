import { useState } from 'react'
import Head from 'next/head'
import NextImage from 'next/image'
import { PlusIcon } from '@heroicons/react/solid'
import Header from 'components/Header'
import TrailerButton from 'components/TrailerButton'
import PagePreview from 'components/PagePreview'

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

export default function Movie({ result }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const img = `${BASE_URL}/${result.backdrop_path}` || `${BASE_URL}/${result.poster_path}`

    const [isOpen, setIsOpen] = useState(false)

    const index = result.videos.results.findIndex(
        (element) => element.type === 'Trailer'
    )

    return (
        <div>
            <Head>
                <title>
                    {result.title || result.name}
                </title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <PagePreview
                bgImg={img}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                result={result}
                trailerUrl={result.videos?.results[index]?.key}
            />
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id

    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`)
    .then((response) => response.json());

    return {
        props: {
            result: request
        }
    }
}
