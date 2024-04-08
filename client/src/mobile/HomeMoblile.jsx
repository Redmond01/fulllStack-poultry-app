import React, { useEffect, useRef } from 'react';
import styles from '../styles.module.css'
import Bg from '../images/1.png'
import Logo from '../images/logo.png'
import Img2 from '../images/2.png';
import Img3 from '../images/23.png';
import { FaAlignJustify, FaBicycle, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { updateMobileSideBar } from '../redux/desktopSlice';
import { useDispatch, useSelector } from 'react-redux';

const HomeMbobile = () => {
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
  return (
    <div className='sm:block md:hidden lg:hidden'>
      <div className='w-full h-[200svh] bg-whites relative'>
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
        <div className='w-full h-[45svh] relative'>
          <Link to={'/'}> <img src={Bg} alt="img" className='object-cover w-full h-full' /></Link>
          <div className='w-full h-full absolute top-0'>
            <div className='w-[70%] h-[85%] flex flex-col justify-center px-[2rem]'>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>“Next Step Your Poultry”</h3>
              <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] capitalize font-default font-[500'>The Poultry
                Farm Company</h3>
              <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-default font-[500]'>Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
            </div>
            <Link to={'/marketplace'}><div className='w-full h-[15%] px-[2rem] flex items-center'>
              <h3 className='w-[20svw] h-[50%] bg-brown text-whites rounded-full flex justify-center items-center text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>view store</h3>
            </div></Link>
          </div>
        </div>

        <div className='w-full h-[50svh] flex justify-center items-center'>
          <div className='w-[85%] h-[85%] flex justify-center items-center gap-3 flex-wrap'>
            <div className='w-[47%] h-[45%] rounded-lg bg-lightBrown'>
              <FaBicycle className='text-[calc(1px_+_1.7svw_+_1.7svh)] h-[20%]' />
              <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-default w-full h-[30%]'>The PoultryFarm Company</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default w-full h-[40%]'>dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
            </div>
            <div className='w-[47%] h-[45%] rounded-lg bg-lightBrown'>
              <FaBicycle className='text-[calc(1px_+_1.7svw_+_1.7svh)] h-[20%]' />
              <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-default w-full h-[30%]'>The PoultryFarm Company</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default w-full h-[40%]'>dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
            </div>
            <div className='w-[47%] h-[45%] rounded-lg bg-lightBrown'>
              <FaBicycle className='text-[calc(1px_+_1.7svw_+_1.7svh)] h-[20%]' />
              <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-default w-full h-[30%]'>The PoultryFarm Company</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default w-full h-[40%]'>dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
            </div>
            <div className='w-[47%] h-[45%] rounded-lg bg-lightBrown'>
              <FaBicycle className='text-[calc(1px_+_1.7svw_+_1.7svh)] h-[20%]' />
              <h3 className='text-[calc(1px_+_1svw_+_1svh)] font-default w-full h-[30%]'>The PoultryFarm Company</h3>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default w-full h-[40%]'>dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
            </div>
          </div>
        </div>
        <div className='w-full h-[50svh] flex flex-col'>
          <div className='w-full h-[50%] flex justify-center items-center gap-2'>
            <div className='w-[45%] h-full flex'>
              <img src={Img2} alt="img" className='w-full h-auto' />
            </div>
            <div className='w-[45%] h-full flex flex-col justify-center'>
              <h3 className='text-[calc(1px_+_2.0svw_+_2.0svh)] font-default font-[700] capitalize'>clean and fragment farm</h3>
              <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.4svw_+_.4svh)] capitalize font-default font-[400]'>Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat..</h3>
            </div>
          </div>
          <div className='w-full h-[50%] flex justify-center items-center gap-2'>
            <div className='w-[45%] h-full flex flex-col justify-center gap-3'>
              <h3 className='text-[calc(1px_+_2.0svw_+_2.0svh)] font-default font-[700] capitalize'>fresh egg and hen farm</h3>
              <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.4svw_+_.4svh)] capitalize font-default font-[400]'>Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat..</h3>
              <Link to={'/marketplace'} className='w-[15svw] h-[3svh] rounded-full flex justify-center items-center bg-brown'>
                <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] capitalize font-default font-[500] text-white'>view store</h3>
              </Link>
            </div>
            <div className='w-[45%] h-full flex'>
              <img src={Img3} alt="img" className='w-full h-auto' />
            </div>
          </div>
        </div>
        <div className='w-full h-[20svh] flex justify-center items-center'>
          <div className='w-[70%] h-[70%]'>
            <div className='w-full h-[70%] flex flex-col justify-center items-center '>
              <h3 className='text-[calc(1px_+_.6svw_+_.6svh)] font-[400] font-default flex justify-center capitalize '> new letter</h3>
              <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-[700] font-default flex justify-center capitalize '> Get Quality Poultry Fram</h3>
              <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] text-slate-400 text-center font-[700] font-default flex justify-center capitalize '> Amet minim mollit non deserunt ullamco est sit aliqua
                <br /> dolor do amet sint. Velit officia consequat.</h3>
            </div>
            <div className='w-full h-[30%]'>
              <form action="" className='w-full h-full flex justify-center items-center'>
                <div className='w-[90%] h-[70%] flex rounded-xl'>
                  <input type="text" name="email" id="" className='w-[80%] outline-none rounded-s-xl border border-black' required />
                  <div className='w-[20%] h-full text-[calc(1px_+_.8svw_+_.8svh)] text-whites capitalize font-[600] flex justify-center items-center border border-black rounded-e-xl bg-brown'>submit</div>
                </div>
              </form>
            </div>
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

export default HomeMbobile