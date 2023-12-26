import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from 'react';
import { atributes } from '../lib/image-props';
import { atributesInterface } from '../lib/interfaces';

export default function UserPictureBall(props : atributesInterface) {
  // let overrideProps = Object.assign(props,{...props})
  return <Image {...atributes} {...props} className='rounded-[50%] object-cover w-10 h-10' alt=""/>;
}

// className='rounded-[50%] object-cover w-10 h-10'