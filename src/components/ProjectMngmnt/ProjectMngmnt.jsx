import React from 'react'
import pattern from '../../assets/images/BACKGROUND.png'
import { ArrowRightIcon } from 'lucide-react'
import tasksimage from '../../assets/images/tasksimage.png'
import vector from '../../assets/images/Vector.png'

export default function ProjectMngmnt() {
    return <>
        <div className="flex justify-center items-center gap-10 px-20 py-10 relative">
            <img src={pattern} className='absolute left-0 top-1/2 -translate-y-1/2 w-1/4 object-cover' alt="pattern" />
            <div className="w-1/2 flex flex-col gap-5 text-textprimary">
                <h1 className='text-5xl font-semibold gap-x-3 flex'>Project
                    <h1 className='relative w-fit'>
                        Management
                        <img src={vector} className='absolute w-full right-0' alt="" />
                    </h1>
                </h1>
                <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <button onClick={() => { window.location.href = 'https://brainmate.vercel.app' }} className="bg-primary capitalize text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-fit">
                    get started
                    <ArrowRightIcon size={17} className='opacity-60' />
                </button>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img src={tasksimage} className='w-full' alt="tasksimage" />
            </div>
        </div>
    </>
}
