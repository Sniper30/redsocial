import { NextRequest, NextResponse } from 'next/server';
import {cookies} from 'next/headers'

export default async function middleware(req: NextRequest){
  let user = cookies().get('user')?.value;
  if(!user && req.nextUrl.pathname.startsWith('/register') ) return
  if(!user && !req.nextUrl.pathname.startsWith('/login')) return NextResponse.redirect(new URL('/login',req.url));
  if(user && req.nextUrl.pathname.toString() !== '/') return NextResponse.redirect(new URL('/',req.url))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|ImagesBlogspost|profiles|static|favicon.ico).*)',
    '/login',
    '/register'
  ],
}