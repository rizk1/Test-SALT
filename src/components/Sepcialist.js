import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Improf from '../assets/Speed Improvement.png';
import Exhaust from '../assets/Exhaust.png';
import Accesories from '../assets/Accesories.png';
import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Specialist() {
    const swiperRef = useRef(null)
    const slider = [
        {
            title: 'Seep Improvement',
            img: Improf
        },
        {
            title: 'Exhaust',
            img: Exhaust
        },
        {
            title: 'Accesories',
            img: Accesories
        }
    ]

    return(
        <div className='bg-com-primary px-6 py-12'>
            <div className='bg-white px-8 py-6'>
                <h2 className='text-2xl font-semibold text-com-primary mb-2'>OUR SPECIALITY</h2>
                <p className='text-com-gray font-normal text-[13px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>

                <div className='mt-10 mb-4 relative sm:hidden'>
                    <div class="blur-slider"></div>
                    <Swiper
                        ref={swiperRef}
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1.5}
                        loop={true}
                        // navigation
                        centeredSlides
                        touchStartPreventDefault={false}
                        pagination={{ clickable: true }}
                        // onSlideChange={(index) => console.log(index)}
                    >
                        {slider.map(v => {
                            return(
                            <SwiperSlide>
                                <div className='w-auto text-center pb-12'>
                                    <img className='my-0 mx-auto mb-4' src={v.img} />
                                    <p className='text-[13px] md:text-[16px] font-semibold'>{v.title}</p>
                                </div>
                            </SwiperSlide>
                            )
                        })}
                        <div className='flex justify-between relative z-[999]'>
                            <button className='w-12 h-12 text-[1.5rem] text-[#3D46A2]' onClick={() => swiperRef.current.swiper.slidePrev()}>
                                <BsArrowLeft className='m-auto' />
                            </button>
                            <button className='w-12 h-12 text-[1.5rem] text-[#3D46A2]' onClick={() => swiperRef.current.swiper.slideNext()}>
                                <BsArrowRight className='m-auto' />
                            </button>
                        </div>
                    </Swiper>
                    <div class="blur-slider right-0"></div>
                </div>

                <div className="hidden sm:block mt-6">
                    <div className="grid grid-flow-col gap-4">
                        {slider.map(v => {
                            return(
                                <div className='text-center pb-12'>
                                    <img className='my-0 mx-auto mb-4' src={v.img} />
                                    <p className='text-[13px] md:text-[16px] font-semibold'>{v.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <p className='text-com-gray font-normal text-[13px] md:text-[16px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
            </div>
        </div>
    )
}