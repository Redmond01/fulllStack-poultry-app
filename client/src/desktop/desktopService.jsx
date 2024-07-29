import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaUser, FaCartPlus, FaFirstAid, FaServicestack, FaStopwatch, FaSyringe, FaBus } from 'react-icons/fa';
import Bg from '../images/comp5.png';
import { useSelector } from 'react-redux';

const DesktopService = () => {
    const cartNumber = useSelector(function (state) {
        return state.deskopHome.cart.length
    });
    return (
        <div className='lg:block md:hidden sm:hidden selection:bg-brown'>
            <div className='w-full h-[100svh] flex flex-col  '>
                <img src={Bg} alt="img" className='fixed w-full h-auto' />
                {/* <img src={Bg1} alt="img" className='absolute top-[40%]' /> */}
            </div>


            <div className='w-full h-[450svh] absolute top-0'>
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
                        {/* <div className='w-[50%] h-[70%] flex justify-center items-center'>
                            <Link to={'/login'}><FaUser className='text-[calc(1px_+_.8svw_+_.8svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
                        </div> */}
                        <div className='w-[50%] h-[70%] flex justify-center items-center relative'>
                            <Link to={'/cart'}><FaCartPlus className='text-[calc(1px_+_.8svw_+_.8svh)] fill-black  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:fill-brown transition-all duration-[.5s]' /></Link>
                            <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[600] absolute top-[20%] right-[35%]'>{cartNumber}</h3>
                        </div>
                    </div>
                </div>


                <div className='w-full h-[40svh]'></div>

                <div className='w-full h-[60svh] flex justify-center items-center'>
                    <div className='w-[40%] h-full'>
                        <div className='w-full h-full flex'>
                            <div className='w-full h-full '>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[700]  '>“About Our Poultry Farm Service”</h3><br />
                                <h3 className='text-[calc(1px_+_3.7svw_+_3.7svh)] capitalize font-default font-[700] leading-[100%]'>Best Poultry
                                    Farm Services</h3>
                                <br />
                                <br />
                                <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.6svw_+_.6svh)] capitalize font-default font-[700] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                    dolor do amet sint. Velit officia consequat duis enim
                                    velit mollit. Exercitation veniam consequat.</h3>
                                <div className='w-[30svw] h-[2svh]'> </div>
                                <Link to={'/marketplace'} className='w-[12svw] h-[7svh] rounded-full flex justify-center items-center bg-brown  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:bg-black hover:text-whites transition-all duration-[.5s]'>
                                    <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>view store</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] h-full'></div>
                </div>
                <div className='w-full h-[320svh] bg-whites'>
                    <div className='w-full h-[5svh]'></div>
                    <div className='w-full h-[20svh] flex'>
                        <div className='w-[15%] h-full'></div>
                        <div className='w-[70%] h-full flex'>
                            <div className='w-[25%] h-full flex flex-col justify-center items-center leading-[400%] '>
                                <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>30k</h3>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>happy customers</h3>
                            </div>
                            <div className='w-[25%] h-full flex flex-col justify-center items-center leading-[400%] '>
                                <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>75k</h3>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>monthly visitors</h3>
                            </div>
                            <div className='w-[25%] h-full flex flex-col justify-center items-center leading-[400%] '>
                                <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>12k</h3>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>customers reviews</h3>
                            </div>
                            <div className='w-[25%] h-full flex flex-col justify-center items-center leading-[400%] '>
                                <h3 className='text-[calc(1px_+_3.8svw_+_3.8svh)] font-default font-[700] text-brown capitalize'>4k</h3>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-default font-[500] capitalize'>services rendered</h3>
                            </div>
                        </div>
                        <div className='w-[15%] h-full'></div>
                    </div>
                    <div className='w-full h-[10svh]'></div>
                    <div className='w-full h-[70svh] flex'>
                        <div className='w-[10%] h-full'></div>
                        <div className='w-[80%] h-full flex'>
                            <div className='w-[50%] h-full flex flex-col'>
                                <div className='w-full h-[10%]'></div>
                                <div className='w-full h-[40%]'>
                                    <h3 className='text-[calc(1px_+_3svw_+_3svh)] capitalize font-default font-[500] leading-[120%]'>Services <br />
                                        Fragrant Farm</h3>
                                </div>
                                <div className='w-full h-[20%]'>
                                    <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.8vw_+_.8svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do amet sint Veli.</h3>
                                </div>
                                <div className='w-full h-[20%]'>
                                    <Link to={'/marketplace'} className='w-[12svw] h-[7svh] rounded-full flex justify-center items-center bg-brown  hover:cursor-pointer hover:text-[calc(1px_+_.85svw_+_.85svh)] hover:bg-black hover:text-whites transition-all duration-[.5s]'>
                                        <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] capitalize font-default font-[500] '>view store</h3>
                                    </Link>
                                </div>
                                <div className='w-full h-[10%]'></div>
                            </div>
                            <div className='w-[50%] h-full flex justify-center items-center'>
                                <div className='w-[90%] h-[90%] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-[.5s]'>
                                    <div className='w-full h-[15%]'></div>
                                    <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                                        <div>
                                            <FaServicestack className='text-[calc(.8px_+_1.8vw_+_1.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                                        </div>
                                        <h3 className='text-black text-[calc(.8px_+_1.8vw_+_1.8svh)] capitalize font-default font-[500]'>This is the heading</h3>
                                        <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.8vw_+_.8svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                            dolor do amet sint Veli.</h3>
                                    </div>
                                    <div className='w-full h-[15%]'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] h-full'></div>
                    </div>
                    <div className='w-full h-[10svh]'></div>
                    <div className='w-full h-[70svh] flex'>
                        <div className='w-[10%] h-full'></div>
                        <div className='w-[80%] h-full flex'>
                            <div className='w-[50%] h-full flex justify-center items-center'>
                                <div className='w-[90%] h-[90%] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-[.5s]'>
                                    <div className='w-full h-[15%]'></div>
                                    <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                                        <div>
                                            <FaStopwatch className='text-[calc(.8px_+_1.8vw_+_1.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                                        </div>
                                        <h3 className='text-black text-[calc(.8px_+_1.8vw_+_1.8svh)] capitalize font-default font-[500]'>This is the heading</h3>
                                        <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.8vw_+_.8svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                            dolor do amet sint Veli.</h3>
                                    </div>
                                    <div className='w-full h-[15%]'></div>
                                </div>
                            </div>
                            <div className='w-[50%] h-full flex justify-center items-center'>
                                <div className='w-[90%] h-[90%] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-[.5s]'>
                                    <div className='w-full h-[15%]'></div>
                                    <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                                        <div>
                                            <FaFirstAid className='text-[calc(.8px_+_1.8vw_+_1.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                                        </div>
                                        <h3 className='text-black text-[calc(.8px_+_1.8vw_+_1.8svh)] capitalize font-default font-[500]'>This is the heading</h3>
                                        <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.8vw_+_.8svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                            dolor do amet sint Veli.</h3>
                                    </div>
                                    <div className='w-full h-[15%]'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] h-full'></div>
                    </div>
                    <div className='w-full h-[10svh]'></div>
                    <div className='w-full h-[70svh] flex'>
                        <div className='w-[10%] h-full'></div>
                        <div className='w-[80%] h-full flex'>
                            <div className='w-[50%] h-full flex justify-center items-center'>
                                <div className='w-[90%] h-[90%] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-[.5s]'>
                                    <div className='w-full h-[15%]'></div>
                                    <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                                        <div>
                                            <FaSyringe className='text-[calc(.8px_+_1.8vw_+_1.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                                        </div>
                                        <h3 className='text-black text-[calc(.8px_+_1.8vw_+_1.8svh)] capitalize font-default font-[500]'>This is the heading</h3>
                                        <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.8vw_+_.8svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                            dolor do amet sint Veli.</h3>
                                    </div>
                                    <div className='w-full h-[15%]'></div>
                                </div>
                            </div>
                            <div className='w-[50%] h-full flex justify-center items-center'>
                                <div className='w-[90%] h-[90%] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-[.5s]'>
                                    <div className='w-full h-[15%]'></div>
                                    <div className='w-full h-[60%] flex flex-col justify-center items-center'>
                                        <div>
                                            <FaBus className='text-[calc(.8px_+_1.8vw_+_1.8svh)] fill-brown hover:text-[calc(.8px_+_2.2vw_+_2.2svh)] hover:cursor-pointer transition-all duration-[.5s]' />
                                        </div>
                                        <h3 className='text-black text-[calc(.8px_+_1.8vw_+_1.8svh)] capitalize font-default font-[500]'>This is the heading</h3>
                                        <h3 className='w-[70%] text-slate-500 text-[calc(.8px_+_.8vw_+_.8svh)] capitalize font-default font-[500] leading-[200%]'>Amet minim mollit non deserunt ullamco est sit aliqua
                                            dolor do amet sint Veli.</h3>
                                    </div>
                                    <div className='w-full h-[15%]'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[10%] h-full'></div>
                    </div>
                    <div className='w-full h-[10svh]'></div>
                    <div className='w-full h-[50svh] flex justify-center items-center'>
                        <div className='w-[70%] h-[70%]'>
                            <div className='w-full h-[70%] flex flex-col justify-center items-center '>
                                <h3 className='text-[calc(1px_+_.8svw_+_.8svh)] font-[500] font-default flex justify-center capitalize '> new letter</h3>
                                <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] font-[700] font-default flex justify-center capitalize '> Get Quality Poultry Fram</h3>
                                <h3 className='text-[calc(1px_+_.7svw_+_.7svh)] text-slate-400 text-center font-[700] font-default flex justify-center capitalize '> Amet minim mollit non deserunt ullamco est sit aliqua
                                    <br /> dolor do amet sint. Velit officia consequat.</h3>
                            </div>
                            <div className='w-full h-[30%]'>
                                <form action="" className='w-full h-full flex justify-center items-center'>
                                    <div className='w-[70%] h-[40%] flex rounded-xl'>
                                        <input type="text" name="email" id="" className='w-[80%] outline-none rounded-s-xl border border-black' required />
                                        <div className='w-[20%] h-full text-[calc(1px_+_1svw_+_1svh)] text-whites capitalize font-[600] flex justify-center items-center border border-black rounded-e-xl bg-brown hover:cursor-pointer hover:bg-black'>submit</div>
                                    </div>
                                </form>
                            </div>
                        </div>
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

export default DesktopService