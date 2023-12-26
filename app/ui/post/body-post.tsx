import Image from "next/image";

export default function BodyPost() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center bg-black  w-9/12'>
      <Image
        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={300}
        height={300}
        priority={true}
        alt=''
      />

      </div>
      <div className='text-start rounded-lg w-9/12'>
      <p className='py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci
        delectus dicta velit ea necessitatibus, sint itaque maxime. Doloribus
        odit magnam ex praesentium tenetur similique repellat voluptatem facere
        enim recusandae.
      </p>

      </div>
    </div>
  );
}
