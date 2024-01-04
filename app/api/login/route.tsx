import { NextRequest } from 'next/server';
import * as argon from 'argon2'
import prisma from '@/app/lib/prismaClient';
import {cookies} from 'next/headers'
export async function POST(req:Request){
  const body = await req.json();

  const user = await prisma.userCredentials.findFirst({where:{username:body.username}});
  if(!user) return Response.json({message:'No user found'},{status:404})
  const verifyPassword = argon.verify(user.hash,body.password);
  if(!verifyPassword) return Response.json({message:'Password incorrect'},{status:401});
  user.hash = '';
  cookies().set('user',JSON.stringify(user),{httpOnly:true,maxAge: 24 * 60})
  return Response.json(user,{status:200});
}