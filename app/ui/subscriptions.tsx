import UserPictureBall from './user-ball-picture';

export default function Subscription(){
  return(
    <div className='w-2/12 text-left sticky left-0  top-0 h-screen gap-3 border'>
      <h3 className='text-lg my-6'>Subscriptions</h3>
      <div className=''>
      <ul className='font-light text-left text-lg gap-4'>
        <li className='flex items-center gap-4 mt-4'> <UserPictureBall alt={"subscription picture"}/> <span>Sniper30</span></li>
        <li className='flex items-center gap-4 mt-4'> <UserPictureBall alt={"subscription picture"}/> <span>Repositorys</span></li>
        <li className='flex items-center gap-4 mt-4'> <UserPictureBall alt={"subscription picture"}/> <span>Canal luna</span></li>
        <li className='flex items-center gap-4 mt-4'> <UserPictureBall alt={"subscription picture"}/> <span>La otra Cara</span></li>
        <li className='flex items-center gap-4 mt-4'> <UserPictureBall alt={"subscription picture"}/> <span>La verdad</span></li>
      </ul>

      </div>
    </div>
  )
}