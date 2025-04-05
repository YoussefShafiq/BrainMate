import React from 'react'
import logo from '../../assets/images/brainmate white.png'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
    return <>
        <div className="bg-primarybg pb-16 p-5 bg-bg-pattern bg-cover">
            {/* navbar */}
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-wrap justify-center items-center gap-1">
                    <img src={logo} className='w-12 md:w-14' alt="logo" />
                    <h1 className='text-lg md:text-2xl font-semibold text-white'>BrainMate</h1>
                </div>
                <div className="flex items-stretch gap-2 md:gap-5">
                    <div onClick={() => { window.location.href = 'https://brainmate.vercel.app/login' }} className="bg-[#f25287] text-white py-2 px-4 rounded-lg cursor-pointer">Login</div>
                    <div onClick={() => { window.location.href = 'https://brainmate.vercel.app/signup' }} className="bg-primary text-white py-2 px-4 rounded-lg cursor-pointer">SignUp</div>
                </div>
            </div>

            {/* hero */}
            <div className="py-20">
                <div className="flex gap-5 flex-col justify-center items-center min-h-[40vh] mb-5 md:mb-0">
                    <h1 className='text-4xl md:text-6xl font-semibold text-white'>Get More Done with BRAINMATE</h1>
                    <p className='text-white'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={() => { window.location.href = 'https://brainmate.vercel.app' }} className="bg-primary capitalize text-white text-xl py-2 px-4 rounded-lg flex justify-center items-center gap-2">
                        Try BrainMate free
                        <ArrowRightIcon size={17} />
                    </button>
                </div>
            </div>
        </div>
    </>
}
