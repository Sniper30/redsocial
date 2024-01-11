'use client'
import { useForm} from 'react-hook-form';
import InputText from "../ui/LoginComponent/input";
import ParentLogin from "../ui/LoginComponent/parent";
import { user } from '../lib/interfaces';
import { zodResolver } from '@hookform/resolvers/zod'
import Modal from '../modal';
import { useState } from 'react';
import { modal } from '../lib/interfaces';
import iconReg from '@/public/app_registration_FILL0_wght400_GRAD0_opsz24.svg'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Registration() {
  const style = {
    ["backgroundImage"]:
      "URL(https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg)",
  };
  const [visibleModal, setVisibleModal] = useState(false);
  const [type , setType] = useState<modal>('warning');
  const [btn, setBtn] = useState({action: ()=> {}, title:'cancel'})
  const {register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(user)});
  const {replace} = useRouter()
  const onSubmit = async (e: any) =>{
    let data = JSON.stringify(e);
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
    <div className='w-12/12 h-screen relative flex justify-center items-center'>
      <div
        className='w-7/12 h-screen bg-cover bg-center'
        style={style}
      ></div>
      <Modal type={type} btn={btn} visible={visibleModal} />
      <ParentLogin title='Create your account' icon={iconReg.src}>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex flex-col justify-center items-center'
        >
          <div className='flex justify-between gap-7 w-full'>
          <InputText {...register("name")} placeholder='Name' />
          {errors.name?.message && <p className='text-red-400'>{`${errors.name?.message}`}</p>}

          <InputText {...register("lastname")} placeholder='Last name' />
          {errors.lastname?.message && <p className='text-red-400' >{`${errors.lastname?.message}`}</p>}

          <InputText {...register("age",{valueAsNumber:true})} placeholder='Age' style={{width:'50px'}} />
          {errors.age?.message && <p className='text-red-400'>{`${errors.age?.message}`}</p>}
          </div>

          <div className='flex justify-between gap-10 w-full'>
          <InputText {...register("zipcode")} placeholder='zipcode' style={{width:'70px'}}/>
          {errors.zipcode?.message && <p className='text-red-400' >{`${errors.zipcode?.message}`}</p>}

          <InputText {...register("city")} placeholder='city' style={{width:'70px'}} />
          {errors.city?.message && <p className='text-red-400' >{`${errors.city?.message}`}</p>}

          <InputText {...register("street")} placeholder='street' />
          {errors.street?.message && <p className='text-red-400' >{`${errors.street?.message}`}</p>}

          <InputText {...register("state")} placeholder='state'style={{width:'70px'}} />
          {errors.state?.message && <p className='text-red-400' >{`${errors.state?.message}`}</p>}

          </div>

      <div className='flex justify-between gap-7 w-full'>
      <InputText {...register("username")} placeholder='User name' />
          {errors.username?.message && <p className='text-red-400' >{`${errors.username?.message}`}</p>}

          <InputText {...register("email")} placeholder='email' />
          {errors.email?.message && <p className='text-red-400' >{`${errors.email?.message}`}</p>}
      </div>

          <InputText {...register("password")} placeholder='Password' style={{width:'100%'}} />
          {errors.password?.message &&<p className='text-red-400'>{`${errors.password?.message}`}</p>}
          

          <button
            className='mt-10 w-32 h-10 rounded-md'
            style={{ background: "#fe6b39" }}
            type="submit"
          >
            Sign Up
          </button>
        <Link className='mt-6' href='/login'> You have an account ? Sing In</Link>

        </form>
      </ParentLogin>
    </div>
  );
}
