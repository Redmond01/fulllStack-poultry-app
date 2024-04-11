import React, { useEffect, useRef } from 'react';
import styles from '../styles.module.css';
import Logo from '../images/logo.png';
import { FaAlignJustify, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { updateMobileSideBar, updateSignInOrSignOut } from '../redux/desktopSlice';
import { useDispatch, useSelector } from 'react-redux';

const MobileUserLogin = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const currentUrl = location.pathname
    const saveCurrentuRL = useRef(currentUrl)
    const sideBar = useSelector(function (state) {
        return state.deskopHome.mobileSideBar
    })
    const handleSidebar = () => {
        dispatch(updateMobileSideBar(!sideBar))
    }
    useEffect(function () {
        const url = location.pathname
        if (url !== saveCurrentuRL) {
            dispatch(updateMobileSideBar(!sideBar))
        }
    }, [])



    const signinOrSignup = useSelector(function (state) {
        return state.deskopHome.signInOrSignUp
    });
    const handleSignIn = () => {
        dispatch(updateSignInOrSignOut(!signinOrSignup))
    }

    return (
        <div className='sm:block md:hidden lg:hidden'>
            <div className='w-full h-[100svh] bg-whites relative'>
                <div className='w-full h-[10svh] bg-whites flex justify-between items-center px-[2rem]'>
                    <Link to={'/'} className='w-[90%]' onClick={function () { dispatch(updateMobileSideBar(!sideBar)) }}> <img src={Logo} alt="img" className='w-[15%] h-auto' /></Link>
                    <FaAlignJustify className=' w-[10%] text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
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



                <div className='w-full h-[55svh] flex'>
                    <div className='w-[15%]'></div>
                    <div className='w-[70%] flex justify-center '>
                        {signinOrSignup ?
                            <form className='w-[90%] h-full rounded-[1rem] border border-brown'>
                                <div className='w-full h-[10%]'></div>
                                <div className='w-full h-[20%] flex justify-center items-center'>
                                    <h3 className='text-[calc(1px_+_2svw_+_2svh)] font-[700] capitalize font-default'>signIn account</h3>
                                </div>
                                <div className='w-full h-[20%] '>
                                    <h3 className='text-[calc(1px_+_1.3svw_+_1.3svh)] font-[700] capitalize font-default w-[10%]'>email:</h3>
                                    <div className='w-[10%]'></div>
                                    <input type="text" name="email" id="" className='bg-brown h-[40%] w-[97%] outline-none rounded-xl text-whites' />
                                </div>
                                <div className='w-full h-[20%]'>
                                    <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default'>password:</h3>
                                    <input type="text" name="password" id="" className='bg-brown h-[40%] w-[97%] outline-none rounded-xl text-whites' />
                                </div>
                                <div className='w-full h-[20%] flex justify-center items-center'>
                                    <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default w-[30%] text-center rounded-xl bg-brown text-whites'>submit</h3>
                                </div>
                                <div className='w-full h-[10%] px-2'>
                                    <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] font-[500] w-[55%] capitalize font-default text-brown hover:text-black cursor-pointer' onClick={handleSignIn}>dont have an account? click to sign up</h3>
                                </div>
                            </form> :

                            <form className='w-[90%] h-full rounded-[1rem] border border-brown'>
                                <div className='w-full h-[20%] flex justify-center items-center'>
                                    <h3 className='text-[calc(1px_+_2svw_+_2svh)] font-[700] capitalize font-default'>signUp account</h3>
                                </div>
                                <div className='w-full h-[17%] '>
                                    <h3 className='text-[calc(1px_+_1.3svw_+_1.3svh)] font-[700] capitalize font-default w-[10%]'>username:</h3>
                                    <div className='w-[10%]'></div>
                                    <input type="text" name="username" id="" className='bg-brown h-[40%] w-[98%] outline-none rounded-xl text-whites' />
                                </div>
                                <div className='w-full h-[17%] '>
                                    <h3 className='text-[calc(1px_+_1.3svw_+_1.3svh)] font-[700] capitalize font-default w-[10%]'>email:</h3>
                                    <div className='w-[10%]'></div>
                                    <input type="text" name="email" id="" className='bg-brown h-[40%] w-[98%] outline-none rounded-xl text-whites' />
                                </div>
                                <div className='w-full h-[17%]'>
                                    <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default'>password:</h3>
                                    <input type="text" name="password" id="" className='bg-brown h-[40%] w-[98%] outline-none rounded-xl text-whites' />
                                </div>
                                <div className='w-full h-[17%] flex justify-center items-center'>
                                    <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default w-[30%] text-center rounded-xl bg-brown text-whites'>submit</h3>
                                </div>
                                <div className='w-full h-[10%] px-2'>
                                    <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] font-[500] w-[55%] capitalize font-default text-brown' onClick={handleSignIn}>already have an account? click to sign in</h3>
                                </div>
                            </form>
                        }
                    </div>
                    <div className='w-[15%]'></div>
                </div>
                <div className='w-full h-[14svh]'></div>
                <footer className='w-full h-[20svh] bg-lightBrown'>
                    <div className='w-full h-[10%] flex justify-center items-center'>
                        <hr className='border-2 border-whites w-[90%]' />
                    </div>
                    <div className='w-full h-[90%] flex'>
                        <div className='w-[40%] h-full border border-white flex justify-center items-center'>
                            <img src={Logo} alt="img" className='w-[70%] h-auto' />
                        </div>
                        <div className='w-[60%] h-full border border-white'>
                            <div className='w-full h-[32%] border border-white'>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-600 '>head office:</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-500 '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-500 '>0901125568, 0917783556</h3>
                            </div>
                            <div className='w-full h-[32%] border border-white'>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-600 '>head office:</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-500 '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-500 '>0901125568, 0917783556</h3>
                            </div>
                            <div className='w-full h-[32%] border border-white'>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-600 '>head office:</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-500 '>kilometer3, ilupeju rd, off alyanju estate ogun state</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-500 '>0901125568, 0917783556</h3>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MobileUserLogin