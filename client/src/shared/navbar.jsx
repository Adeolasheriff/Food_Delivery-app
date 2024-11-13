import React, { useState } from 'react'
import logo from '../assets/food-logo.png'
import { TiThMenu } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-md'>
            <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 container'>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="food logo" className='h-14 cursor-pointer hover:scale-125' />
                    <div className='lg:flex hidden gap-8 items-center'>
                        <a href="" className='text-[#191919] text-xl font-semibold hover:text-red-500'>Today Special</a>
                        <a href="" className='text-[#191919] text-xl font-semibold hover:text-red-500'>Why Special</a>
                        <a href="" className='text-[#191919] text-xl font-semibold hover:text-red-500'>Our menu</a>
                        <a href="" className='text-[#191919] text-xl font-semibold hover:text-red-500'>Add food</a>
                        <a href="" className='text-[#191919] text-xl font-semibold hover:text-red-500'>Popular food</a>
                        <button className='bg-red-900 active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-semibold text-white'>
                            Login
                        </button>
                    </div>
                    <div className='block lg:hidden z-40' onClick={handleNav} >
                        {
                            nav ? (<RxCross2 size={25} className='text-[#191919] cursor-pointer' />)
                                :
                                (<TiThMenu className='text-red-500 cursor-pointer' size={25} />)

                        }
                    </div>
                    <div className={`lg:hidden absolute sm:w-1/3 md:w-1/4 sm:h-2/5  px-4 py-2 text-xs font-medium ease-in shadow-sm backdrop-blur-md top-20 duration-500 ${nav ?
                        "right-0" : "right-[-100%] pt-24"
                        } `}>

                            <div className='flex flex-col gap-8 relative bg-white/80 py-8 px-3'>
                                <a href="" className='text-[#1919191] text-xl font-semibold hover:text-red-500'>Today specials</a>
                                <a href="" className='text-[#1919191] text-xl font-semibold hover:text-red-500'>Why specials</a>
                                <a href="" className='text-[#1919191] text-xl font-semibold hover:text-red-500'>Our Menu</a>
                                <a href="" className='text-[#1919191] text-xl font-semibold hover:text-red-500'>Add food</a>
                                <a href="" className='text-[#1919191] text-xl font-semibold hover:text-red-500'>Popular food</a>
                                <button className='bg-red-900 active:scale-90 w-1/2 transition duration-100 transform hover:shadow-xl shadow-md rounded-full pl-4 pr-16 py-2 text-xl font-semibold text-white'>Login</button>

                            </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
