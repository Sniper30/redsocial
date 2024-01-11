'use client'
import Image from 'next/image';
import InputText from '../ui/LoginComponent/input'
import ParentLogin from '../ui/LoginComponent/parent'
import loginIcon from '@/public/account_circle_FILL0_wght400_GRAD0_opsz24.svg'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { modal, userLogin } from '../lib/interfaces';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from '../modal';
import Link from 'next/link';

const style = {
  ["backgroundImage"]:
    "URL(https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg)",
};

export default function Login(){
  const [visibleModal, setVisibleModal] = useState(false);
  const [type , setType] = useState('warning');
  const [btn, setBtn] = useState({action: ()=> {}, title:'cancel'})
  const {refresh} = useRouter()
  const {handleSubmit, register, formState:{errors}} = useForm({
      resolver:zodResolver(userLogin)
  });

  async function onSubmit(e:any){
    let data = JSON.stringify(e);
    const request = await fetch('/api/login/',{
      method:'POST',
      body:data
    })
    if(request.status != 200) {
      setType('warning');
      setBtn({action:()=> setVisibleModal(false),title:'cancel'})
      setVisibleModal(true);
    }else {
      let response = await request.json();
      setType('success');
      setBtn({action:()=> refresh(),title:'Home'})
      setVisibleModal(true);
    }
  }

  return(
    <div className='w-12/12 h-screen flex justify-center items-center'>
      <div className='w-full h-screen  bg-cover bg-center' style={style}></div>
      <Modal type={type as 'success' | 'warning'} btn={btn} visible={visibleModal} />

        <ParentLogin title="Log In" icon={loginIcon.src}>

        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-center items-center'>
           <InputText {...register('username')} placeholder='Username' />
          {errors.username?.message && <p className='text-red-400'>{`${errors.username?.message}`}</p>}

           <InputText {...register('password')} placeholder='Password' />
          {errors.password?.message && <p className='text-red-400'>{`${errors.password?.message}`}</p>}

           <button type='submit' className='mt-10 w-32 h-10 rounded-md' style={{background:"#fe6b39"}}>Sign In</button>
        <Link className='mt-6' href='/register'> You dont have an account ? Sign Up</Link>
        </form>
        </ParentLogin>
    </div>
  )
}