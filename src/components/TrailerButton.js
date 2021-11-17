import { Fragment } from 'react'
import ReactPlayer from 'react-player'
import { Dialog, Transition } from '@headlessui/react'

export default function TrailerButton({ isOpen, setIsOpen, url }) {
    return (
        <>
            <button
                className='flex items-center justify-center px-6
                py-2.5 rounded text-xs md:text-base border-[1px]
                border-white text-[#f9f9f9] bg-black/30
                hover:bg-[#c6c6c6] hover:border-[#c6c6c6]
                transition duration-300'
                onClick={() => setIsOpen(true)}
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
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-4xl p-0
                                overflow-hidden text-left align-middle transition-all
                                transform bg-[#040714] shadow-xl rounded-lg"
                            >
                                <div className='relative pt-[56.25%] z-150'>
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${url}`}
                                        width='100%'
                                        height='100%'
                                        style={{ position: 'absolute', top: '0', left: '0', zIndex: 200 }}
                                        controls={true}
                                        playing={isOpen}
                                    />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}