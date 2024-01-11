'use server'

import ShowInteractions from './ShowInteractions'
import prisma from '@/app/lib/prismaClient'
async function getPoints(id: string){
  return await prisma.points.findFirst({
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

  let pointsCount = await getPoints(id);
  return (
    <div className='divide-y'>
      <div className='flex justify-end gap-3 p-2'>
        <span>{pointsCount?.up.length} Points up</span>
        <span>{pointsCount?.down.length} Points down</span>

        <span>10 shares</span>
      </div>
      <ShowInteractions id={id}/>
    </div>
  )
}