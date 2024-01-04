import prisma from '@/app/lib/prismaClient';
import { NextRequest } from 'next/server';

export async function POST(req:Request) {
  let term = await req.json();
  let users = await prisma.user.findMany({where:{name:{contains: term.name,mode:'insensitive'}}});

  return Response.json(users);
}
