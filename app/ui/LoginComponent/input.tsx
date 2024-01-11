import React, { HTMLAttributes, HtmlHTMLAttributes, forwardRef } from 'react';


export default forwardRef(function InputText(props: React.HTMLProps<HTMLInputElement>,ref:any){
  return (
    <input type='text' ref={ref} {...props} className='w-6/12 h-10 text-sm rounded-md my-2 p-1 pl-3 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
  )
})