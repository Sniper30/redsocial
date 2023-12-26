'use client'
import { useForm} from 'react-hook-form';
import InputText from "../ui/login/input";
import ParentLogin from "../ui/login/parent";
import { user } from '../lib/interfaces';
import { zodResolver } from '@hookform/resolvers/zod'
import Modal from '../ui/modal';
import { useEffect, useState } from 'react';
import { modal } from '../lib/interfaces';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Registration() {
  const style = {
    ["backgroundImage"]:
      "URL(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=3112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  };
  const [visibleModal, setVisibleModal] = useState(false);
  const [type , setType] = useState<modal>('warning');
  const [btn, setBtn] = useState({action: ()=> {}, title:'cancel'})
  const {register,watch,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(user)});
  const {replace} = useRouter()
  const onSubmit = async (e: any) =>{
    e.post = []
    let data = JSON.stringify(e);
    console.log(data)
    const request = await fetch('/api/register/',{
      method:'POST',
      body:data
    });
    const result = await request.json();
    console.log(request.status);
    if(request.status != 200) {
      setType('warning');
      setBtn({action:()=> setVisibleModal(false),title:'cancel'})
      setVisibleModal(true);
    }else {
      setType('success');
      setBtn({action:()=> replace('/'),title:'Home'})
      setVisibleModal(true);
    }
  }
  


  return (
    <div className='w-12/12 h-screen relative z-10 flex justify-center items-center'>
      <Modal type={type} btn={btn} visible={visibleModal} />
      <div
        className='w-full -z-10 h-screen blur-md bg-cover bg-center absolute top-0 left-0'
        style={style}
      ></div>
      <ParentLogin title='Create your account'>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex flex-col justify-center items-center'
        >
          <InputText {...register("name")} placeholder='Name' />
          {errors.name?.message && <p className='text-red-400'>{`${errors.name?.message}`}</p>}

          <InputText {...register("lastname")} placeholder='Last name' />
          {errors.lastname?.message && <p className='text-red-400' >{`${errors.lastname?.message}`}</p>}

          <InputText {...register("age",{valueAsNumber:true})} placeholder='Age' />
          {errors.age?.message && <p className='text-red-400'>{`${errors.age?.message}`}</p>}

          <InputText {...register("zipcode")} placeholder='zipcode' />
          {errors.zipcode?.message && <p className='text-red-400' >{`${errors.zipcode?.message}`}</p>}

          <InputText {...register("city")} placeholder='city' />
          {errors.city?.message && <p className='text-red-400' >{`${errors.city?.message}`}</p>}

          <InputText {...register("street")} placeholder='street' />
          {errors.street?.message && <p className='text-red-400' >{`${errors.street?.message}`}</p>}

          <InputText {...register("state")} placeholder='state' />
          {errors.state?.message && <p className='text-red-400' >{`${errors.state?.message}`}</p>}


          <InputText {...register("username")} placeholder='User name' />
          {errors.username?.message && <p className='text-red-400' >{`${errors.username?.message}`}</p>}

          <InputText {...register("email")} placeholder='email' />
          {errors.email?.message && <p className='text-red-400' >{`${errors.email?.message}`}</p>}

          <InputText {...register("password")} placeholder='Password' />
          {errors.password?.message &&<p className='text-red-400'>{`${errors.password?.message}`}</p>}
          

          <button
            className='mt-10 w-32 h-10 rounded-md'
            style={{ background: "#fe6b39" }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </ParentLogin>
    </div>
  );
}
