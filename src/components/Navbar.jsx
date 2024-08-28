import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineVideoCall } from "react-icons/md";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MdNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import '../App.css'
export default function Navbar() {
    const [hidden, sethidden] = useState('hidden');
    const [hide, sethide] = useState('hidden');
    const hideVoice = () => {
        sethide(hide === 'hidden' ? '' : 'hidden');
    }
    const accounthidden=()=>{
        sethidden(hidden === 'hidden' ? '':'hidden');
    }
    return (
        <div>
            <div>
                <div className=' ml-7 flex justify-start'>
                    <div>
                        <FontAwesomeIcon icon={faBars} className='mt-5 text-xl font-thin' />
                    </div>
                    <div>
                        <i className="fa-brands fa-youtube text-2xl text-red-500 ml-7 mt-3"></i>
                    </div>
                    <div>
                        <p className='mt-4 ml-1 font-semibold text-base'>YouTube</p>
                    </div>
                    <div>
                        <p className='font-thin text-[10px] mt-3 ml-1 text-gray-300'>PK</p>
                    </div>
                    <div className="ml-44 mt-2 w-[600px] flex items-center text-white rounded-full bg-transparent shadow-md border border-gray-700">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent flex-grow px-4  rounded-l-full border-none focus:outline-none"
                        />
                        <button className="p-2 w-[60px] rounded-r-full bg-zinc-800 focus:outline-none">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                    </div>
                    <div className='w-[200px] relative'>
                        <div className='cursor-pointer mt-2 ml-3 bg-zinc-800 rounded-full w-10 h-10 flex justify-center hover:bg-zinc-700'>
                            <i onMouseEnter={hideVoice} onMouseLeave={hideVoice} className="fa-solid fa-microphone text-lg mt-1.5 ml-3 w-16 h-10"></i>
                            <div className={`absolute w-full ${hide}  duration-300 z-20`}>
                                <p className='absolute text-[12px] px-4 font-thin mt-14 py-2 ml-6 p-1 bg-zinc-500 rounded w-[200] text-white'>Search with your voice</p>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer mt-4 text-2xl ml-6'>
                        <MdOutlineVideoCall className='font-thin' />
                    </div>
                    <div className='cursor-pointer mt-4 text-2xl ml-6'>
                        <MdNotificationsNone />
                    </div>
                    <div onClick={accounthidden}  className='mt-3 text-4xl ml-8 cursor-pointer'>
                        <FaUserCircle />
                    </div>
                </div>
                <div className={`${hidden} z-50 overflow-y-auto fixed top-3 overflow-hidden bg-zinc-800 font-thin text-sm text-white ml-[980px] mr-[90px] rounded-xl flex justify-start p-3 h-full`}>
                    <div className='grid grid-cols-1'>
                        <div><p className='ml-2'><i className="fa-solid fa-circle-user text-3xl mr-3"></i>ChannelName</p></div>
                        <div className='ml-12 mt-1'><p>@username</p></div>
                        <div className='ml-12 mt-3 text-blue-400 cursor-pointer text-sm'><p>view your channel</p></div>
                        <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>
                        <div className='scroll-container'>
                        <div className='hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-brands fa-google"></i> &nbsp;&nbsp;&nbsp; Google Account</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-brands fa-twitch"></i>&nbsp;&nbsp;&nbsp; Switch Account<i className="fa-solid fa-circle-chevron-right ml-20"></i></p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;&nbsp;&nbsp; Sign Out</p></div>
                        <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>
                        <div className='hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-brands fa-square-youtube"></i>&nbsp;&nbsp;&nbsp; Youtube Studio</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-dollar-sign"></i>&nbsp;&nbsp;&nbsp; Purchases and Membership</p></div>
                        <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-user-tie"></i>&nbsp;&nbsp;&nbsp; Your data in Youtube</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-regular fa-moon"></i>&nbsp;&nbsp;&nbsp; Appearance:Device Theme</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-language"></i>&nbsp;&nbsp;&nbsp; Language:English</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-user-shield"></i>&nbsp;&nbsp;&nbsp; Restricted Mode:Off</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-globe"></i>&nbsp;&nbsp;&nbsp; Location:Pakistan</p></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-regular fa-keyboard"></i>&nbsp;&nbsp;&nbsp; Keyboard Shortcuts</p></div>
                        <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>
                        <div className='mt-4 hover:bg-zinc-600 cursor-pointer p-[2px]'><p><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;&nbsp; Settings</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}