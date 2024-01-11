'use server'
import HeaderApp from './ui/HeaderComponent/header'
import Post from './ui/PostComponent/post'
import Subscription from './ui/SubscriptionsComponent/subscriptions'
import { oswald } from './fonts'
import SubsData from './ui/SubscriptionsComponent/subsFetch'
import { Suspense } from 'react'
import PostSkeleton from './ui/SkeletonsComponent/posts'

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
