import React from 'react';
import {contactData} from '../data';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

export default function Contact() {
  const {title,info,form} = contactData
  return (
    <section className='section'>
    <div className='container mx-auto'>
    <div className='flex flex-col xl:flex-row gap-y-16'>
    <motion.div className='flex-1'  variants={fadeIn('right')} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.4}}>
    <h2 className='h2 max-w-[490px]'>{title}</h2>
    <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:ga-y-0'>
    {info.map((item,i)=>{
      const {title,subtitle,address,phone,email,link} =item
      return(
        <div key={i} className=' '>
        <div className='font-primary uppercase font-medium text-xl  mb-3'>
        {title}
        </div>
        <div className='font-primary mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{subtitle}</div>
        <div className='flex flex-col gap-y-3 mb-8'>
        <div className='flex items-center gap-[10px]'>
        <div className=''>{address.icon}</div>
        <div className='font-medium'>{address.name}</div>
        </div>
        <div className='flex items-center gap-[10px]'>
        <div>{phone.icon}</div>
        <div className='font-medium'>{phone.number}</div>
        </div>
        <div className='flex items-center gap-[10px]'>
        <div>{email.icon}</div>
        <div className='font-medium'>{email.address}</div>
        </div>
        </div>
        <a href='#' className='font-medium border-b border-dark'>{link}</a>
        </div>
      )
    })}
    </div>
    </motion.div>
    <motion.div 
    variants={fadeIn('left')} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.4}}
    className='flex-1 xl:pl-[40px] flex justify-center items-center'>
    <form className='flex flex-col gap-y-10 w-full'>
    <input type='text' placeholder={form.name} className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' />
    <input type='text' placeholder={form.email} className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' />
    <input type='text' placeholder={form.message} className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' />
    <button className='btn btn-sm btn-dark self-start'>{form.btnText}</button>
    </form>
    </motion.div>
    </div>
    </div>
    
    </section>
  )
}

