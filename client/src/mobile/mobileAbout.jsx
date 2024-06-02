import React, { useEffect, useRef } from 'react';
import styles from '../styles.module.css';
import Logo from '../images/logo.png';
import Bg from '../images/comp4.png';
import { FaAlignJustify, FaTimes, FaStopwatch, FaFirstAid, FaBus, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { updateMobileSideBar } from '../redux/desktopSlice';
import { useDispatch, useSelector } from 'react-redux';

const MobileAbout = () => {
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
    dispatch(updateMobileSideBar(sideBar))
    const url = location.pathname
    if (url === saveCurrentuRL) {
      dispatch(updateMobileSideBar(!sideBar))
    }
  }, [])
  return (
    <div className='sm:block md:hidden lg:hidden'>
      <div className='w-full h-[200svh] bg-whites relative'>
        <div className='w-full h-[10svh] bg-whites flex justify-between items-center px-[2rem]'>
          <Link to={'/'} className='w-[90%]' onClick={function () { dispatch(updateMobileSideBar(!sideBar)) }}> <img src={Logo} alt="img" className='w-[15%] h-auto' /></Link>
          <FaAlignJustify className=' w-[10%] text-[calc(1px_+_2.5svw_+_2.5svh)] text-black' onClick={handleSidebar} />
        </div>
        <div className={`${sideBar ? styles.mobileSideBarOff : styles.mobileSideBarOn} transition-all duration-500 bg-slate-400`}>
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
            <hr className='border-2 border-whites w-full' />
            <Link to={'/login'}> <div className='w-full h-full flex justify-center items-start'>
              <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] capitalize font-default font-[400] text-whites'> login</h3>
            </div></Link>
          </div>
        </div>
        <div className='w-full h-[40svh] relative'>
          <img src={Bg} alt="img" className='w-full h-full' />
          <div className='w-full h-full absolute top-0'>
            <div className='w-[70%] h-[85%] flex flex-col justify-end px-[2rem]'>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>“Next Step Your Poultry”</h3>
              <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] capitalize font-default font-[500'>Best Poultry Farm Services</h3>
              <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-default font-[500]'>Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
            </div>
            <Link to={'/marketplace'}><div className='w-full h-[15%] px-[2rem] flex items-center'>
              <h3 className='w-[20svw] h-[50%] bg-brown text-whites rounded-full flex justify-center items-center text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>view store</h3>
            </div></Link>
          </div>
        </div>
        <div className='w-full h-[30svh] flex'>
          <div className='w-[15%] h-full'></div>
          <div className='w-[70%] h-full flex flex-wrap'>
            <div className='w-[48%] h-[48] flex flex-col justify-center items-center leading-[150%] '>
              <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>30k</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>happy customers</h3>
            </div>
            <div className='w-[48%] h-[48] flex flex-col justify-center items-center leading-[150%] '>
              <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>75k</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>monthly visitors</h3>
            </div>
            <div className='w-[48%] h-[48] flex flex-col justify-center items-center leading-[150%] '>
              <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>12k</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>customers reviews</h3>
            </div>
            <div className='w-[48%] h-[48] flex flex-col justify-center items-center leading-[150%] '>
              <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>4k</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>services rendered</h3>
            </div>
          </div>
          <div className='w-[15%] h-full'></div>
        </div>
        <div className='w-full h-[40svh]  flex'>
          <div className='w-[10%] h-full'></div>
          <div className='w-[80%] h-full flex flex-col justify-center items-center '>
            <div className='wfull h-full flex justify-center items-center'>
              <div className='w-[90%] h-[90%] rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-[.5s]'>
                <div className='w-full h-[15%]'></div>
                <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                  <div>
                    <FaStopwatch className='text-[calc(.8px_+_3.8vw_+_3.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                  </div>
                  <h3 className='text-black text-[calc(.8px_+_2.2vw_+_2.2svh)] capitalize font-default font-[500]'>This is the heading</h3>
                  <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_1vw_+_1svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor do amet sint Veli.</h3>
                </div>
                <div className='w-full h-[15%]'></div>
              </div>
            </div>
          </div>
          <div className='w-[10%] h-full'></div>
        </div>
        <div className='w-full h-[40svh]  flex'>
          <div className='w-[10%] h-full'></div>
          <div className='w-[80%] h-full flex flex-col justify-center items-center '>
            <div className='wfull h-full flex justify-center items-center'>
              <div className='w-[90%] h-[90%] rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-[.5s]'>
                <div className='w-full h-[15%]'></div>
                <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                  <div>
                    <FaFirstAid className='text-[calc(.8px_+_3.8vw_+_3.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                  </div>
                  <h3 className='text-black text-[calc(.8px_+_2.2vw_+_2.2svh)] capitalize font-default font-[500]'>This is the heading</h3>
                  <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_1vw_+_1svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor do amet sint Veli.</h3>
                </div>
                <div className='w-full h-[15%]'></div>
              </div>
            </div>
          </div>
          <div className='w-[10%] h-full'></div>
        </div>
        <div className='w-full h-[40svh]  flex'>
          <div className='w-[10%] h-full'></div>
          <div className='w-[80%] h-full flex flex-col justify-center items-center '>
            <div className='wfull h-full flex justify-center items-center'>
              <div className='w-[90%] h-[90%] rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-[.5s]'>
                <div className='w-full h-[15%]'></div>
                <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                  <div>
                    <FaBus className='text-[calc(.8px_+_3.8vw_+_3.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                  </div>
                  <h3 className='text-black text-[calc(.8px_+_2.2vw_+_2.2svh)] capitalize font-default font-[500]'>This is the heading</h3>
                  <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_1vw_+_1svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor do amet sint Veli.</h3>
                </div>
                <div className='w-full h-[15%]'></div>
              </div>
            </div>
          </div>
          <div className='w-[10%] h-full'></div>
        </div>
        <div className='h-[5svh] w-full'></div>
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

export default MobileAbout