import React, { useState } from 'react'
import {interviewData} from '../data';
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

export default function Interview() {
  const [isOpen,setisOpen] = useState(false)
  const {title,btnIcon,btnText} = interviewData;
  return (
    <motion.section className='bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]'
    variants={fadeIn('up')} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }}
    >
    <div className='container mx-auto'>
    <div className='flex flex-col justify-center h-full'>
    <div className='flex flex-col items-start max-w-[880px]'>
    <h3 className='text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8'>{title}</h3>
    <div
    onClick={()=>setisOpen(true)}
    className='flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition-all'>
    <div className='w-[70px] h-70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
    <div className='bg-white w-full h-full rounded-full flex justify-center items-center'>
    <div className='pl-1'>{btnIcon}</div>
    </div>
    <div className='font-primary'>{btnText}</div>
    </div>
    </div>
    </div>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='QoaDkejcHSc' onClose={()=>setisOpen(false)}/>
    </div>
    </div>
    
    </motion.section>
  )
}

