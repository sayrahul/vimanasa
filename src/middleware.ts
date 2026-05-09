import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /jobs to the Nexus jobs portal
  if (pathname === '/jobs' || pathname === '/jobs/') {
    return NextResponse.redirect('https://nexus.vimanasa.com/jobs', {
      status: 307,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/jobs', '/jobs/'],
};
