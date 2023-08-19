import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar, circularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const [fullBody, setFullBody] = useState(0);
  const [piercing,setPiercing] = useState(0)
  const [fullColor, setFullColor] = useState(0);
  const [temp,setTemp] = useState(0)

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
      setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
            }
            if (temp < 95) {
              setTemp(temp + 1);
                }
      }, 50)
    } else {
      setFullBody(0)
      setPiercing(0)
      setFullColor(0)
      setTemp(0)
    }
  }, [inView, fullBody,piercing,fullColor,temp])

  const styles = {
    path: {
      stroke: '#111111'
    },
    trail: {
      stroke: '#eeeeee'
    },
    text: {
      fill: '#111111',
      fontSize: '24px'
    }
  }
  return (
    <motion.section ref={ref} className='section font-primary' variants={fadeIn('up')} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.1}} >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-y-12 gap-x-10'>
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles}
              text={`${fullBody}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>Full Body Tattoo</div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar strokeWidth={1} value={piercing} styles={styles}
              text={`${piercing}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>Safely Piercing</div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar strokeWidth={1} value={fullColor} styles={styles}
              text={`${fullColor}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>Full  Color Tattoo</div>
          </div>
                <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1} value={temp} styles={styles}
          text={`${temp}%`}
          />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Temporary Tattoo</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

