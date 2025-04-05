import React from 'react'
import u1 from '../../assets/images/U-1.png'
import u2 from '../../assets/images/U-2.png'
import u3 from '../../assets/images/U-3.png'
import u4 from '../../assets/images/U-4.png'
import u5 from '../../assets/images/U-5.png'

export default function OurTeam() {


    const team = [
        {
            name: 'youssef shafek',
            image: u4,
            position: 'frontend developer'
        },
        {
            name: 'hadeer mohammed',
            image: u1,
            position: 'UI/UX Designer'
        },
        {
            name: 'youssef kamel',
            image: u3,
            position: 'backend developer'
        },
        {
            name: 'alaa mohammed',
            image: u2,
            position: 'backend developer'
        },
        {
            name: 'mohammed hamdy',
            image: u5,
            position: 'ml developer'
        },
        {
            name: 'youssef salem',

            position: 'flutter developer'
        },

    ]

    return <>
        <div className="py-10">
            <div className="text-textprimary uppercase flex flex-col text-center justify-center items-center px-5 md:px-0">
                <h1 className='text-5xl md:text-6xl'>meet our <span className='font-bold'>best team</span></h1>
                <p className='text-sm w-2/3'>Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis turpis malesuada, eu luctus elit dignissim.</p>
            </div>
            <div className="p-10 flex flex-wrap justify-center items-center gap-4 gap-y-36 mt-28">
                {team.map((member) => (<>
                    <div className="bg-primary md:w-1/5 h-full p-4">
                        <div className="bg-white h-52 relative">
                            <img src={member.image} className='h-[170%] object-cover absolute bottom-0' alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center capitalize pt-4 text-white">
                            <h1 className='w-max'>{member.name}</h1>
                            <p className='uppercase'>
                                {member.position}
                            </p>
                        </div>
                    </div>
                </>))}
            </div>
        </div>
    </>
}



