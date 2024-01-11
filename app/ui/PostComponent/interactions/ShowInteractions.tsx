'use client'
import Button from '../../ButtonComponent/button'

import thumbUp from '@/public/thumb_up_FILL0_wght400_GRAD0_opsz24.svg'
import thumbDown from '@/public/thumb_down_FILL0_wght400_GRAD0_opsz24.svg'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
async function Point(like:string,id:string,cb:()=>void) {

  let request = await fetch('/api/point/',{
    method:'POST',
    body:JSON.stringify({like,id})
  });
  let response = await request.json();
  cb()
}

export default function ShowInteractions({id}:{id:string}){
  let {refresh} = useRouter()
  return (
    <div className='flex justify-around items-center p-2 h-20'>
    <div className='w-20 flex justify-between gap-2'>

      <Button fn={()=>Point('up',id,refresh)}>
      <Image src={thumbUp} width={40} height={40} alt='' />
      </Button>
      <Button fn={()=>Point('down',id,refresh)}>
      <Image src={thumbDown} width={40} height={40} alt='' />
      </Button>
    </div>
    <Button title='coments'/>
    <Button title='share'/>
  </div>
  )
}