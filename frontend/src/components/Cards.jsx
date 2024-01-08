
import React from 'react';
import cardsData from './index.js';

const Cards = () => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-between '>
        {cardsData.map((card) => (
          <div className='hidden md:block items-center justify-between p-4 mx-6 mt-6 rounded-lg' key={card.id}>
            <img rel='card' src={card.image} className='gap gap-4' alt={`Card ${card.id}`} />
            <p className='text-wrap mt-4 text-lg'>{card.tag}</p>
            <p className='text-xl font-sm mt-4 bg-slate-100 py-2 rounded-xl items.center'>
              <span className='items-center ml-16'>
                <span className='p-2'>Rs</span>
                {card.price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
