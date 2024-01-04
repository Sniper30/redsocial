import getCurrentUser from "@/app/lib/getCurrentUser";
import prisma from "@/app/lib/prismaClient";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  let user = await getCurrentUser();
  let post_like = await req.json() as any as {id: string,like:string};

  let findLike = await prisma.like.findMany({where:{post:{id: post_like.id}}});
  let up = findLike[0].up.filter(u => u !== user.userid)
  let down = findLike[0].down.filter(u => u !== user.userid)
  console.log(post_like)
  await prisma.like.updateMany({
    where:{post:{id:post_like.id}},
    data:{
      up :{
        set: up
      },
      down: {
        set: down
      }
    }
  });
  await prisma.like.updateMany({
    where:{post:{id:post_like.id}},
    data:{
      [`${post_like.like}`]:{push:user.userid}
    }
  })
  // if(findLike[post_like.like].length === 0) await prisma.like.update({where:{id:findLike.id},data:{[post_like.like]:{push:user.userid}}});


  // let up = findLike?.up.every(u => u === user.userid);
  // console.log(up,user.userid,findLike?.up);

  return Response.json(post_like);
}
