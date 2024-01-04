'use client'
import { Suspense, useEffect, useState } from 'react';
import useToogle from '@/app/lib/hooks/toogleHook';
import Image from 'next/image';
import menu_icon from '@/public/arrow_circle_right_FILL1_wght400_GRAD0_opsz24.svg'
import menu_icon_back from '@/public/arrow_circle_left_FILL1_wght400_GRAD0_opsz24.svg'
import Subscription from '../subscriptions/subscriptions';
import LogOut from '@/app/lib/LogOut';
import { useRouter } from 'next/navigation';

export default function OptionsBarComponent({children} : {children:React.ReactNode}){
  const {toogle,check, setToogle}= useToogle(false) as any;
  const [size, setSize] = useState(()=> 0)
  const {refresh} = useRouter();

  useEffect(()=>{
    setSize(window.innerWidth);
    window.addEventListener('resize',()=> setSize(window.innerWidth))
    return ()=> window.removeEventListener('resize',()=> setSize(window.innerWidth))
  },[])
  function handleToogle(){
    setToogle(!toogle)
    setSize(window.innerWidth);
  }
  function heandleClick(type:string){
    switch (type) {
      case 'logout':
        'use server'
        LogOut();
        refresh();
        break;
    
      default:
        break;
    }
  }
  return (
  <ul
  style={{ left: `${toogle ? `-${size}px` : size ? '0px' : '-1000px'}`}}
   className={`flex 
   min-[320px]:absolute min-[320px]:h-screen min-[320px]:w-full 
    
    min-[320px]:left-0 
    min-[320px]:flex-col
    min-[320px]:items-start
    min-[320px]:justify-start
    min-[320px]:gap-10
    min-[320px]:top-0

    min-[860px]:left-0 
    min-[860px]:flex-row
    min-[860px]:items-center
    min-[860px]:justify-between
    min-[860px]:gap-0
   min-[860px]:h-full min-[860px]:static min-[860px]:flex-auto
   min-[860px]:w-auto z-10 flex-auto w-60 p-6 justify-between items-center bg-white `} >
      <li className={`flex justify-center item-center w-15 h-15 bg-white shadow-lg shadow-white/20 absolute top-20 ${toogle ? '-right-8' : 'right-5'} p-2 min-[860px]:hidden z-20 rounded-[50%]`} onClick={handleToogle}>
        <Image 
          src={toogle ? menu_icon : menu_icon_back}
          height={200}
          width={200}
          style={{width:'18px', height:'18px'}}
          alt=''
        />
      </li>
        <li onClick={()=> heandleClick('Home')}>Home</li>
        <li onClick={()=> heandleClick('Post')}>Posts</li>
        <li onClick={()=> heandleClick('Status')}>status</li>
        <li onClick={()=> heandleClick('logout')}>log out</li>
        <li className='w-full min-[860px]:hidden'>
          <Suspense fallback={<p>loading</p>}>
             <Subscription mobil={true}> 
             {children}
             </Subscription>
          </Suspense>
        </li>
      </ul> 
  )
}