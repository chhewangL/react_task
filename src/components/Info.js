import React from 'react'

const Info = () => {
  return (
    <div className='space-y-3'>
      <h1 className='text-center text-lg font-bold'>Who am I</h1>
      <div className='bg-black text-white h-[300px] w-[300px] rounded-full border-[5px] border-green-700 mx-auto flex flex-col justify-center items-center'>
        <div>
          <h1>Name: John Carter</h1>
          <h1>Email: john@gmail.com </h1>
          <h1>Tel: 977XXXXXXX </h1>
          <h1>Age: 90</h1>
          <h1>Skills: Python, Java </h1>
        </div>

      </div>
    </div>
  )
}

export default Info