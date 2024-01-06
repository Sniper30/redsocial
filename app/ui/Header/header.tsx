'use server'
import Image from 'next/image';

import {Suspense } from 'react';
import InputFile from './inputFile';
import SearhBarComponent from './SearchBarComponent';
import OptionsBarComponent from './OptionsBarComponents';
export default async function HeaderApp({children} : {children:React.ReactNode}) {
  

  return (
    <header className='flex  p-1 fixed bg-white z-10 w-full'>
        <SearhBarComponent />

        <OptionsBarComponent>
          {children}
        </OptionsBarComponent>

            <InputFile />
    </header>
  );
}
