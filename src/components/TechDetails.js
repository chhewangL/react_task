import React from 'react'
import { DiAndroid, DiAngularSimple, DiHtml5, DiJava, DiJavascript, DiPython } from "react-icons/di";

const TechDetails = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold text-[30px] text-center py-5'>Technologies I use</h1>
      </div>
      <div className='grid grid-cols-4 gap-5 place-content-center md:grid-cols-2 sm:grid-cols-2 sm:space-x-3' >
        <DiAndroid color='green' size={150} className="hover:animate-bounce hover:ease-in hover:duration-100 hover:scale-150" />
        <DiJava color='yellow' size={150} className="hover:animate-bounce hover:ease-in hover:duration-100 hover:scale-150" />
        <DiAngularSimple color='red' size={150} className="hover:animate-bounce hover:ease-in hover:duration-100 hover:scale-150" />
        <DiHtml5 color='black' size={150} className="hover:animate-bounce hover:ease-in hover:duration-100 hover:scale-150" />
        <DiJavascript color='pink' size={150} className="hover:animate-bounce hover:ease-in hover:duration-100 hover:scale-150" />
        <DiPython color='brown' size={150} className="hover:animate-bounce hover:ease-in hover:duration-100 hover:scale-150" />
      </div>
    </div>
  )
}

export default TechDetails