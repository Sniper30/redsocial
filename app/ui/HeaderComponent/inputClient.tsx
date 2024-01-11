'use client'

import { useRouter } from 'next/navigation';
import { useRef } from 'react'

export default function InputClientFile() {
  const fileInput = useRef(null) as any;
  const router = useRouter();
  const handleClick = ()=> fileInput.current.click();

  const handleOnchange = async (e: any) =>{
      console.log('cambio')
      if (e.target.files.length === 0) return;
      let data = e.target.files[0];
      if(data.type === 'image/heic') return alert('action no posible')
      let formData = new FormData();

    
      formData.append('file',data);
      let request = await fetch('/api/user/',{
        method:'PUT',
        body:formData,
        headers:{
          'Content-Typee':'multipart/form-data'
        }
      });
      if(request.status !== 200) alert('imagen no updated')
      console.log(request.status)
      router.refresh()
  }

  return (
    <div className='h-8 w-[30px] absolute right-1 ' onClick={handleClick}>
      <input  className='' hidden type='file' accept='image/jpg image/png image/jpeg' ref={fileInput} onChange={handleOnchange}/>
    </div>
  )
}