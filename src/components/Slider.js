import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Slider() {
    const [IndexSlide, setIndexSlide] = useState(1)
    const swiperRef = useRef(null)

    const slider = [
        {
            title : 'Who we are',
            subTitle: 'Technology Company',
            text: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            title : 'What we do',
            subTitle: 'Professional Brand Management',
            text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
            title : 'How we do',
            subTitle: 'Strategize, Design, Collaborate',
            text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
        },
    ]

    return(
        <div className='px-10 pb-6 pt-2 md:pt-12 pb-16 lg:py-20'>
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                allowTouchMove={false}
                onSlideChange={(index) => setIndexSlide(index.snapIndex + 1)}
            >
                {slider.map(val => {
                    return (
                    <SwiperSlide>
                        <div className='lg:mr-48'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium text-com-primary mb-2'>{val.title}</h2>
                            <p className='text-black font-medium text-[14px] md:text-[20px] lg:text-[22px] mb-1'>{val.subTitle}</p>
                            <p className='text-com-gray font-normal text-[12px] md:text-[16px] lg:text-[18px]'>{val.text}</p>
                        </div>
                    </SwiperSlide>
                    )
                })}
                <div className='flex mt-6 items-center'>
                    <div className='text-xl font-bold font-primary flex-1'>
                        <h4>
                            0{IndexSlide} <span className='text-[#C0C0C0]'>/</span> <span className='text-[#C0C0C0] text-sm font-semibold'>03</span>
                        </h4>
                    </div>
                    <div className='flex-none'>
                        <button className='w-12 h-12 bg-blue-100 text-[1.5rem] text-white bg-[#1BA0E1] disabled:bg-[#F1F1F1] disabled:text-[#B6B6B6]' disabled={IndexSlide === 1 && true} onClick={() => swiperRef.current.swiper.slidePrev()}>
                            <BsArrowLeft className='m-auto' />
                        </button>
                        <button className='w-12 h-12 bg-blue-100 text-[1.5rem] text-white bg-[#1BA0E1] disabled:bg-[#F1F1F1] disabled:text-[#B6B6B6]' disabled={IndexSlide === 3 && true} onClick={() => swiperRef.current.swiper.slideNext()}>
                            <BsArrowRight className='m-auto' />
                        </button>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}