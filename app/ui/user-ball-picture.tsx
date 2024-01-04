import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from 'react';

import { atributesInterface } from '../lib/interfaces';


export const atributes = {
  alt:"profile picture",
  height: 40,
  width: 40,
  src:'',
}

export default function UserPictureBall(props : atributesInterface) {
  return <Image style={{width:props.width +'px',height:props.height+'px',objectFit:'cover'}} {...atributes} {...props} className='shadow-lg shadow-black/10 rounded-[50%] object-contain' alt=""/>;
}
