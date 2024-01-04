import Image from 'next/image'
import React from 'react'



export default function ParentLogin({children,title,icon} : {children: React.ReactElement,title:string, icon?:string}){
  return (
    <div className='w-5/12 h-5/6 p-10 rounded-lg shadow-xl flex justify-center items-center flex-col m-10 ' style={{background:"rgba(255,255,255,0.5)"}}>
    {icon ? <Image
        width={10}
        height={10}
        src={icon}
        style={{width:'110px',height:'110px'}}
        alt=''
      /> : null
    }
          <h1 className='text-3xl mb-10'>{title}</h1>
          {children}
    </div>
  )
}