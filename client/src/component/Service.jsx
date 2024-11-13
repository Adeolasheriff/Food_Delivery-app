import React from 'react'
import chicken from '../assets/image3.jpeg'

export default function Service() {
    return (
        <div className='py-3 px-4 md:px-6 lg:px-6'>
            <div className='container mx-auto py-[2vh]'>
                <div className='grid grid-cols-1 relative lg:grid-cols-2 items-center '>
                    <div>
                        <img src={chicken} alt="chef" className='rounded-full w-9/12 h-4/5' />
                    </div>
                    <div className='w-full md:w-32rem flex flex-col space-y-6'>
                        <div className='text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl'>
                            We are <span className='text-[#f54748]'>more</span> than
                            <span className='text-[#fdc55e]'> multiple</span> services
                        </div>
                        <div className='lg:text-lg text-[#191919] md:text-base text-sm'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsam minus. Officia,
                            corporis? Accusamus sapiente architecto praesentium perferendis ullam. Distinctio earum, magnam l
                            ibero facilis est suscipit blanditiis corporis eaque facere delectus odit sint ullam eligend
                            i dolores sequi nulla ut aspernatur illo fuga ad. Exercitationem porro repudiandae tenetur
                            officiis laboriosam odit. Dolore, ipsam ducimus? Sequi, et molestias vitae id perspiciatis officiis
                            ratione quis doloribus totam minus aliquam facilis, voluptatem libero similique!
                        </div>
                        <div className='flex gap-8 items-center'>
                            <button className='bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>
                               About us
                            </button>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
