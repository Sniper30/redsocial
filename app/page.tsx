import HeaderApp from './ui/header'
import Post from './ui/post/post'
import Subscription from './ui/subscriptions'
import { oswald } from './fonts'

export default function Home() {
  return (
    <main className={`${oswald.className}`}>
      <HeaderApp/>
      <div className='flex justify-around relative'>
        <Subscription/>
        <Post/>
      </div>
    </main>
  )
}
