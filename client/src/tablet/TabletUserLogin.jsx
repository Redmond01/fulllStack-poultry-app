import React, { useEffect, useRef } from 'react';
import Styles from '../styles.module.css'
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaUser, FaCartPlus, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { updateSignInOrSignOut } from '../redux/desktopSlice'

const TabletUserLogin = () => {
  const dispatch = useDispatch()
  const cartNumber = useSelector(function (state) {
    return state.deskopHome.cart.length
  });
  const userCredentials = useSelector(function (state) {
    return state.deskopHome.userCredentials
  });
  const signinOrSignup = useSelector(function (state) {
    return state.deskopHome.signInOrSignUp
  });

  const handleSignIn = () => {
    dispatch(updateSignInOrSignOut(!signinOrSignup))
  }
  return (
    <div className='sm:hidden md:block lg:hidden selection:bg-brown'>
      <div className='w-full h-[100svh]  relative'>

        <div className='w-full h-[8svh] bg-whites flex'>
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
            <div className='w-[50%] h-[70%] flex justify-center items-center'>
              <Link to={'/login'}> <FaUser className='text-[calc(1px_+_.65svw_+_.65svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
            </div>
            <div className='w-[50%] h-[70%] flex justify-center items-center relative'>
              <Link to={'/cart'}><FaCartPlus className='text-[calc(1px_+_.65svw_+_.65svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.69svw_+_.69svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
              <h3 className='text-[calc(1px_+_.65svw_+_.65svh)] font-[600] absolute top-[20%] right-[35%]'>{cartNumber}</h3>
            </div>
          </div>
        </div>
        <div className='w-full h-[57svh] flex'>
          <div className='w-[20%]'></div>
          <div className='w-[60%] flex justify-center  items-center'>
            {signinOrSignup ?
              <form className='w-[60%] h-[70%] rounded-[3rem] border border-brown'>
                <div className='w-full h-[10%]'></div>
                <div className='w-full h-[20%] flex justify-center items-center'>
                  <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[700] capitalize font-default'>signIn account</h3>
                </div>
                <div className='w-full h-[20%] flex items-center '>
                  <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[700] capitalize font-default w-[10%]'>email:</h3>
                  <div className='w-[15%]'></div>
                  <input type="text" name="email" id="" className='bg-brown h-[40%] w-[70%] outline-none rounded-xl text-whites' />
                </div>
                <div className='w-full h-[20%] flex items-center'>
                  <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[700] capitalize font-default'>password:</h3>
                  <input type="text" name="password" id="" className='bg-brown h-[40%] w-[70%] outline-none rounded-xl text-whites' />
                </div>
                <div className='w-full h-[15%] flex justify-center items-center'>
                  <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[700] capitalize font-default w-[30%] text-center rounded-lg bg-brown text-whites hover:bg-black cursor-pointer'>submit</h3>
                </div>
                <div className='w-full h-[10%] px-2'>
                  <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] font-[500] w-[65%] capitalize font-default text-brown hover:text-black cursor-pointer' onClick={handleSignIn}>dont have an account? click to sign up</h3>
                </div>
              </form> : <form className='w-[60%] h-[70%] rounded-[3rem] border border-brown'>
                <div className='w-full h-[10%]'></div>
                <div className='w-full h-[20%] flex justify-center items-center'>
                  <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[700] capitalize font-default'>signUp Account</h3>
                </div>
                <div className='w-full h-[20%] flex items-center '>
                  <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[700] capitalize font-default w-[10%]'>email:</h3>
                  <div className='w-[15%]'></div>
                  <input type="text" name="email" id="" className='bg-brown h-[40%] w-[70%] outline-none rounded-xl text-whites' />
                </div>
                <div className='w-full h-[20%] flex items-center'>
                  <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[700] capitalize font-default'>password:</h3>
                  <input type="text" name="password" id="" className='bg-brown h-[40%] w-[70%] outline-none rounded-xl text-whites' />
                </div>
                <div className='w-full h-[15%] flex justify-center items-center'>
                  <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[700] capitalize font-default w-[30%] text-center rounded-lg bg-brown text-whites hover:bg-black cursor-pointer'>submit</h3>
                </div>
                <div className='w-full h-[10%] px-2'>
                  <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] font-[500] w-[65%] capitalize font-default text-brown hover:text-black cursor-pointer' onClick={handleSignIn}>already have an account? click to sign in</h3>
                </div>
              </form>
            }
          </div>
          <div className='w-[20%]'></div>
        </div>
        <footer className='w-full h-[30svh] border border-green-600 bg-brown'>
          <div className='w-full h-[10%] border border-black flex justify-center items-center'>
            <hr className='border-2 border-whites w-[90%]' />
          </div>
          <div className='w-full h-[90%] border border-black'></div>
        </footer>
      </div>

    </div>
  )
}

export default TabletUserLogin