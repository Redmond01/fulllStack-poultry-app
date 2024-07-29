import React, { useEffect, useRef } from 'react';
import Styles from '../styles.module.css'
import Logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaCartPlus, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { updateSignInOrSignOut, updateUserCredentials } from '../redux/desktopSlice';
import axios from 'axios';

const DesktopUserLogin = () => {
  const dispatch = useDispatch()
  const navigationTo = useNavigate()
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
  const handleUserInput = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    dispatch(updateUserCredentials({ ...userCredentials, [name]: value }))
  }


  const handleCredentialSignIn = async () => {
    try {
      const url = 'http://localhost:5000/login'
      const SignUserIn = await axios.post(url, userCredentials)
      // const response = SignUserIn.data
      const finalCheck = SignUserIn.data
      // console.log(finalCheck)
      // if (response === 'user not found!') {
      //   alert('username or password not correct signup!')
      // }
      if(finalCheck){
        console.log(finalCheck)
      }
      // if (finalCheck === 200) {
        // const userCookies = SignUserIn.headers['set-cookie']
        // console.log(userCookies)
        // if (userCookies) {
        //   document.cookie = userCookies
        //   console.log(userCookies)
        // }
        // navigationTo('/cart')
      // }
    } catch (error) {
      console.log({ error: error })
    }
  }
  const handleCredentialSignUp = async () => {

    try {
      const url = 'http://localhost:5000/signup'
      const SignUserIn = await axios.post(url, userCredentials)
      const response = SignUserIn.status
      if (response.data === 'email exists') {
        alert('username already exists in our database')
      }
      if (response === 200) {
        alert('account created successfully now login credentials')
        dispatch(updateSignInOrSignOut(!signinOrSignup))
      }
    } catch (error) {
      console.log({ error: error })
    }
  }
  return (
    <div className='sm:hidden md:hidden lg:block selection:bg-brown'>
      <div className='w-full h-[155svh]  relative'>

        <div className={`w-full h-[15svh] bg-whites flex transition-all duration-500`}>
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
            {/* <div className='w-[50%] h-[70%] flex justify-center items-center'>
              <Link to={'/login'}><FaUser className='text-[calc(1px_+_.8svw_+_.8svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
            </div> */}
            <div className='w-[50%] h-[70%] flex justify-center items-center relative'>
              <Link to={'/cart'}><FaCartPlus className='text-[calc(1px_+_.8svw_+_.8svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[600] absolute top-[20%] right-[35%]'>{cartNumber}</h3>
            </div>
          </div>
        </div>


        <div className='w-full h-[75svh] flex justify-center'>
          <div className='w-[15%]'></div>
          <div className='w-[50%] flex justify-center '>

            {signinOrSignup ?
              <form className='w-[60%] h-full rounded-[3rem] border border-brown' onSubmit={handleCredentialSignIn}>
                <div className='w-full h-[15%] flex justify-center items-center'>
                  <h3 className='text-[calc(1px_+_2svw_+_2svh)] font-[700] capitalize font-default'>signIn account</h3>
                </div>
                <div className='w-full h-[10svh]'></div>
                <div className='w-full h-[18%] flex items-start flex-col'>
                  <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default w-[10%]'>username:</h3>
                  <div className='w-[10%]'></div>
                  <input type="text" name="username" id="" className='bg-brown h-[40%] w-[100%] outline-none rounded-xl text-whites' onChange={handleUserInput} />
                </div>
                {/* <div className='w-full h-[20%] flex items-center '>
                  <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default w-[10%]'>email:</h3>
                  <div className='w-[10%]'></div>
                  <input type="text" name="email" id="" className='bg-brown h-[40%] w-[100%] outline-none rounded-xl text-whites' onChange={handleUserInput} />
                </div> */}
                <div className='w-full h-[20%] flex items-start flex-col'>
                  <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default'>password:</h3>
                  <input type="text" name="password" id="" className='bg-brown h-[40%] w-[100%] outline-none rounded-xl text-whites' onChange={handleUserInput} />
                </div>
                <div className='w-full h-[20%] flex justify-center items-center flex-col'>
                  <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default w-[30%] text-center rounded-xl bg-brown text-whites hover:bg-black cursor-pointer' onClick={handleCredentialSignIn}>submit</h3>
                </div>
                <div className='w-full h-[10%] px-2'>
                  <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] font-[500] w-[55%] capitalize font-default text-brown hover:text-black cursor-pointer' onClick={handleSignIn}>dont have an account? click to sign up</h3>
                </div>
              </form> :
              <form className='w-[60%] h-full rounded-[3rem] border border-brown' onSubmit={handleCredentialSignUp} method='POST'>
                <div className='w-full h-[15%] flex justify-center items-center flex-col'>
                  <h3 className='text-[calc(1px_+_1.7svw_+_1.7svh)] font-[700] capitalize font-default'>signUp account</h3>
                </div>
                <div className='w-full h-[5svh]'></div>
                <div className='w-full h-[15%] flex items-start flex-col '>
                  <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-[700] capitalize font-default w-[10%]'>username:</h3>
                  <div className='w-[10%]'></div>
                  <input type="text" name="username" id="" className='bg-brown h-[40%] w-full outline-none rounded-xl text-whites' onChange={handleUserInput} />
                </div>
                <div className='w-full h-[15%] flex items-start flex-col '>
                  <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-[700] capitalize font-default w-[10%]'>email:</h3>
                  <div className='w-[10%]'></div>
                  <input type="text" name="email" id="" className='bg-brown h-[40%] w-full outline-none rounded-xl text-whites' onChange={handleUserInput} />
                </div>
                <div className='w-full h-[15%] flex items-start flex-col'>
                  <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-[700] capitalize font-default'>password:</h3>
                  <input type="text" name="password" id="" className='bg-brown h-[40%] w-full outline-none rounded-xl text-whites' onChange={handleUserInput} />
                </div>
                <div className='w-full h-[20%] flex justify-center items-center flex-col'>
                  <h3 className='text-[calc(1px_+_1.1svw_+_1.1svh)] font-[700] capitalize font-default w-[30%] text-center rounded-xl bg-brown text-whites hover:bg-black cursor-pointer' onClick={handleCredentialSignUp}>submit</h3>
                </div>
                <div className='w-full h-[10%] px-2'>
                  <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] font-[500] w-[55%] capitalize font-default text-brown hover:text-black cursor-pointer' onClick={handleSignIn}>already have an account? click to sign in</h3>
                </div>
              </form>
            }
          </div>
          <div className='w-[15%]'></div>
        </div>
        <footer className='w-full h-[60svh]  bg-lightBrown'>
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

export default DesktopUserLogin