'use server'
import Image from "next/image";

export default async function BodyPost({picture,body}:{picture:string,body:string}) {

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex justify-center bg-black  w-[100%] min-h-[400px]'>
      <Image
        src={'/ImagesBlogspost/'+picture}
        width={300}
        height={300}
        alt=''
        priority
      />

      </div>
      <div className='text-start rounded-lg w-9/12'>
      <p className='py-2'>
      {body}
      </p>

      </div>
    </div>
  );
}
