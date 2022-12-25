import Ilus from '../assets/ilus.png';

export default function CoreList() {
    return (
        <div className='bg-[#F8F8F8] pt-8 relative lg:py-20'>
            <div className='mb-8 px-10'>
                <h2 className='text-3xl lg:text-5xl font-medium text-com-primary mb-4 text-center'>Our Core Values</h2>
                <p className='text-com-gray font-normal text-[14px] md:text-[16px] lg:text-[18px] mb-6'>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.</p>
                <p className='text-com-gray font-normal text-[14px] md:text-[16px] lg:text-[18px]'>In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
            </div>

            <div className='lg:flex'>
                <div className='pl-4'>
                    <ul className='list-outside list-dash px-10'>
                        <li className='mb-8'>
                            <h4 className='mb-2 text-black text-2xl'>Dedication</h4>
                            <p className='text-com-gray font-normal text-[14px] md:text-[16px] lg:text-[18px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
                        </li>
                        <li className='mb-8'>
                            <h4 className='mb-2 text-black text-2xl'>Intellectual Honesty</h4>
                            <p className='text-com-gray font-normal text-[14px] md:text-[16px] lg:text-[18px]'>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
                        </li>
                        <li className='mb-8'>
                            <h4 className='mb-2 text-black text-2xl'>Curiosity</h4>
                            <p className='text-com-gray font-normal text-[14px] md:text-[16px] lg:text-[18px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <img src={Ilus} alt="Ilustration" />
                </div>
            </div>
        </div>
    )
}