// import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/app/lib/prismaClient';

import * as argon from 'argon2';
import * as jwt from 'jsonwebtoken'


import _user, { user_credentials } from '../../lib/interfaces'

export async function POST(req: Request) {

  try {
    const data: _user & user_credentials = await req.json()
    let check_email_in_db = await prisma.userCredentials.findMany({where: {OR:[{email:data.email},{username:data.username}]}});
    if(check_email_in_db.length > 0) return Response.json({message:"Email o Username already exist"},{status:409});
    let {  name, lastname, username,age,street ,state ,city ,zipcode , password, email } = data
    let hash = await argon.hash(password);

    let user = await prisma.user.create({data: {name,lastname,age,address:{street,state,city,zip:zipcode},profilePhoto:'/static/ben-sweet-2LowviVHZ-E-unsplash.jpg',subscription:{create:{}}}})
    let credentialsCreated = await prisma.userCredentials.create({data:{user:{connect: {id: user.id}}, email,hash,username,tokenRt:""}});
    prisma.$disconnect();
    credentialsCreated.hash = '';
    return Response.json({ ...user, ...credentialsCreated })
    return Response.json({ message: "klk" })
  } catch (error) {
    console.log(error);
    prisma.$disconnect();
    process.exit(1);
  }
}