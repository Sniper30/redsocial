import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prismaClient';
import { cookies } from 'next/headers';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  let currentUser = JSON.parse(cookies().get('user')?.value as any);
  let data = await req.formData(); 
  if(!data) return;
  let file = data.get('file') as File;
  let text = data.get('text') as string;

  let buffer = Buffer.from(await file.arrayBuffer())
  const filename = Date.now() + file.name.replaceAll(" ", "_");

  try {
    await writeFile(path.join(process.cwd(),'public/ImagesBlogspost/'+filename),buffer);
      let post = await prisma.post.create({
        data:{
          body:text,
          image:filename,
          author:{connect:{id:currentUser.userid}},
          like:{create:{up:[],down:[]}}
        }
      })
  } catch (error) {
    console.log(error)
  }

  return Response.json({});
}