import React from 'react'
import { navData } from '../data'

export default function Nav() {
  const {items} = navData;
  return (
    <nav>
    <ul className='flex gap-x-14'>
    {items.map((item,i)=>{
      return(
        <li key={i}>
        <a href={item.href} className='link hover:border-b-2 hover:border-dark transition duration-300'>{item.name}</a>
        </li>
      )
    })}
    </ul>
    </nav>
  )
}

