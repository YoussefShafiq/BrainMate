import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
import Securimg from '../../assets/images/secure.png'
import vector from '../../assets/images/Vector.png'

export default function Secure() {
    return <>
        <div className="flex justify-center items-center gap-10 px-20 py-16 relative">
            <div className="w-1/2 flex flex-col gap-5 text-textprimary">
                <h1 className='text-5xl font-semibold gap-x-3 flex'>100%
                    <h1 className='relative w-fit'>
                        Your data
                        <img src={vector} className='absolute w-full right-0' alt="" />
                    </h1>
                </h1>
                <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                <button onClick={() => { window.location.href = 'https://brainmate.vercel.app' }} className="bg-primary capitalize text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-fit">
                    read more
                    <ArrowRightIcon size={17} className='opacity-60' />
                </button>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img src={Securimg} className='w-full' alt="tasksimage" />
            </div>
        </div>
    </>
}
