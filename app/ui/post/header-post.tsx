import Image from "next/image";
import visibleLogo from "../../../public/visibility_FILL0_wght400_GRAD0_opsz48.svg";
import UserPictureBall from '../user-ball-picture';
export default function HeaderPost() {
  return (
    <div className='flex justify-between items-center p-3'>
      <div className='flex justify-between gap-3 items-center'>
        <UserPictureBall alt='user picture'/>
   
        <div className='flex flex-col text-left'>
          <span>kelvin rafael pena</span>
          <div className='flex justify-start gap-3'>
            <span>40</span>
            <Image
              src={visibleLogo.src}
              alt='icon views'
              width={100}
              height={100}
              className='w-5 fill-white text-white'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col text-right'>
        <span>10 mins ago</span>
        <span>update profile picture</span>
      </div>
    </div>
  );
}
