import { useState } from 'react'
import Logo from '../assets/logo.png'

export default function Navbar() {
    const [IsBurgerOpen,setBurgerOpen] = useState(false)

    return (
        <div className="bg-white h-16 py-3 px-6 flex items-center fixed w-full z-[9999]">
            <div className="flex-1 ">
                <img src={Logo} alt="logo" />
            </div>
            <div className="flex-none">
                <ul className='flex-row gap-4 font-semibold hidden sm:inline-flex'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                {!IsBurgerOpen &&
                    <div className="sm:hidden space-y-1" onClick={() => setBurgerOpen((prev) => !prev)} >
                        <span className="block h-1 w-6 bg-gray-600"></span>
                        <span className="block h-1 w-6 bg-gray-600"></span>
                        <span className="block h-1 w-6 bg-gray-600"></span>
                    </div>
                }

                <div className={`sm:hidden ${IsBurgerOpen ? "showMenuNav" : "hidden"}`}>
                    <div
                    className="absolute top-0 right-0 p-4"
                    onClick={() => setBurgerOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-primary font-medium">
                        <li className="border-gray-400 my-8 uppercase">
                            <a href="/#">Home</a>
                        </li>
                        <li className="border-gray-400 my-8 uppercase">
                            <a href="/#">About</a>
                        </li>
                        <li className="border-gray-400 my-8 uppercase">
                            <a href="/#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <style>{`
            .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: #4097DB;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            `}</style>
        </div>
    )
}