'use server'
import { cookies } from 'next/headers';
import prisma from './prismaClient';

export default async function getCurrentUser() {
  let user = cookies().get('user')?.value;
  return JSON.parse(user as any);
}