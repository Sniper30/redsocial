
'use server'
import getCurrentUser from '@/app/lib/getCurrentUser';
import BodyPost from "./body-post";
import HeaderPost from "./header-post";
import Interactions from "./interactions/interactions";

import MakePostComponent from './MakePost';
import prisma from '@/app/lib/prismaClient';

let posts = async ()=>{
  const currentUser = await getCurrentUser();
  let subs = await prisma.user.findMany({
    where:{id:currentUser.userid},
    include:{
      subscription:{
        select:{
          subscriptions:true
        }
      }
    }
  });
  let usersSubscription = subs[0].subscription.subscriptions
  if(!usersSubscription) return;
  return await prisma.post.findMany({
    orderBy:{
      createAt:'desc'
    },
    where:{
      authorid:{
        in: usersSubscription,
      },
    },
    include:{
      author: true
    }
  }) 
  
}

export default async function Post() {
  let Allposts = await posts();
  console.log(Allposts)
  await new Promise((res,rej)=> setTimeout(res,1000))
  return (

    <div className='mt-[103px] w-full h-auto min-h-screen text-gray-200 flex items-center flex-col'>
    <MakePostComponent/>
      {
        (Allposts !== undefined && Allposts.length > 0 ) && Allposts?.map(post => (
        <div key={post.id} className='rounded-lg drop-shadow-xl bg-indigo-400 min-[320px]:w-full min-[600px]:w-10/12 min-[1100px]:w-[800px] h-6/6 mt-6'>
        <HeaderPost createAt={post.createAt as any as string} name={post.author.name +' '+post.author.lastname} picture={post.author.profilePhoto as string} />
        <BodyPost picture={post.image} body={post.body}/>
        <Interactions id={post.id}/>
      </div>

        ))
      }
    </div>

  );
}
