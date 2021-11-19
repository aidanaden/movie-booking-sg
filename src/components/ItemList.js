import NextImage from 'next/image'
import NextLink from 'next/link'

const ItemThumbnail = ({ item, isMovie }) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    // const img = `${BASE_URL}/${item.poster_path}`
    const img = `${BASE_URL}/${item.backdrop_path}` || `${BASE_URL}/${item.poster_path}`

    return (
            <NextLink href={isMovie ? `/movie/${item.id}` : `/show/${item.id}`}>
                <a className='flex flex-col space-y-3'>
                    <div
                        className='flex min-w-[250px] min-h-[170px]
                        md:min-w-[330px] md:min-h-[210px] rounded-lg
                        overflow-hidden shadow-xl cursor-pointer
                        border-[3px] border-[#f9f9f9] border-opacity-10
                        hover:border-opacity-80 hover:shadow-2xl transform
                        hover:scale-105 transition duration-300'
                    >
                        <NextImage
                            src={img}
                            width={330}
                            height={210}
                            objectFit='cover'
                            className='rounded-lg'
                        />
                    </div>
                    <div className='max-w-[250px] md:max-w-[330px]'>
                        <div className='truncate'>
                            {item.title || item.name}
                        </div>
                        <div className='text-xs mt-1'>
                            {item.vote_average}/10 ({item.vote_count})
                        </div>
                    </div>
                </a>
            </NextLink>
    )
}

export default function ItemList({ title, isMovie, items }) {
    return (
        <div
            className='relative flex flex-col space-y-2
            mt-10 pl-8 pr-2 md:pr-8 max-w-[1400px] mx-auto'
        >
            <h2 className='font-semibold text-2xl'>
                {title}
            </h2>
            <div
                className='flex space-x-6 overflow-y-hidden
                px-2 pt-2 pb-6 -m-2 overflow-x-scroll scrollbar-hide
                md:scrollbar-default md:scrollbar-thin md:scrollbar-thumb-gray-700
                md:scrollbar-track-transparent md:scrollbar-thumb-rounded-full'
            >
                {items.map((item) => (
                    <ItemThumbnail
                        key={item.id}
                        item={item}
                        isMovie={isMovie}
                    />
                ))}
            </div>
        </div>
    )
}
