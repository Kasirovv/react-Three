import React from 'react'
import stadium from './stadium.png'

function Cards() {
  return (
    <section className='flex flex-col space-y-3 p-[5vh]'> 
    <section>
      <img src={stadium} alt="" />
    </section>
    <hr className='w-[100px] h-[2.5vh] bg-[#F7654A]' />
    <section>
      <p  className='text-[25px] font-bold'>Газпром Арена</p>
      <p  className='text-[#999999]'>
      Мы сделали самую красивую арену в <br /> 
      Европе. Это открытие стало для нас <br />
      прорывной точкой для разивтия на <br />
      следующие десятилетия. Мы очень рады <br />
      данному еву.
      </p>
    </section>
</section>
  )
}

export default Cards