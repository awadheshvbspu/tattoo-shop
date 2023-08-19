import React from 'react';
import { navData } from '../data';
import Socials from './Socials';

export default function NavMobile() {
  const {items} =navData;
  return (
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
    <ul className='flex flex-col justify-center items-center gap-y-6'>
    {items.map((items,i)=>{
      return(
        <li key={i}>
        <a href={items.href} className='text-2xl font-primary'>{items.name}</a>
        </li>
      )
    })}
    </ul>
    <div className='text-2xl'>
    <Socials/>
    </div>
    <div>
    </div>
    
    </nav>
  )
}

