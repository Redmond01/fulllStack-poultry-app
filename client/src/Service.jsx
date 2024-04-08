import React from 'react'
import DesktopService from './desktop/desktopService';
import TabletService from './tablet/TabletService';
import MobileService from './mobile/mobileService';

const Service = () => {
    return (
        <div>
            <DesktopService />
            <TabletService/>
            <MobileService/>
        </div>
    )
}

export default Service