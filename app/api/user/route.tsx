
import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prismaClient';
import {writeFile} from 'fs/promises';
import path from 'path';
import {cookies} from 'next/headers'

export async function PUT(req:NextRequest) {
  let user = JSON.parse(cookies().get('user')?.value as string);

  const formdata = await req.formData();

  let id = user.userid;
  let file = formdata.get('file') as File;
  let buffer = Buffer.from(await file.arrayBuffer())
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  try {
    await writeFile(path.join(process.cwd(),"public/profiles/" + filename),buffer);
    await prisma.user.update({where:{id: id}, data: {profilePhoto: "/profiles/"+filename}})
    return Response.json({message:'success'},{status:200});
  } catch (error) {
    console.log(error)
    return Response.json({message:'error'},{status:400});

  }
}

export async function GET(req:NextRequest) {
  let user = JSON.parse(cookies().get('user')?.value as string);
  
  if(!user) return Response.json({message:'no cookie login again'});
  let _user = await prisma.user.findFirst({where:{id: user.userid}})
  return Response.json(_user);
}

