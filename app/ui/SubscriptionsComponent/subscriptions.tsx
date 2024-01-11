'use client'
import Image from "next/image";
import UserPictureBall from "../user-ball-picture";
import { montserrat } from '../../fonts';
import prisma from '@/app/lib/prismaClient';
import getCurrentUser from '@/app/lib/getCurrentUser';
export default function Subscription({mobil,children} : {mobil?: boolean,children: React.ReactNode}) {


  return (
    <div style={{letterSpacing:'1px'}} className={`${montserrat.className} text-pretty w-2/12  
    min-[320px]:h-full
    min-[320px]:w-auto
    min-[320px]:static
    ${mobil ? 'min-[320px]:block' : 'min-[320px]:hidden'}

    min-[860px]:block
    min-[860px]:text-white
    min-[860px]:sticky
    min-[860px]:top-[105px]
    min-[860px]:left-0
    min-[860px]:m-5
    min-[860px]:w-[300px]
    min-[860px]:bg-indigo-400

    rounded-lg drop-shadow-xl
    h-screen gap-3`}>
      <div className='text-sm pl-3 pt-3 text-start'>
        <h3 className='text-lg my-6'>Subscriptions</h3>
        <div className=''>
          <ul className='font-light text-left text-sm gap-6 h-[400px] overflow-x-auto'>
            {children}
          </ul>
        </div>
 
      </div>

    </div>
  );
}
