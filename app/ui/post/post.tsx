import BodyPost from './body-post';
import HeaderPost from './header-post';
import Interactions from './interactions';

export default function Post(){
  return ( 
    <div className='w-9/12 p-10 text-gray-500'>
      <div className='rounded-lg drop-shadow-xl bg-slate-300 w-9/12 h-6/6 mt-6'>
          <HeaderPost />
          <BodyPost/>
          <Interactions/>
      </div>
      <div className='rounded-lg drop-shadow-xl bg-slate-300 w-9/12 h-6/6 mt-6'>
          <HeaderPost />
          <BodyPost/>
          <Interactions/>
      </div>
      <div className='rounded-lg drop-shadow-xl bg-slate-300 w-9/12 h-6/6 mt-6'>
          <HeaderPost />
          <BodyPost/>
          <Interactions/>
      </div>
    </div>
  )
}