import React from 'react';
import DesktopUserLogin from './desktop/desktopUserLogin';
import TabletUserLogin from './tablet/TabletUserLogin';
import MobileUserLogin from './mobile/mobileUserLogin'
const UserLogin = () => {
  return (
    <div>
        <DesktopUserLogin/>
        <TabletUserLogin/>
        <MobileUserLogin/>
    </div>
  )
}

export default UserLogin