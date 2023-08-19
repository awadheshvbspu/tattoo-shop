import React, { useEffect, useState } from 'react';
import { headerData } from '../data';
import Nav from './Nav'
import NavMobile from './NavMobile';
import Social from './Socials';
import {TiThMenuOutline} from 'react-icons/ti';
import Socials from './Socials';

export default function Header() {

  const [isActive,setIsActive] = useState(false)
  const [navMobile,setNavMobile] = useState(false);

  useEffect(()=>{
window.addEventListener('scroll', ()=>{
  window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
})

  })
  const {logo} = headerData;
  return (
    <header className={`${isActive ? 'bg-white h-[100px] lg:h-[110px] shadow-lg' : ' bg-white h-[120px] lg:h-[150px]'} fixed left-0 right-0  z-10 max-w-[1920px] w-full mx-auto transition-all duration-500`}>
    <div className='flex justify-between items-center h-full  pl-[50px] pr-[60px]'>
    <a href='/'>
    <img src={logo} alt='' className='w-[188px] h-[90px]'/>
    </a>
    <div className='hidden lg:flex'>
    <Nav/>
    </div>
    <div onClick={()=>setNavMobile(!navMobile)}   className='xl:hidden absolute right-[5%]  bg-dark text-white p-2 rounded-md cursor-pointer'>
    <TiThMenuOutline className='text-3xl'/>
    </div>
    <div className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'} fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}>
    <NavMobile/>
    </div>
    <div className='hidden lg:flex'>
    <Socials/>
    </div>
    </div>
    </header>
  )
}

