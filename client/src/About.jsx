import React from 'react'
import DesktopAbout from './desktop/desktopAbout';
import TabletAbout from './tablet/TabletAbout';
import MobileAbout from './mobile/mobileAbout';
const About = () => {
    return (
        <div>
            <DesktopAbout />
            <TabletAbout/>
            <MobileAbout/>
        </div>
    )
}

export default About