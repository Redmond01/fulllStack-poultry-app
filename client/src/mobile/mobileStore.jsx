import React, { useEffect, useRef } from 'react';
import styles from '../styles.module.css';
import Logo from '../images/logo.png';
import Chicken from '../images/23.png';
import { FaAlignJustify, FaTimes, FaCartPlus } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { updateMobileSideBar } from '../redux/desktopSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../redux/desktopSlice';


export const items = [
    {
        id: 1,
        desc: 'full grwon chicken',
        price: 500,
        name: 'BROILER CHICKED',
        noOfPurchase: 1,
        totalPrice: 500
    },
    {
        id: 2,
        desc: 'full grwon chicken',
        price: 300,
        name: 'COCKREL CHICKEN',
        noOfPurchase: 1,
        totalPrice: 300
    },
    {
        id: 3,
        desc: 'full cow meet ',
        price: 700,
        name: '1KG BEEF',
        noOfPurchase: 1,
        totalPrice: 700
    }
]
const MobileStore = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const currentUrl = location.pathname
    const saveCurrentuRL = useRef(currentUrl)
    const sideBar = useSelector(function (state) {
        return state.deskopHome.mobileSideBar
    })
    useEffect(function () {
        const url = location.pathname
        if (url !== saveCurrentuRL) {
            dispatch(updateMobileSideBar(!sideBar))
        }
    }, [])

    const cartNumber = useSelector(function (state) {
        return state.deskopHome.cart.length
    })
    const cartItems = useSelector(function (state) {
        return state.deskopHome.cart
    })

    const handleSidebar = () => {
        dispatch(updateMobileSideBar(!sideBar))
    }
    const handleCartListUpdate = function (items) {
        dispatch(updateCart([...cartItems, items]))
    }

    return (
        <div className='sm:block md:hidden lg:hidden'>
            <div className='w-full h-[190svh] bg-whites relative'>
                <div className='w-full h-[10svh] bg-whites flex justify-between items-center px-[2rem]'>
                    <img src={Logo} alt="img" className='w-[10%] h-auto' />
                    <FaAlignJustify className='text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
                </div>
                <div className={`${sideBar ? styles.mobileSideBarOff : styles.mobileSideBarOn} transition-all duration-500 bg-slate-400`}>
                    <div className='w-full h-[20%] flex justify-end items-center p-2'>
                        <FaTimes className='text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
                    </div>
                    <div className='w-full h-[80%] flex flex-col justify-center items-center gap-4 bg-slate-400'>
                        <Link to={'/'}>  <div className='w-full h-[24%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> home</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/marketplace'}> <div className='w-full h-[24%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> marketplace</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/service'}><div className='w-full h-[24%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> services</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/about'}> <div className='w-full h-[24%] flex justify-center items-start'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> about us</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/login'}> <div className='w-full h-[24%] flex justify-center items-start'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> login</h3>
                        </div></Link>
                    </div>
                </div>
                <div className='w-full h-[10svh] flex justify-end items-center'>
                    <h3 className='text-[calc(1px_+_1.3svw_+_1.3svh)] font-[400] capitalize text-brown'>click the cart icon </h3>
                    <div className='w-[50%] h-[70%] flex justify-end items-center relative  px-3'>
                        <Link to={'/cart'}><FaCartPlus className='text-[calc(1px_+_1.8svw_+_1.8svh)] fill-black transition-all duration-[.5s]' /></Link>
                        <h3 className='text-[calc(1px_+_1.8svw_+_1.8svh)] font-[600] absolute top-[-5%] right-[1%]'>{cartNumber}</h3>
                    </div>
                </div>
                <div className='w-full h-[120svh]flex justify-center items-center'>
                    <div className='w-full h-full border border-black gap-5 overflow overflow-y-scroll'>
                        {items.map(function (details) {
                            return (
                                <div key={details.id} className='w-full h-[50svh] rounded-xl cursor-pointer shadow-md shadow-slate-400'>
                                    <div className='w-full h-[80%] flex justify-center items-center'>
                                        <img src={Chicken} alt="img" className='w-[60%] h-auto' />
                                    </div>
                                    <div className='w-full h-[20%] flex'>
                                        <div className='w-[80%] h-full'>
                                            <h3 className='text-[calc(1px_+_1.8svw_+_1.8svh)] font-[500] capitalize'>desc: <span className='text-[calc(1px_+_1.3svw_+_1.3svh)] font-[700] capitalize'>{details.desc}</span> </h3>
                                            <h3 className='text-[calc(1px_+_1.8svw_+_1.8svh)] font-[500] capitalize'>price: <span className='text-[calc(1px_+1_13svw_+1.13svh)] font-[700] capitalize'>{details.price}</span> </h3>
                                        </div>
                                        <div className='w-[20%] h-full flex justify-center items-center bg-lightBrown rounded-s-xl'>
                                            <h3 className='text-[calc(1px_+_2.3svw_+_2.3svh)] font-[500] capitalize w-full h-full flex justify-center items-center' onClick={() => handleCartListUpdate(details)} >+</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <footer className='w-full h-[20svh] border border-green-600 bg-brown'>
                    <div className='w-full h-[10%] border border-black flex justify-center items-center'>
                        <hr className='border-2 border-whites w-[90%]' />
                    </div>
                    <div className='w-full h-[90%] border border-black'></div>
                </footer>
            </div>
        </div>
    )
}

export default MobileStore