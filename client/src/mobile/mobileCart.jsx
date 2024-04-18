import React, { useEffect, useRef } from 'react';
import styles from '../styles.module.css';
import Logo from '../images/logo.png';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { updateMobileSideBar, updatePurchaseIncrement, updatePurchaseDecrement, filterCart } from '../redux/desktopSlice';
import { useDispatch, useSelector } from 'react-redux';

const MobileCart = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const currentUrl = location.pathname
    const saveCurrentuRL = useRef(currentUrl)
    const sideBar = useSelector(function (state) {
        return state.deskopHome.mobileSideBar
    })
    useEffect(function () {
        // dispatch(updateMobileSideBar(true))
        dispatch(updateMobileSideBar(sideBar))
        const url = location.pathname
        if (url !== saveCurrentuRL.current) {
            dispatch(updateMobileSideBar(!sideBar))
        }
    }, [])

    const showReceipt = useSelector(function (state) {
        return state.deskopHome.reciept
    });
    const cartList = useSelector(function (state) {
        return state.deskopHome.cart
    });


    const handleSidebar = () => {
        dispatch(updateMobileSideBar(!sideBar))
    }
    const handlePurchase = () => {
        dispatch(updateReciept(!showReceipt))
    }
    const handleFilter = (item) => {
        const findOne = cartList.filter(function (details) {
            return details.id !== item.id
        })
        dispatch(filterCart(findOne))
    }
    const handleIncreasePrice = (item) => {
        dispatch(updatePurchaseIncrement(item))
    }

    const handleDecreasePrice = (item) => {
        dispatch(updatePurchaseDecrement(item))
    }
    return (
        <div className='sm:block md:hidden lg:hidden'>
            <div className='w-full h-[100svh] bg-whites relative'>
                <div className='w-full h-[10svh] bg-whites flex justify-between items-center px-[2rem]'>
                    <Link to={'/'} className='w-[90%]' onClick={function () { dispatch(updateMobileSideBar(!sideBar)) }}> <img src={Logo} alt="img" className='w-[15%] h-auto' /></Link>
                    <FaAlignJustify className=' w-[10%] text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
                </div>
                {/* ${sideBar ? styles.mobileSideBarOff : styles.mobileSideBarOn} */}
                <div className={`transition-all duration-[.5] bg-slate-400 ${sideBar?styles.mobileSideBarOff:styles.mobileSideBarOn}`}>
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
                <div className='w-full h-[5svh] flex '>
                    <h3 className='w-[85%] h-full text-[calc(1px_+_1svw_+_1svh)] font-[600] uppercase flex justify-center  text-brown'>itesms in your cart</h3>
                    <h3 className='w-[15%] h-[70%] text-[calc(1px_+_.7svw_+_.7svh)] font-[600] uppercase flex justify-center items-center px-[2rem] rounded-[2rem] bg-brown text-whites' onClick={handlePurchase}>purchase</h3>
                </div>
                {cartList.map(function (details) {
                    return (
                        <div key={details.id} className='w-full h-[20svh] flex bg-lightBrown border border-black'>
                            <div className='w-[25%] h-full '></div>
                            <div className='w-[75%] h-full flex justify-evenly outline-black outline outline-1'>
                                <div className='w-[70%] h-full flex flex-col justify-evenly '>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-[600] font-default'> item name:{details.name}</h3>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-[600] font-default'> description:{details.desc}</h3>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-[600] font-default'> price:{details.totalPrice}</h3>
                                </div>
                                <div className='w-[30%] h-full outline-black outline outline-1'>
                                    <div className='w-full h-[50%] space-y-3'>
                                        <div className='flex flex-col gap-3'>
                                            <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[600] flex font-default justify-center items-center capitalize'> increase no of purchase </h3>
                                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[600]  flex font-default justify-center items-center self-center capitalize bg-black text-white w-[20%] h-[30%] rounded-full'>{details.noOfPurchase}</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <h3 className='w-[50%] h-[40%] text-[calc(1px_+_1svw_+_1svh)] font-[600] flex justify-center items-center rounded-s-[2rem] cursor-pointer hover:bg-black hover:text-whites border border-black text-default' onClick={() => handleIncreasePrice(details)}>+</h3>
                                            <h3 className='w-[50%] h-[40%] text-[calc(1px_+_1svw_+_1svh)] font-[600] flex justify-center items-center rounded-e-[2rem] cursor-pointer hover:bg-black hover:text-whites border border-black text-default' onClick={() => handleDecreasePrice(details)}>-</h3>
                                        </div>
                                    </div>
                                    <div className='w-full h-[50%] flex justify-center items-center'>
                                        <BiTrash className='text-[calc(1px_+_1.5svw_+_1.5svh)] hover:text-red cursor-pointer' onClick={() => handleFilter(details)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileCart