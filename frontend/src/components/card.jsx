import React from 'react'
import card1 from '../assets/images/card1.webp';
import card2 from '../assets/images/card2.webp';
import card3 from '../assets/images/card3.webp';
const Card = () => {
  return (
    <div className='bg-[#f0f7fa] flex flex-col items-center'>
        <h3 className="font-semibold text-2xl py-3 text-red-700 hover:text-yellow-600">Hand Bags Category</h3>
        <p className='font-medium text-lg text-yellow-900'>Strongest and the best !</p>
        <div className='hidden md:flex flex-row px-4 gap-2'>

<img rel='card1' src={card1} className='w-1/3 rounded-lg'/>
<img rel='card2' src={card2} className='w-1/3 rounded-lg'/>
<img rel='card3' src={card3} className='w-1/3 rounded-lg'/>
        </div>
        <img rel='card1' src={card1} className='w-full h-[36rem] rounded-lg md:hidden'/>
        <ul className='flex flex-row text-lg w-full justify-between  font-semibold cursor-pointer mt-2 mb-4'>
            <li className='bg-[#fdf0d5] px-14 py-4 rounded-lg text-[#e63946] '>International from the best</li>
            <li className='hidden md:block bg-[#fdf0d5] px-14 py-4 rounded-lg text-[#e63946]'>National from the locals</li>
            <li className='hidden md:block bg-[#fdf0d5] px-14 py-4 rounded-lg text-[#e63946]'>Unique handcrafted once</li>
        </ul>
    </div>
  )
}

export default Card
