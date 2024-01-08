import React from 'react';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';

import heromobile from '../assets/images/heromobile.jpg';

const Hero = () => {
  return (
    <div className=' min-w-full bg-[#f0f7fa] py-4'> 
      <div className='hidden md:flex flex-row  bg-[#e0fbfc] '>
        <img rel='hero1' src={hero1} className='md:h-[32rem] w-1/2 rounded-lg'/>
        <img rel='hero2' src={hero2} className='md:h-[32rem] w-1/2 rounded-lg'/>
       
      </div>
      <div>
        <img rel='mobilehero' src={heromobile} className='md:hidden w-full h-[36rem]  bg-[#e0fbfc]'/>
      </div>
    </div>
  );
}

export default Hero;
