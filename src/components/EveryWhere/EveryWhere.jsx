import React from 'react'
import vector from '../../assets/images/Vector.png'
import { ArrowRightIcon } from 'lucide-react'
import pattern from '../../assets/images/sidepattern.png'

export default function EveryWhere() {
    return <>
        <div className="flex flex-col justify-center items-center py-16 gap-5 bg-primarybg w-full text-white relative overflow-hidden ">
            <img src={pattern} className='absolute left-0 top-1/2 -translate-y-1/2 w-1/4 object-cover' alt="pattern" />

            <div className="w-2/3">
                <h1 className='text-5xl font-semibold gap-x-3 flex justify-center mb-5'>Your work, everywhere
                    <h1 className='relative w-fit'>
                        you are
                        <img src={vector} className='absolute w-full right-0' alt="" />
                    </h1>
                </h1>
                <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                </p>
                <button onClick={() => { window.location.href = 'https://brainmate.vercel.app' }} className="bg-primary capitalize text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-fit mt-5 m-auto">
                    try it now
                    <ArrowRightIcon size={17} className='opacity-60' />
                </button>
            </div>
        </div>
    </>
}
