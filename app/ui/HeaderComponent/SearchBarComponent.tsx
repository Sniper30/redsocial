"use client";
import { ChangeEvent, useRef, useState } from 'react';
import Button from '../ButtonComponent/button';

export default function SearhBarComponent() {
  const [inputValue,setInputValue] = useState<string>('');
  const [data,setData] = useState([]);
  async function handleOnchange(e:ChangeEvent<HTMLInputElement>){
    let {target:{value}} = e
    if(value.length === 0){
      setData(prev => [])
      return
    }
    let request = await fetch('/api/subscribedSearch/',{
      method:'POST',
      body:JSON.stringify({name:value}),
      cache:'no-cache'
    });
    let response = await request.json();
    setData(response)
  }

 async function handleSubscribe(name : string){
    let userToSubscribe = data.find((u: {name: string})=> u.name === name);
    let request = await fetch('/api/subscribeIt/',{
      method:'POST',
      body: JSON.stringify(userToSubscribe)
    })
    let response = await request.json();
    console.log(response);
    setData(prev => [])
  }

  return (
    <div className={`flex flex-auto w-[80px] items-center relative`}>
      <div
        className={`bg-white w-full m-1 flex items-center gap-1`}
      >
        <strong className='w-[10%]'>Logo</strong>
        <search className='w-[90%] p-1 relative'>
          <input
          onChange={handleOnchange}
            type='text'
            placeholder='Search...'
            className='w-full rounded-lg p-1 pl-3 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          />

          <ul className='bg-indigo-400 rounded-xl overflow-hidden divide-solid divide-y divide-indigo-600 absolute top-10 left-0 w-full text-start '>
            {
              data.length > 0 && data.map((user : {name: string, lastname: string}) => <li key={user.name + user.lastname} className='p-3 hover:bg-indigo-300'>{user.name + ' ' + user.lastname} <Button fn={()=>  handleSubscribe(user.name)} title='Subscribe'/></li>)
            }
          </ul>
        </search>
      </div>
    </div>
  );
}
