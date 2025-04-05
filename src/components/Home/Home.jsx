import React from 'react'
import Hero from '../Hero/Hero'
import ProjectMngmnt from '../ProjectMngmnt/ProjectMngmnt'
import WorkTogether from '../WorkTogether/WorkTogether'
import EveryWhere from '../EveryWhere/EveryWhere'
import Secure from '../Secure/Secure'
import OurTeam from '../OurTeam/OurTeam'
import Footer from '../Footer/Footer'

export default function Home() {
    return <>
        <div className="font-inter overflow-hidden">
            <Hero />
            <ProjectMngmnt />
            <WorkTogether />
            <EveryWhere />
            <Secure />
            <OurTeam />
            <Footer />
        </div>
    </>
}
