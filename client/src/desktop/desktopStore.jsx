import React from 'react'
import styles from '../styles.module.css';
import Chicken from '../images/23.png';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaUser, FaCartPlus, FaPinterest, FaLinkedin, FaTwitter } from 'react-icons/fa';
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

const DesktopStore = () => {
    const dispatch = useDispatch()

    const cartNumber = useSelector(function (state) {
        return state.deskopHome.cart.length
    })
    const cartItems = useSelector(function (state) {
        return state.deskopHome.cart
    })
    const PurchasecartItems = useSelector(function (state) {
        return state.deskopHome.cart
    })
    const handleCartListUpdate = function (items) {
        const findIfItemExist = cartItems.some(function (details) {
            return details.id === items.id
        })

        if(!findIfItemExist){
            dispatch(updateCart([...cartItems, items]))
        }
    }
    return (
        <div className='lg:block md:hidden sm:hidden selection:bg-brown'>
            <div className='w-full h-[200svh] bg-whites'>
                <div className='w-full h-[15svh] bg-whites flex'>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <div className='w-[15%] h-[70%]'></div>
                        <div className='w-[45%] h-[70%] flex justify-end items-center'>
                            <Link to={'/'}><img src={Logo} alt="logo" className='w-[35%] h-auto' /></Link>
                        </div>
                        <div className='w-[40%] h-[70%]'></div>
                    </div>
                    <div className='w-[50%] h-full flex justify-evenly items-center'>
                        <Link to={'/'} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:text-brown transition-all duration-[.5s]'>home</h3>
                        </Link>
                        <Link to={"/marketplace"} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:text-brown transition-all duration-[.5s]'>market palce</h3>
                        </Link>
                        <Link to={'/service'} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:text-brown transition-all duration-[.5s]'>services</h3>
                        </Link>
                        <Link to={'/about'} className='w-[25%] h-[70%] flex justify-center items-center'>
                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:text-brown transition-all duration-[.5s]'>about us</h3>
                        </Link>
                    </div>
                    <div className='w-[20%] h-full flex justify-center items-center'>
                        <div className='w-[50%] h-[70%] flex justify-center items-center'>
                            <Link to={'/login'}><FaUser className='text-[calc(1px_+_.8svw_+_.8svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
                        </div>
                        <div className='w-[50%] h-[70%] flex justify-center items-center relative'>
                            <Link to={'/cart'}><FaCartPlus className='text-[calc(1px_+_.8svw_+_.8svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[600] absolute top-[20%] right-[35%]'>{cartNumber}</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[120svh] border border-yellow-600 flex justify-center items-center'>
                    <div className='w-[70%] h-full flex flex-wrap gap-[1rem]'>
                        {items.map(function (details) {
                            return (
                                <div key={details.id} className='w-[32%] h-[32%] rounded-xl cursor-pointer shadow-md shadow-slate-400'>
                                    <div className='w-full h-[80%] flex justify-center items-center'>
                                        <img src={Chicken} alt="img" className={styles.items} />
                                    </div>
                                    <div className='w-full h-[20%] flex'>
                                        <div className='w-[80%] h-full'>
                                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[500] capitalize'>desc: <span className='text-[calc(1px_+_.6svw_+_.6svh)] font-[700] capitalize'>{details.desc}</span> </h3>
                                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[500] capitalize'>price: <span className='text-[calc(1px_+_.6svw_+_.6svh)] font-[700] capitalize'>{details.price}</span> </h3>
                                        </div>
                                        <div className='w-[20%] h-full flex justify-center items-center hover:bg-lightBrown hover:rounded-ss-xl'>
                                            <h3 className='text-[calc(1px_+_1.8svw_+_1.8svh)] font-[500] capitalize w-full h-full flex justify-center items-center' onClick={() => handleCartListUpdate(details)} >+</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <footer className='w-full h-[60svh] bg-lightBrown'>
                    <div className='w-full h-[10%] flex justify-center items-center'>
                        <hr className='border-2 border-whites w-[90%]' />
                    </div>
                    <div className='w-full h-[90%]  flex'>
                        <div className='w-[30%] flex justify-center items-center'>
                            <img src={Logo} alt="" className='w-[50%] h-auto' />
                        </div>
                        <div className='w-[70%]'>
                            <div className='w-full h-[20%] flex justify-center items-center '>
                                <h3 className='text-[calc(1px_+_1svw_+_1svh)] uppercase font-[600] text-black'>our office adresses</h3>
                            </div>
                            <div className='w-full h-[80%] flex justify-center items-center'>
                                <div className='w-[32%] h-full'>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] uppercase font-[600] text-black text-center'>head office</h3>
                                    <div className='w-full h-[10%]'></div>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] capitalize font-[600] text-black text-center'>Address</h3>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                    <br />
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] capitalize font-[600] text-black text-center'>tel phone</h3>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>09011144551, 09122788372</h3>
                                </div>
                                <div className='w-[32%] h-full'>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] uppercase font-[600] text-black text-center'>branch office</h3>
                                    <div className='w-full h-[10%]'></div>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] capitalize font-[600] text-black text-center'>Address</h3>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                    <br />
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] capitalize font-[600] text-black text-center'>tel phone</h3>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>09011144551, 09122788372</h3>
                                </div>
                                <div className='w-[32%] h-full'>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] uppercase font-[600] text-black text-center'>branch office</h3>
                                    <div className='w-full h-[10%]'></div>
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] capitalize font-[600] text-black text-center'>Address</h3>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                    <br />
                                    <h3 className='text-[calc(1px_+_1svw_+_1svh)] capitalize font-[600] text-black text-center'>tel phone</h3>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-[600] text-black text-center'>09011144551, 09122788372</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default DesktopStore