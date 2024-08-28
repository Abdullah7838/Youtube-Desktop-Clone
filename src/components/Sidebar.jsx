import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgPlayListSearch } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineScissors } from "react-icons/hi2";
import { FaFireAlt } from "react-icons/fa";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { MdOutlinedFlag } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
function Sidebar() {
  return (
    <div className=' col-span-1 w-full bg-transparent h-screen scrollbar-hover overflow-y-auto overflow-x-hidden'>
    <div className='grid grid-cols-1 '>
      <div className='cursor-pointer mt-4 ml-2 p-1 rounded-md bg-zinc-700'><i className="fa-solid fa-house mr-7 text-xl"></i>Home</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><SiYoutubeshorts className='mr-7 text-xl' />Shorts</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><MdOutlineSubscriptions className='mr-7 text-xl' />Subscriptions</div>

      <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>

      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center font-bold'>You<RiArrowRightSLine className='text-xl' /></div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><MdOutlineSwitchAccount className='text-xl mr-6' />Your Channel</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><MdHistory className='text-xl mr-6' />History</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><CgPlayListSearch className='text-xl mr-6' />Playlists</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><BiSolidVideos className='text-xl mr-6' />Your Videos</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><MdOutlineWatchLater className='text-xl mr-6' />Watch later</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><AiOutlineLike className='text-xl mr-6' />Liked videos</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><HiOutlineScissors className='text-xl mr-6' />Your clips</div>

      <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>

      <div className='font-bold ml-6'>Subscriptions</div>
      <div className='mt-2'>
        <p>No subscription found</p>
      </div>

      <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>

      <div className='font-bold ml-6'>Explore</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><FaFireAlt className='text-xl mr-6' />Trending</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><IoMusicalNoteOutline className='text-xl mr-6' />Music</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><SiYoutubegaming className='text-xl mr-6' />Gaming</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><BsNewspaper className='text-xl mr-6' />News</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><GiTrophyCup className='text-xl mr-6' />Sports</div>

      <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>

      <div className='font-bold ml-6'>More From Youtube</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><FaYoutube style={{ color: 'red' }} className='text-xl mr-6' />Youtube Premium</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><SiYoutubestudio style={{ color: 'red' }} className='text-xl mr-6' />Youtube Studio</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><SiYoutubemusic style={{ color: 'red' }} className='text-xl mr-6' />Youtube Music</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><SiYoutubekids style={{ color: 'red' }} className='text-xl mr-6' />Youtube Kids</div>

      <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>

      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><CiSettings className='text-2xl mr-5' />Setting</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><MdOutlinedFlag className='text-2xl mr-5' />Report history</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><IoMdHelpCircleOutline className='text-2xl mr-5' />Help</div>
      <div className='cursor-pointer mt-2 ml-2 p-1 rounded-md hover:bg-zinc-700 flex items-center'><MdOutlineFeedback className='text-2xl mr-5' />Send feedback</div>

      <div className="border-t border-gray-500 mt-4 my-4 w-[400px]"></div>
      <div className='text-xs ml-5'>
        <div className='cursor-pointer'>About &nbsp; Press &nbsp; Copyright</div>
        <div className='cursor-pointer'>Contact us &nbsp; Creater </div>
        <div className='cursor-pointer'>Advertise &nbsp; Developer </div>
        <div className='mt-4'></div>
        <div className='cursor-pointer'>Terms &nbsp; Privacy &nbsp; Policy & Safety</div>
        <div className='cursor-pointer'>How Youtube works </div>
        <div className='cursor-pointer'>Test new features</div>
        <div className='mt-4'></div>
        <div>© 2024 Google LLC</div>
        <div className='mt-20'></div>


        <div></div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar