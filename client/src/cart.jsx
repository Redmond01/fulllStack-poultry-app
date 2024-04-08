import React from 'react'
import DesktopCart from './desktop/desktopCart';
import TabletCart from './tablet/TabletCart';
import MobileCart from './mobile/mobileCart';

const Cart = () => {
  return (
    <div>
        <DesktopCart/>
        <TabletCart/>
        <MobileCart/>
    </div>
  )
}

export default Cart