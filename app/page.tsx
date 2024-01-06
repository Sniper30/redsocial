'use server'
import HeaderApp from './ui/Header/header'
import Post from './ui/Post/post'
import Subscription from './ui/subscriptions/subscriptions'
import { oswald } from './fonts'
import SubsData from './ui/subscriptions/subsFetch'
import { Suspense } from 'react'
import PostSkeleton from './ui/skeletons/posts'

export default async function Home() {
  let subscriptions = await SubsData(); //here comes the li's with the data from the db
  return (
    <main className={`${oswald.className} bg-indigo-500`}>
      
      <HeaderApp>
        {subscriptions}
      </HeaderApp>
      <div className='flex min-h-screen'>
        <Subscription mobil={false}> 
        {subscriptions}
        </Subscription>
        <Suspense fallback={<PostSkeleton />}>
         <Post/>
        </Suspense>
      </div>
    </main>
  )
}
