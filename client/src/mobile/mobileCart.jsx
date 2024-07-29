import React, { useEffect, useRef } from 'react';
import styles from '../styles.module.css';
import Logo from '../images/logo.png';
import Chicken from '../images/23.png';
import { FaAlignJustify, FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { BiTrash } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { updateMobileSideBar, updatePurchaseIncrement, updatePurchaseDecrement, filterCart, updateReciept } from '../redux/desktopSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import {got} from 'got'

const MobileCart = () => {



    const dispatch = useDispatch()
    const location = useLocation()
    const currentUrl = location.pathname
    const saveCurrentuRL = useRef(currentUrl)
    const sideBar = useSelector(function (state) {
        return state.deskopHome.mobileSideBar
    })
    const curretUrl = useRef(location.pathname)
    useEffect(function () {
        const changeableUrl = location.pathname
        if (changeableUrl !== curretUrl) {
            dispatch(updateMobileSideBar(true))
        }
    }, [])

    const showReceipt = useSelector(function (state) {
        return state.deskopHome.reciept
    });
    const cartList = useSelector(function (state) {
        return state.deskopHome.cart
    });
    const totalPriceArray = cartList.map(function (details) {
        return details.totalPrice
    })
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
    const handlePaymentSystem = async () => {
        FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-084e313fdf72727a66ce350044eae2ac-X",
            tx_ref: "titanic-48981487343MDI0NzMx",
            amount: totalPriceArray.reduce(function(prev, next){return prev+next}),
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd",
            redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "alagbakafarms@gmail.com",
                phone_number: "08132968842",
                name: "Rose DeWitt Bukater",
            },
            customizations: {
                title: "ALAGBAKA FARMS",
                description: "Payment for item purchased",
                logo:Logo
                // logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",

            }
        });
    }
    return (
        <div className='sm:block md:hidden lg:hidden relative'>
            <div className={`${showReceipt ? `w-full h-[100svh] bg-whites relative` : ''} `}>
                <div className='w-full h-[10svh] bg-whites flex justify-between items-center px-[2rem]'>
                    <Link to={'/'} className='w-[90%]' onClick={function () { dispatch(updateMobileSideBar(!sideBar)) }}> <img src={Logo} alt="img" className='w-[15%] h-auto' /></Link>
                    <FaAlignJustify className=' w-[10%] text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
                </div>
                <div className={`transition-all duration-[.5] bg-slate-400 ${sideBar ? styles.mobileSideBarOff : styles.mobileSideBarOn}`}>
                    <div className='w-full h-[20%] flex justify-end items-center p-2'>
                        <FaTimes className='text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
                    </div>
                    <div className='w-full h-[80%] flex flex-col justify-center items-center gap-4 bg-slate-400'>
                        <Link to={'/'}>  <div className='w-full h-full flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> home</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/marketplace'}> <div className='w-full h-full flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> marketplace</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/service'}><div className='w-full h-full flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> services</h3>
                        </div></Link>
                        <hr className='border-2 border-whites w-full' />
                        <Link to={'/about'}> <div className='w-full h-full flex justify-center items-start'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> about us</h3>
                        </div></Link>
                        {/* <hr className='border-2 border-whites w-full' />
                        <Link to={'/login'}> <div className='w-full h-full flex justify-center items-start'>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> login</h3>
                        </div></Link> */}
                    </div>
                </div>
                <div className='w-full h-[5svh] flex '>
                    <h3 className='w-[80%] h-full text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] uppercase flex justify-center  text-brown'>itesms in your cart</h3>
                    <h3 className={`${cartList.length > 0 ? 'w-[20%] h-[70%] text-[calc(1px_+_.8svw_+_.8svh)] font-[600] uppercase flex justify-center items-center px-[1.8rem] rounded-lg bg-brown text-whites' : 'hidden'}`} onClick={handlePurchase}>checkout</h3>
                </div>
                {cartList.map(function (details) {
                    return (
                        <div>
                            <div key={details.id} className='w-full h-[20svh] flex bg-lightBrown'>
                                <div className='w-[25%] h-full flex justify-center items-center'>
                                    <img src={details.img} alt="chicken" className='h-[70%] w-auto' />
                                </div>
                                <div className='w-[75%] h-full flex justify-evenly'>
                                    <div className='w-[70%] h-full flex flex-col justify-evenly '>
                                        <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] font-default capitalize'> item name:{details.name}</h3>
                                        <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] font-default capitalize'> description:{details.desc}</h3>
                                        <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] font-default capitalize'> price:{details.totalPrice}</h3>
                                    </div>
                                    <div className='w-[30%] h-full'>
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
                                            <BiTrash className='text-[calc(1px_+_2svw_+_2svh)] hover:text-red cursor-pointer' onClick={() => handleFilter(details)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[.2rem]'></div>
                        </div>
                    )
                })}
                {cartList.length < 1 ?
                    <div className='w-full h-[40svh] flex flex-col items-center justify-center'>
                        <MdOutlineRemoveShoppingCart className='text-[calc(1px_+_14svw_+_14svh)] fill-brown' />
                        <h3 className='w-[70%] text-brown font-[500] flex justify-center items-center'>you have not selected any item(s) yet, kindly pick some to the cart.</h3>
                    </div> :
                    ''
                }
                {showReceipt ?
                    <div className={styles.mobileReceipt}>
                        <div className='w-full h-[10svh] flex justify-end items-center px-8'>
                            <FaTimes className='text-[calc(1px_+_3.5svw_+_3.5svh)]' onClick={handlePurchase} />
                        </div>
                        <div className='w-full h-[90svh]'>
                            {cartList.map(function (details) {
                                return (
                                    <div>
                                        <div key={details.id} className='w-full h-[20svh] flex bg-lightBrown'>
                                            <div className='w-[25%] h-full flex justify-center items-center'>
                                                <img src={details.img} alt="chicken" className='h-[80%] w-auto' />
                                            </div>
                                            <div className='w-[75%] h-full flex justify-evenly'>
                                                <div className='w-[70%] h-full flex flex-col justify-evenly '>
                                                    <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] font-default capitalize'> item name:{details.name}</h3>
                                                    <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] font-default capitalize'> description:{details.desc}</h3>
                                                    <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-[600] font-default capitalize'> price:{details.totalPrice}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[.2rem]'></div>
                                    </div>
                                )
                            })}
                            <div className='w-full h-[10svh] flex justify-center items-center bg-brown'>
                                <h3 className=' text-[calc(1px_+_2svw_+_2svh)] font-[600] font-default capitalize flex items-center justify-start '>total:{totalPriceArray.reduce(function (prev, next) {
                                    return prev + next
                                })}

                                </h3>
                            </div>
                            <div className='w-full h-[20svh] top-[80%] fixed flex justify-center items-center'>
                                <h3 className='bg-brown h-[50%] w-[90%] text-[calc(1px_+_3svw_+_3svh)] capitalize font-[700] font-default rounded-lg flex justify-center items-center' onClick={handlePaymentSystem}>pay now</h3>
                            </div>
                        </div>

                    </div> :
                    <div></div>
                }
                <div className='w-full h-[35svh]'></div>
                <footer className='w-full h-[70svh] bg-lightBrown'>
                    <div className='w-full h-[80%]'>
                        <div className='w-full h-[33%]'>
                            <h3 className='text-[calc(1px_+_2.2svw_+_2.2svh)] capitalize font-[600] underline underline-offset-4'>head office:</h3>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[600] capitalize'>address: <span className='w-[60%] text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400]'> kilometer3, ilupeju rd, off alyanju estate ogun state</span></h3>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[600] capitalize'>tel: <span className='w-[60%] text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400]'> 09032968842</span></h3>
                        </div>
                        <div className='w-full h-[33%]'>
                            <h3 className='text-[calc(1px_+_2.2svw_+_2.2svh)] capitalize font-[600] underline underline-offset-4'>branch office:</h3>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[600] capitalize'>address: <span className='w-[60%] text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400]'> kilometer3, ilupeju rd, off alyanju estate ogun state</span></h3>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[600] capitalize'>tel: <span className='w-[60%] text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400]'> 09032968842</span></h3>
                        </div>
                        <div className='w-full h-[33%]'>
                            <h3 className='text-[calc(1px_+_2.2svw_+_2.2svh)] capitalize font-[600] underline underline-offset-4'>branch office:</h3>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[600] capitalize'>address: <span className='w-[60%] text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400]'> kilometer3, ilupeju rd, off alyanju estate ogun state</span></h3>
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[600] capitalize'>tel: <span className='w-[60%] text-[calc(1px_+_1.5svw_+_1.5svh)] font-[400]'> 09032968842</span></h3>
                        </div>
                    </div>
                    <div className='w-full h-[20%] flex justify-center items-center gap-[2rem]'>
                        <img src={Logo} alt="logo" className='w-[11%] ' />
                        <FaFacebook className='text-[calc(1px_+_3.5svw_+_3.5svh)] text-brown' />
                        <FaInstagram className='text-[calc(1px_+_3.5svw_+_3.5svh)] text-brown' />
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MobileCart