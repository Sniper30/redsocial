import React from 'react'
import InputText from './input'


export default function ParentLogin({children,title} : {children: React.ReactElement,title:string}){
  return (
    <div className='parentLoginRegisterContainer lg:w-6/12 sm:w-11/12 md:w-8/12 h-5/6 rounded-lg shadow-xl flex justify-center flex-col ' style={{background:"rgba(255,255,255,0.5)"}}>
          <h1 className='text-3xl mb-10'>{title}</h1>
          {children}
    </div>
  )
}