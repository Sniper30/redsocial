import React from 'react';
import { oswald } from '../fonts';

export default function layout({children} : {children: React.ReactElement}) {
  return (
    <main className={`${oswald.className}`}>
        {children}
    </main>
  )
}