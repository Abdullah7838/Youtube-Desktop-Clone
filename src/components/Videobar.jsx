import React, { useRef } from 'react'
import { FaUserCircle, FaYoutube } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import '../App.css'
function Videobar() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className='mt-5 ml-8 flex items-center space-x-6 overflow-x-auto w-full scroll-headings' ref={scrollContainerRef}>
                <button
                    className="absolute z-10 bg-[#181818] h-10 text-white p-2 rounded-full"
                    onClick={scrollLeft}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div></div>
                <div className='flex-none ml-2 w-8 h-8 bg-white text-center rounded-md text-black text-sm cursor-pointer translate-x-0 duration-300'><p className='mt-2 '>All</p></div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'><p>Music</p></div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Gaming</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>News</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Entertainment</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Live</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Freestyle rap</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>India popup music</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Board games</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Comedy</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Ghazal</div>
                <div className='flex-none w-auto px-2 py-1 bg-zinc-700 text-center rounded-md text-white text-sm cursor-pointer hover:bg-zinc-500 translate-x-0 duration-300'>Action</div>
                <div className='flex-none w-auto px-2 py-1 ml-32   text-center rounded-md text-white text-sm'>..........</div>
                <button
                    className="absolute right-0 z-10 bg-[#181818] text-xl text-white p-2 rounded-full"
                    onClick={scrollRight}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className='mt-8 ml-12 grid grid-cols-3 gap-2 gap-y-10  overflow-y-auto h-screen video-scroller'>

                 {/* Youtube Video Thubnail and overview*/}
                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>
                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>
                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>
                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>

                <div className='w-[340px] cursor-pointer'>
                    <div><img className='w-[340px] h-[200px] rounded-2xl' src='hq720.webp' alt=''></img></div>
                    <div className='grid grid-cols-11 gap-2 mt-2 ml-2'>
                        <FaUserCircle className='text-3xl ' />
                        <p className='ml-2 col-span-9 font-semibold'>Title of the video will be displayed here...  </p>
                        <BsThreeDotsVertical className='col-span-1 text-lg ' />
                    </div>
                    <div className='flex items-center ml-11'><p className=' text-sm text-zinc-400 hover:text-white'>ChannleName</p><p className='ml-1 text-xs text-zinc-400'><FaCheckCircle /></p></div>
                    <div className='flex items-center ml-11'><p className='flex-none text-zinc-400 text-sm'>503k views</p><p className='font-bold text-lg text-zinc-400'><LuDot /></p><p className='text-zinc-400 text-sm '>3 years ago</p></div>
                </div>


<div></div><div></div>
                <div className='mt-80'></div>
                <div className='flex justify-center text-white'><FaYoutube className='text-red-700 text-2xl mx-2'/>The End</div>
            </div>
        </div>
    )
}

export default Videobar