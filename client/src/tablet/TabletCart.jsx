import React, { useEffect, useRef } from 'react';
import Styles from '../styles.module.css'
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaUser, FaCartPlus, FaPinterest, FaLinkedin, FaTwitter, FaTimes } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import {MdOutlineRemoveShoppingCart} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { updatePurchaseDecrement, updatePurchaseIncrement, updateReciept, filterCart } from '../redux/desktopSlice';
import { useLocation } from 'react-router-dom';

const TabletCart = () => {
    const location = useLocation()
    const curretUrl = location.pathname
    const storeCurrentUrl = useRef(curretUrl)
    useEffect(function () {
        const navigationUrl = location.pathname
        if (navigationUrl !== storeCurrentUrl && showReceipt === true) {
            dispatch(updateReciept(!showReceipt))
        }
    }, [])
    const dispatch = useDispatch();
    const cartList = useSelector(function (state) {
        return state.deskopHome.cart
    });
    let list = useSelector(function (state) {
        return state.deskopHome.list
    });
    const cartNumber = useSelector(function (state) {
        return state.deskopHome.cart.length
    });
    const showReceipt = useSelector(function (state) {
        return state.deskopHome.reciept
    });

    const handleIncreasePrice = (item) => {
        dispatch(updatePurchaseIncrement(item))
    }

    const handleDecreasePrice = (item) => {
        dispatch(updatePurchaseDecrement(item))
    }

    const handleFilter = (item) => {
        const findOne = cartList.filter(function (details) {
            return details.id !== item.id
        })
        dispatch(filterCart(findOne))
    }
    const totalPriceArray = cartList.map(function(details){
        return details.totalPrice
    })
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
        <div className='sm:hidden md:block lg:hidden selection:bg-brown'>
            <div className='w-full h-[107svh]  relative'>
                {/* <div className={`${showReceipt ? Styles.Truereciept : 'hidden'} transition-all duration-500 `}>
                    <FaTimes className='text-[calc(1px_+_1.5svw_+_1.5svh)] cursor-pointer top-70 right-0 absolute border border-black' />
                </div> */}



                <div className={`${showReceipt ? ' opacity-20 w-full h-[10svh] bg-whites flex' : 'w-full h-[10svh] bg-whites flex'} transition-all duration-500`}>

                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <div className='w-[15%] h-[70%]'></div>
                        <div className='w-[45%] h-[70%] flex justify-end items-center'>
                            <Link to={'/'}><img src={Logo} alt="logo" className='w-[35%] h-auto' /></Link>
                        </div>
                        <div className='w-[40%] h-[70%]'></div>
                    </div>
                    <div className='w-[50%] h-full flex justify-evenly items-center'>
                        <Link to={'/'} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.65svw_+_.65svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:text-brown transition-all duration-[.5s]'>home</h3>
                        </Link>
                        <Link to={"/marketplace"} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.65svw_+_.65svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:text-brown transition-all duration-[.5s]'>market palce</h3>
                        </Link>
                        <Link to={'/service'} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.65svw_+_.65svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:text-brown transition-all duration-[.5s]'>services</h3>
                        </Link>
                        <Link to={'/about'} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.65svw_+_.65svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:text-brown transition-all duration-[.5s]'>about us</h3>
                        </Link>
                    </div>
                    <div className='w-[20%] h-full flex justify-center items-center'>
                        {/* <div className='w-[50%] h-[70%] flex justify-center items-center'>
                            <Link to={'/login'}> <FaUser className='text-[calc(1px_+_.65svw_+_.65svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
                        </div> */}
                        <div className='w-[50%] h-[70%] flex justify-center items-center relative'>
                            <Link to={'/cart'}><FaCartPlus className='text-[calc(1px_+_.65svw_+_.65svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
                            <h3 className='text-[calc(1px_+_.65svw_+_.65svh)] font-[600] absolute top-[20%] right-[35%]'>{cartNumber}</h3>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[3svh] flex '>
                    <h3 className='w-[85%] h-full text-[calc(1px_+_.6svw_+_.6svh)] font-[600] uppercase flex justify-center  text-brown'>itesms in your cart</h3>
                    <h3 className='w-[15%] h-full text-[calc(1px_+_.6svw_+_.6svh)] font-[600] uppercase flex justify-center items-center px-[2rem] rounded-[2rem] bg-brown text-whites hover:bg-black cursor-pointer' onClick={handlePaymentSystem}>purchase</h3>
                </div>
                <br />
                <div className={`${showReceipt ? 'w-full h-[70svh] overflow-scroll overflow-y-scroll space-y-3 opacity-20' : 'w-full h-[70svh]  overflow-scroll overflow-y-scroll space-y-3'} transition-all duration-500`}>
                    {cartList.map(function (details) {
                        return (
                            <div key={details.id} className='w-full h-[15svh] flex bg-lightBrown border border-black'>
                                <div className='w-[40%] h-full flex justify-center items-center'>
                                    <img src={details.img} alt="img" className='h-[80%] w-auto' />
                                </div>
                                <div className='w-[60%] h-full flex justify-evenly outline-black outline outline-1'>
                                    <div className='w-[70%] h-full flex flex-col justify-evenly '>
                                        <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[400] font-default'> item name:{details.name}</h3>
                                        <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[400] font-default'> description:{details.desc}</h3>
                                        <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[400] font-default'> price:{details.totalPrice}</h3>
                                    </div>
                                    <div className='w-[30%] h-full outline-black outline outline-1'>
                                        <div className='w-full h-[50%] space-y-3'>
                                            <div className='flex flex-col'>
                                                <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[400] flex font-default justify-center items-center capitalize'> increase no of purchase </h3>
                                                <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[400]  flex font-default justify-center items-center self-center capitalize bg-black text-white w-[20%] h-[30%] rounded-full'>{details.noOfPurchase}</h3>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <h3 className='w-[30%] h-[40%] text-[calc(1px_+_.6svw_+_.6svh)] font-[400] flex justify-center items-center rounded-s-[2rem] cursor-pointer hover:bg-black hover:text-whites border border-black text-default' onClick={() => handleIncreasePrice(details)}>+</h3>
                                                <h3 className='w-[30%] h-[40%] text-[calc(1px_+_.6svw_+_.6svh)] font-[400] flex justify-center items-center rounded-e-[2rem] cursor-pointer hover:bg-black hover:text-whites border border-black text-default' onClick={() => handleDecreasePrice(details)}>-</h3>
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
                    <div className={`${cartList.length === 0 ? 'w-full h-full justify-center items-center flex flex-col' : 'hidden'}`}>
                        <MdOutlineRemoveShoppingCart className='text-[calc(1px_+_13svw_+_13svh)] fill-brown' />
                        <h3 className='w-[70%] text-brown font-[500] flex justify-center items-center'>you have not selected any item(s) yet, kindly pick some to the cart.</h3>
                    </div>
                </div>
                <footer className='w-full h-[20svh] bg-lightBrown'>
                    <div className='w-full h-[10%] flex justify-center items-center'>
                        <hr className='border-2 border-whites w-[90%]' />
                    </div>
                    <div className='w-full h-[90%]  flex'>
                        <div className='w-[30%] flex justify-center items-center'>
                            <img src={Logo} alt="" className='w-[50%] h-auto' />
                        </div>
                        <div className='w-[70%]'>
                            <div className='w-full h-[20%] flex justify-center items-center '>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] uppercase font-[600] text-black'>our office adresses</h3>
                            </div>
                            <div className='w-full h-[80%] flex justify-center items-center gap-3'>
                                <div className='w-[32%] h-full'>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] uppercase font-[600] text-black text-center'>head office</h3>
                                    <div className='w-full h-[10%]'></div>
                                    <h3 className='text-[calc(1px_+_.5svw_+_5.svh)] capitalize font-[600] text-black text-center'>Address</h3>
                                    <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-[600] text-black '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                    <br />
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>tel phone</h3>
                                    <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-[600] text-black text-center'>09011144551, 09122788372</h3>
                                </div>
                                <div className='w-[32%] h-full'>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] uppercase font-[600] text-black text-center'>branch office</h3>
                                    <div className='w-full h-[10%]'></div>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>Address</h3>
                                    <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-[600] text-black '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                    <br />
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>tel phone</h3>
                                    <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-[600] text-black text-center'>09011144551, 09122788372</h3>
                                </div>
                                <div className='w-[32%] h-full'>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] uppercase font-[600] text-black text-center'>branch office</h3>
                                    <div className='w-full h-[10%]'></div>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>Address</h3>
                                    <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-[600] text-black '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                    <br />
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>tel phone</h3>
                                    <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-[600] text-black text-center'>09011144551, 09122788372</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default TabletCart