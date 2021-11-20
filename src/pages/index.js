import Head from 'next/head'

import Slider from '../components/Slider'
import Header from '../components/Header'
import Brands from 'components/Brands'
import ItemList from 'components/ItemList'

export default function Home({ popularMovies, popularShows, topMovies, topShows }) {
  return (
    <div>
      <Head>
        <title>
          Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
          Geo and Star
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className='relative min-h-full after:bg-home
        after:bg-center after:bg-cover after:bg-no-repeat 
        after:bg-fixed after:absolute after:inset-0 after:z-[-1]
        pb-10'
      >
        <Header />
        <Slider />
        <Brands />
        <ItemList
          title='Popular Movies'
          isMovie={true}
          items={popularMovies}
        />
        <ItemList
          title='Popular Shows'
          isMovie={false}
          items={popularShows}
        />
        <ItemList
          title='Top Movies'
          isMovie={true}
          items={topMovies}
        />
        <ItemList
          title='Top Shows'
          isMovie={false}
          items={topShows}
        />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const [
    popularMoviesResp,
    popularShowsResp,
    topMoviesResp,
    topShowsResp
  ] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  ])

  const [
    popularMovies,
    popularShows,
    topMovies,
    topShows
  ] = await Promise.all([
    popularMoviesResp.json(),
    popularShowsResp.json(),
    topMoviesResp.json(),
    topShowsResp.json()
  ])

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topMovies: topMovies.results,
      topShows: topShows.results
    }
  }
}