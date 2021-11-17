import NextImage from 'next/image'
import { useRouter } from 'next/router'
import {HomeIcon, SearchIcon, PlusIcon, StarIcon} from '@heroicons/react/solid'

const NavLink = ({ Icon, children }) => {
    return (
        <a className='header-link group'>
            <Icon className='h-4' />
            <span className='span'>{children}</span>
        </a>
    )
}

const ImgNavLink = ({ src, alt, children }) => {
    return (
        <a className='header-link group'>
            <img src={src} alt={alt} className='h-5' />
            <span className='span'>{children}</span>
        </a>
    )
}

const LoginBtn = ({ children }) => {
    return (
        <button className='ml-auto uppercase border px-4 py-1.5
        rounded font-medium tracking-wide hover:bg-white
        hover:text-black transition duration-200'>
            {children}
        </button>
    )
}

export default function Header() {
    const router = useRouter()
    return (
        <header className="sticky bg-[#040714] top-0
        z-[1000] flex items-center px-10 md:px-12 h-[72px]">
            <NextImage
                src='/images/logo.svg'
                width={80}
                height={80}
                className='cursor-pointer'
                onClick={() => router.push('/')}
            />
            <div className='hidden ml-10 lg:flex items-center space-x-6'>
                <NavLink Icon={HomeIcon}>
                    Home
                </NavLink>
                <NavLink Icon={SearchIcon}>
                    Search
                </NavLink>
                <NavLink Icon={PlusIcon}>
                    Watchlist
                </NavLink>
                <NavLink Icon={StarIcon}>
                    Originals
                </NavLink>
                <ImgNavLink src='/images/movie-icon.svg' alt='movies'>
                    Movies
                </ImgNavLink>
                <ImgNavLink src='/images/series-icon.svg' alt='series'>
                    Series
                </ImgNavLink>
            </div>
            <LoginBtn>
                Login
            </LoginBtn>
        </header>
    )
}
