import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center gap-5 sm:grid-cols-1' >
      <div>
        <lottie-player src="https://lottie.host/11335867-e44d-41d5-949f-c023626d6738/U4nF5tYotT.json" background="#ffffff" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
      </div>
      <div>
        <h1 className='text-lg '>Hi, I am John</h1>
        <h2 className='text-pink-700 py-3'>Some Dev, Freelancer, Rounder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>

      </div>

    </div>
  )
}

export default Display