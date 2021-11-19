import { useState } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import PagePreview from 'components/PagePreview'

export default function Movie({ result }) {
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
