'use client'
import imageIcon from '@/public/image_FILL0_wght400_GRAD0_opsz24.svg'
import Button from '../button/button';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
export default function MakePostComponent(){
  const fileRef = useRef(null) as any as {current: HTMLInputElement};
  const textAreRef = useRef(null) as any as {current: HTMLInputElement};
  const [file,setfile] = useState<File>([] as any);
  function handleClick(){
    fileRef.current.click();
  }

  async function postIt(){
    let formData = new FormData();
    formData.append('file',file);
    formData.append('text',textAreRef.current.textContent as any)
    let request = await fetch('/api/post/',{
      method:'POST',
      body: formData
    })
    let response = await request.json();
    textAreRef.current.innerHTML = '<span>Whats on your mind?</span>'
  }


  function OnChangeFile(e: ChangeEvent<HTMLInputElement>){
    let file = e.target.files![0];
    setfile(file);
    let objURL = URL.createObjectURL(file);
    let img = document.createElement('img');
    img.src = objURL
    console.log(img,objURL)
    textAreRef.current.append(img)
    e.target.value = null as any 
  }

  return (
    <section className='p-1 rounded-lg drop-shadow-xl bg-indigo-400 min-[320px]:w-full min-[600px]:w-10/12 min-[1100px]:w-[800px] min-h-[100px] overflow-auto'>
    <div>
      <div ref={textAreRef} suppressContentEditableWarning contentEditable className='bg-white text-gray-600 w-full h-auto text-start rounded-lg p-2 focus:no-underline flex flex-col justify-start'>
        <span>Whats on your mind?</span>

      </div>
      <ul className='flex gap-5 p-3 w-full '>
        <li onClick={handleClick} className='h-8 flex p-1 rounded-lg drop-shadow-xl bg-indigo-300'>
          <Image src={imageIcon} alt=''/>
          <input onChange={(e)=>OnChangeFile(e)} ref={fileRef} hidden type='file' />
          </li>
        <li className='h-8'><Button fn={postIt} title='Post'/></li>
      </ul>
    </div>
  </section>
  )
}