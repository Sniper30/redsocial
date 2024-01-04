'use client'
import { ReactNode } from 'react';


export default function Button({title,fn,children}:{title?: string,fn?:()=>void,children?:ReactNode}){
  return (
    <button onClick={fn} className='p-1 rounded-lg drop-shadow-xl bg-indigo-300 w-[100px] h-8'>{!children ?  title: children}</button>
  )
}