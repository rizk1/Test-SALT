import ImgHero from '../assets/hero-imgs.png';
import Bg from '../assets/Background.png';
import Down from '../assets/down.png';

export default function Hero() {
    return (
        <>
        <div className='pt-16 lg:hidden'>
            <img src={ImgHero} alt="hero" />
            <div className='min-h-[21rem] bg-cover bg-center z-[100] mt-[-4rem] relative px-10 pt-24' style={{backgroundImage: `url(${Bg})`}}>
                <h2 className='text-3xl font-medium text-white mb-2'>Discover <br />Your Wonder</h2>
                <p className='text-white font-normal text-[14px] lg:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='text-center'>
                <button className='w-12 h-12 bg-white drop-shadow-md rounded-full relative z-[1000] bottom-6'>
                    <img className='m-auto' src={Down} />
                </button>
            </div>
        </div>
        <div className='pt-16 hidden lg:block'>
            <div className='flex items-center h-screen bg-com-primary'>
                <img className='w-1/2 h-full object-cover' src={ImgHero} alt="hero" />
                <div className='bg-cover bg-center z-[100] mt-[-4rem] relative pl-10 pt-24 pr-20'>
                    <h2 className='text-6xl font-medium text-white mb-2'>Discover <br />Your Wonder</h2>
                    <p className='text-white font-normal text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className='text-center'>
                <button className='w-12 h-12 bg-white drop-shadow-md rounded-full relative z-[1000] bottom-6'>
                    <img className='m-auto' src={Down} />
                </button>
            </div>
        </div>
        </>
    )
}