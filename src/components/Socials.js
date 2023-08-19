import React from 'react';
import { socialData} from '../data'

export default function Socials() {
  return (
    <ul className='flex justify-center items-center gap-x-5'>
    {socialData.map((item,i)=>{
      return(
        <li key={i}>
        <a href={item.href}>{item.icon}</a>
        </li>
      )
    })}
    </ul>
  )
}

