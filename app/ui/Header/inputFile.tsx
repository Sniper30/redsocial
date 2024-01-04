"use server";
import { cookies } from 'next/headers';
import UserPictureBall from "../user-ball-picture";
import InputClientFile from './inputClient';
import prisma from '@/app/lib/prismaClient';
import getCurrentUser from '@/app/lib/getCurrentUser';

async function getData(id:string) {
  let request = await prisma.user.findFirst({where:{id}});
  return request
}

export default async function InputFile() {
  let userdata = await getCurrentUser()
  let user = await getData(userdata.userid) as any;
  return (
    <div className='flex flex-auto w-[10px] items-center justify-end relative'>
      <UserPictureBall
        src={user.profilePhoto === null ? "/ben-sweet-2LowviVHZ-E-unsplash.jpg" : user.profilePhoto}
        width={40}
        height={40}
        alt=''
      />
      <InputClientFile />
    </div>
  );
}
