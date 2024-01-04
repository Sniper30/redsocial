import Image from "next/image";
import visibleLogo from "../../../public/visibility_FILL0_wght400_GRAD0_opsz48.svg";
import UserPictureBall from '../user-ball-picture';
export default function HeaderPost({name,picture,createAt} : {name:string,picture:string,createAt:string}) {
  let min = new Date(createAt).getMinutes();
  let hour = new Date(createAt).getHours();
  let currentHour = new Date().getHours();
  let currentMin = new Date().getMinutes();
  let resHour = Math.abs(currentHour - hour);
  let resMin = Math.abs(min - currentMin)
  return (
    <div className='flex justify-between items-center p-3'>
      <div className='flex justify-between gap-3 items-center'>
        <UserPictureBall src={!picture ? `/ben-sweet-2LowviVHZ-E-unsplash.jpg`: '/profiles/'+picture } alt='user picture' width={40} height={40} />
   
        <div className='flex flex-col text-left'>
          <span>{name}</span>
        </div>
      </div>
      <div className='flex flex-col text-right'>
        <span>hace {resHour === 0 ? resMin+' min': resHour+ ' h'}</span>
        <span>{name}'s post</span>
      </div>
    </div>
  );
}
