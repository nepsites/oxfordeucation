import { updateSession } from './app/_lib/supabase/middleware';

export async function middleware(request) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static, _next/image (static/optimized assets)
     * - favicon, images, css (public static files)
     * - any file with an extension (e.g. .svg, .png, .jpg)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|css|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
