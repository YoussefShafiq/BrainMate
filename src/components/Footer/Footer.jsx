import { ArrowRightIcon, Copyright } from 'lucide-react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faWindows, faAndroid, faFacebook, faLinkedin, faSquareXTwitter, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Note: These are brand icons, not solid

export default function Footer() {
    return (
        <div className="bg-primarybg bg-bg-pattern bg-cover text-white">
            <div className="py-20 flex flex-col justify-center items-center gap-1">
                <h1 className='capitalize font-bold text-5xl'>try BRAINMATE today</h1>
                <p>Get started for free.</p>
                <p>Add your whole team as your needs grow.</p>

                <button
                    onClick={() => { window.location.href = 'https://brainmate.vercel.app' }}
                    className="my-5 bg-primary capitalize text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-fit hover:bg-opacity-90 transition-opacity"
                >
                    try today free
                    <ArrowRightIcon size={17} className='opacity-60' />
                </button>

                <div className="flex justify-center items-center gap-4 mt-2">
                    <FontAwesomeIcon icon={faApple} className="h-10" />
                    <FontAwesomeIcon icon={faWindows} className="h-10" />
                    <FontAwesomeIcon icon={faAndroid} className="h-10" />
                </div>
            </div>
            <div className="border-t border-t-1 border-opacity-15 px-10 p-5 border-white flex justify-between items-center">
                <div className="flex gap-4 text-sm text-[#ffffffae]">
                    <a href="">Terms & privacy</a>
                    <a href="">Security</a>
                    <a href="">status</a>
                    <a href="" className='flex items-center'><Copyright size={14} className='inline' />2024 BRAINMATE</a>

                </div>
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faXTwitter} />
                </div>

            </div>
        </div>
    );
}