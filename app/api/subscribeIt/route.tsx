import getCurrentUser from '@/app/lib/getCurrentUser';
import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prismaClient';

export async function POST(req:NextRequest) {
  let currentCrentialsUser = await getCurrentUser();
  let userToSubscribe = await req.json();
  const currentUser = await prisma.user.findFirst({ where: {id: currentCrentialsUser.userid}});


  let subscriber = await prisma.subscriptions.update({
    where:{id:userToSubscribe.subscriptionid},
    data:{
      subscribers:{push:currentUser?.id}
    }
  });

  let subscription = await prisma.subscriptions.update({
    where:{id:currentUser?.subscriptionid},
    data:{
     subscriptions:{
       push:userToSubscribe.id
     },
    }
  });
  return Response.json(subscriber);
}
