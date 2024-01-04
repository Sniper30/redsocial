'use server'

import ShowInteractions from './ShowInteractions'
import prisma from '@/app/lib/prismaClient'
async function getLikes(id: string){
  return await prisma.like.findFirst({
    where:{
      post:{
        id
      }
    },
    select:{
      up:true,
      down:true
    }
  })
}

export default async function Interactions({id}:{id:string}){

  let likesCount = await getLikes(id);
  return (
    <div className='divide-y'>
      <div className='flex justify-end gap-3 p-2'>
        <span>{likesCount?.up.length} likes</span>
        <span>{likesCount?.down.length} dislikes</span>

        <span>10 shares</span>
      </div>
      <ShowInteractions id={id}/>
    </div>
  )
}