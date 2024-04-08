import React from 'react'
import DesktopStore from './desktop/desktopStore';
import TabletStores from './tablet/TabletStores';
import MobileStore from './mobile/mobileStore';

const Store = () => {
    return (
        <div>
            <DesktopStore />
            <TabletStores />
            <MobileStore/>
        </div>
    )
}

export default Store