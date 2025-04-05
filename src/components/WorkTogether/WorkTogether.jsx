import React from 'react'
import WorkTogetherimg from '../../assets/images/Work Together Image.png'
import vector from '../../assets/images/Vector.png'
import { ArrowRightIcon } from 'lucide-react'


export default function WorkTogether() {
    return <>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10 p-5 md:px-20 py-10 relative">
            <div className="md:w-1/2 flex flex-col gap-5 text-textprimary">
                <h1 className='text-5xl font-semibold gap-x-3 flex flex-wrap'>Work
                    <span className='relative w-fit'>
                        Together
                        <img src={vector} className='absolute w-full right-0' alt="" />
                    </span>
                </h1>
                <p>With BRAINMATE , share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others.
                </p>
                <button onClick={() => { window.location.href = 'https://brainmate.vercel.app' }} className="bg-primary capitalize text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-fit">
                    try it now
                    <ArrowRightIcon size={17} className='opacity-60' />
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
                <img src={WorkTogetherimg} className='w-3/4' alt="tasksimage" />
            </div>
        </div>
    </>
}
