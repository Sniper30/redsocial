'use server'

import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation';

export default async function LogOut() {

  cookies().delete('user');

} 