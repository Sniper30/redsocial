// import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/app/lib/prismaClient';

import * as argon from 'argon2';
import * as jwt from 'jsonwebtoken'
import env_var from 'env-var';

import _user, { user_credentials } from '../../lib/interfaces'

export async function POST(req: Request) {
  const secret = env_var.get('JWT_SECRET_KEY').asString();
  let Rt_token;
  let token;
  try {
    const data: _user & user_credentials = await req.json()
    let check_email_in_db = await prisma.userCredentials.findMany({where: {OR:[{email:data.email},{username:data.username}]}});
    if(check_email_in_db.length > 0) return Response.json({message:"Email o Username already exist"},{status:409});
    let {  name, lastname, username,age,street ,state ,city ,zipcode , password, email } = data
    let hash = await argon.hash(password);
    if(secret){
      Rt_token = jwt.sign({email},secret,{expiresIn: '5 days'})
      token = jwt.sign({email},secret,{expiresIn:'1h'})
    }
    let user = await prisma.user.create({data: {name,lastname,age,address:{street,state,city,zip:zipcode},profilePhoto:null,subscription:{create:{}}}})
    let credentialsCreated = await prisma.userCredentials.create({data:{user:{connect: {id: user.id}}, email,hash,username,tokenRt:Rt_token ?? ""}});
    prisma.$disconnect();
    credentialsCreated.hash = '';
    return Response.json({ ...user, ...credentialsCreated, token })
  } catch (error) {
    console.log(error);
    prisma.$disconnect();
    process.exit(1);
  }
}