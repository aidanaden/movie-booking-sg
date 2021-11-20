import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import NextImage from 'next/image'

const CarouselImage = ({ desktopImg, mobileImg, alt }) => {
    return (
        <div>
            <div className='hidden md:block'>
                <img
                    loading='lazy'
                    src={desktopImg}
                    alt={alt}
                />
            </div>
            {/* <div className='md:hidden'>
                <img
                    loading='lazy'
                    src={mobileImg}
                    alt={alt}
                />
            </div> */}
        </div>
    )
}

export default function Slider() {
    return (
        <section className='relative shadow-2xl mx-auto max-w-screen-2xl'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <CarouselImage desktopImg='/images/slider-1.jpg' alt='slider-1' />
                <CarouselImage desktopImg='/images/slider-2.jpg' alt='slider-2' />
                <CarouselImage desktopImg='/images/slider-3.jpg' alt='slider-3' />
                <CarouselImage desktopImg='/images/slider-4.jpeg' alt='slider-4' />
            </Carousel>
        </section>
    )
}
