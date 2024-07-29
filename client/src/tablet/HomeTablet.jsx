import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BG from '../images/1.png'
import Logo from '../images/logo.png'
import img2 from '../images/2.png'
import img3 from '../images/23.png'
import Group1 from '../images/Mask-Group-1.png'
import Group2 from '../images/Mask-Group.png'
import Group3 from '../images/Mask-Group-3.png'
import { FaUser, FaCartPlus, FaPinterest, FaLinkedin, FaTwitter, FaHome, FaHandHoldingHeart, FaFirstAid } from 'react-icons/fa'
import styles from '../styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSecionOne } from '../redux/desktopSlice'


const HomeTablet = () => {

  const dispatch = useDispatch()

  const sectionOneElements = useSelector(function (state) {
    return state.deskopHome.sectionOne
  });
  const cartNumber = useSelector(function (state) {
    return state.deskopHome.cart.length
  });
  // const sectionTwoElements = useSelector(function (state) {
  //   return state.deskopHome.sectionOne
  // })
  useEffect(function () {
    const scrollEvnt = function () {
      const coordinate = window.scrollY
      if (coordinate > 150 && sectionOneElements === false) {
        dispatch(setSecionOne(!sectionOneElements))
      } if (sectionOneElements === true && coordinate > 150) {
        window.onscroll = null
      }
    }
    window.onscroll = scrollEvnt
  }, [])
  return (
    <div className='sm:hidden md:block lg:hidden selection:bg-brown'>
      <div className='w-full h-100svh bg-whites fixed'>
        <img src={BG} alt="background" className='fixed w-[100%] h-auto bg-no-repeat object-contain' />
      </div>
      <div className='w-full h-[10svh] bg-whites absolute top-[0%] flex'>
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
      <div className='w-full h-[35svh] absolute bg-transparent top-[15%] flex'>
        <div className='w-[50%] h-full'>
          <div className='w-full h-[85%] flex'>
            <div className='w-[30%] h-full'></div>
            <div className='w-[70%] h-full'>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>“Next Step Your Poultry”</h3>
              <h3 className='text-[calc(1px_+_2svw_+_2svh)] capitalize font-default font-[500 leading-[100%]'>The Poultry
                Farm Company</h3>
              <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-default font-[500]'>Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat.</h3>
              <div className='w-[30svw] h-[2svh]'> </div>
              <Link to={'/marketplace'} className='w-[9svw] h-[2.7svh] rounded-full flex justify-center items-center bg-brown  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:bg-black hover:text-whites transition-all duration-[.5s]'>
                <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-default font-[500] '>view store</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full'></div>
      </div>
      <div className='w-full h-[200svh] bg-whites absolute top-[60%] flex'>
        {sectionOneElements ?
          <div className='w-full h-[40svh] absolute top-[-3%]'>
            <div className={`${sectionOneElements ? `${styles.section_one_Tablet} left-[15%] px-2 bg-white hover:shadow-lg hover:shadow-slate-400 cursor-pointer` : ''}`}>
              <FaHome className='text-[calc(1px_+_1svw_+_1svh)] fill-brown h-[30%]' />
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</h3>
            </div>
            <div className={`${sectionOneElements ? `${styles.section_one_Tablet} left-[40%] px-2 bg-white hover:shadow-lg hover:shadow-slate-400 cursor-pointer` : ''}`}>
              <FaHandHoldingHeart className='text-[calc(1px_+_1svw_+_1svh)] fill-brown h-[30%]' />
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</h3>
            </div>
            <div className={`${sectionOneElements ? `${styles.section_one_Tablet} left-[65%] px-2 bg-white hover:shadow-lg hover:shadow-slate-400 cursor-pointer` : ''}`}>
              <FaFirstAid className='text-[calc(1px_+_1svw_+_1svh)] fill-brown h-[30%]' />
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</h3>
            </div>
          </div>
          : ''}
        <div className='w-full h-[40svh] flex justify-center items-center top-[8%] absolute'>
          <div className='w-[75%] h-full flex '>
            <div className='w-[50%] h-full '>
              <img src={img2} alt="img" className='object-cover w-full h-full' />
            </div>
            <div className='w-[50%] h-full flex'>
              <div className='w-[10%] h-full'></div>
              <div className='w-[90%] h-full'>
                <div className='w-full h-[15%]'></div>
                <h3 className='text-[calc(1px_+_1.7svw_+_1.7svh)] capitalize font-[700] font-default'>clean and fragment farm</h3>
                <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.5svw_+_.5svh)]  capitalize font-default font-[500]'>Amet minim mollit non deserunt ullamco est sit aliqua
                  Amet minim mollit non deserunt ullamco est sit aliqua
                  dolor do amet sint. Velit officia consequat..</h3>
                <br />
                <Link to={'/marketplace'} className='w-[9svw] h-[3.5svh] rounded-full flex justify-center items-center bg-brown  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:bg-black hover:text-whites transition-all duration-[.5s]'>
                  <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-default font-[500] '>view store</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[60svh] absolute top-[27%] flex justify-center items-center'>
          <div className='w-[50%] h-full flex'>
            <div className='w-[25%] h-full'></div>
            <div className='w-[75%] h-full'>
              <div className='w-full h-full'>
                <div className='w-full h-[15%]'></div>
                <h3 className='text-[calc(1px_+_1.7svw_+_1.7svh)]  capitalize font-[700] font-default'>clean and fragment farm</h3>
                <h3 className='w-[70%] text-slate-500 text-[calc(1px_+_.7svw_+_.7svh)] capitalize font-default font-[500]'>Amet minim mollit non deserunt ullamco est sit aliqua
                  Amet minim mollit non deserunt ullamco est sit aliqua
                  dolor do amet sint. Velit officia consequat..</h3>
                <br />
                <Link to={'/marketplace'} className='w-[9svw] h-[3.5svh] rounded-full flex justify-center items-center bg-brown  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:bg-black hover:text-whites transition-all duration-[.5s]'>
                  <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] capitalize font-default font-[500] '>view store</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-[50%] h-full flex'>
            <div className='w-[85%] h-full'>
              <img src={img3} alt="img" className='w-[75%] h-auto object-contain' />
            </div>
            <div className='w-[15%] h-full'></div>
          </div>
        </div>
        <div className='w-full h-[30svh] absolute top-[45%] flex justify-center items-start'>
          <h3 className='flex flex-col justify-center items-center'>
            <span className='text-[calc(1px_+_1.1svw_+_1.1svh)] capitalize font-default font-[700] flex justify-center'>Team</span>
            <span className='text-[calc(1px_+_1.7svw_+_1.7svh)] capitalize font-default font-[700] flex justify-center'>Our Popular Farm</span>
            <span className='text-[calc(1px_+_.75svw_+_.75svh)] text-center text-slate-400 capitalize font-default font-[500] flex justify-center w-[50%]'>
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat.
            </span>
          </h3>
        </div>
        <div className='w-full h-[40svh] absolute top-[53%] flex justify-center'>
          <div className='w-[80%] h-full flex justify-evenly items-center'>
            <div className='w-[25%] h-[70%] rounded-[1rem] shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 hover:cursor-pointer'>
              <div className='w-full h-[70%] flex items-center justify-center'>
                <img src={Group1} alt="img" className='w-[60%] h-auto' />
              </div>
              <div className='w-full h-[30%]'>
                <h3>
                  <span className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[700] flex justify-center'>oke raymond</span>
                  <span className='text-[calc(1px_+_.8svw_+_.8svh)] text-slate-400 capitalize font-default font-[500] flex justify-center'>managing director</span>
                  <span className='flex justify-evenly px-[20px] '>
                    <FaPinterest className='fill-[#e92e2e] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                    <FaTwitter className='fill-[#00456d] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                    <FaLinkedin className='fill-[#84dcff] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                  </span>
                </h3>
              </div>
            </div>
            <div className='w-[25%] h-[70%] rounded-[1rem] shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 hover:cursor-pointer'>
              <div className='w-full h-[70%] flex items-center justify-center'>
                <img src={Group2} alt="img" className='w-[60%] h-auto' />
              </div>
              <div className='w-full h-[30%]'>
                <h3>
                  <span className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[700] flex justify-center'>babatunde ibukun</span>
                  <span className='text-[calc(1px_+_.8svw_+_.8svh)] text-slate-400 capitalize font-default font-[500] flex justify-center'>board member</span>
                  <span className='flex justify-evenly px-[20px] '>
                    <FaPinterest className='fill-[#e92e2e] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                    <FaTwitter className='fill-[#00456d] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                    <FaLinkedin className='fill-[#84dcff] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                  </span>
                </h3>
              </div>
            </div>
            <div className='w-[25%] h-[70%] rounded-[1rem] shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 hover:cursor-pointer'>
              <div className='w-full h-[70%] flex items-center justify-center'>
                <img src={Group3} alt="img" className='w-[60%] h-auto' />
              </div>
              <div className='w-full h-[30%]'>
                <h3>
                  <span className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[700] flex justify-center'>oke raymond</span>
                  <span className='text-[calc(1px_+_.8svw_+_.8svh)] text-slate-400 capitalize font-default font-[500] flex justify-center'>managing director</span>
                  <span className='flex justify-evenly px-[20px] '>
                    <FaPinterest className='fill-[#e92e2e] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                    <FaTwitter className='fill-[#00456d] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                    <FaLinkedin className='fill-[#84dcff] text-[calc(1px_+_.8svw_+_.8svh)] ' />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[30svh] absolute top-[73%] flex justify-center items-center'>
          <div className='w-[70%] h-[70%]'>
            <div className='w-full h-[70%] flex flex-col justify-center items-center '>
              <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[500] font-default flex justify-center capitalize '> new letter</h3>
              <h3 className='text-[calc(1px_+_1.75svw_+_1.75svh)] font-[700] font-default flex justify-center capitalize '> Get Quality Poultry Fram</h3>
              <h3 className='text-[calc(1px_+_.5svw_+_.5svh)] text-slate-400 text-center font-[700] font-default flex justify-center capitalize '> Amet minim mollit non deserunt ullamco est sit aliqua
                <br /> dolor do amet sint. Velit officia consequat.</h3>
            </div>
            <div className='w-full h-[30%]'>
              <form action="" className='w-full h-full flex justify-center items-center'>
                <div className='w-[70%] h-[40%] flex rounded-xl'>
                  <input type="text" name="email" id="" className='w-[80%] outline-none rounded-s-xl border border-black' required />
                  <div className='w-[20%] h-full text-[calc(1px_+_.7svw_+_.7svh)] text-whites capitalize font-[600] flex justify-center items-center border border-black rounded-e-xl bg-brown hover:cursor-pointer hover:bg-black'>submit</div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className='w-full h-[20svh] absolute top-[89%] bg-lightBrown'>
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

export default HomeTablet