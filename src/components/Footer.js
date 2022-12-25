import Logo from '../assets/logo-white.png'

export default function Footer() {
    return(
        <div className='bg-com-indigo px-6 py-8'>
            <img className='mb-6' src={Logo} alt="logo white" />
            <div className='bg-white py-8 px-6'>
                <div class="col-span-6 sm:col-span-3">
                    <select name="location" class="mt-1 mb-6 text-com-indigo font-bold block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>TECHNOLOGY DEPARTMENT</option>
                    </select>
                    <div className='font-primary pr-24 text-md text-com-primary'>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</div>
                </div>
            </div>
            
            <div className='mt-12 text-white font-normal leading-10 md:flex md:gap-4'>
                <a href='#'>Who We Are</a>
                <a href='#'>Our Values</a>
                <a href='#'>The Perks</a>
            </div>
        </div>
    )
}