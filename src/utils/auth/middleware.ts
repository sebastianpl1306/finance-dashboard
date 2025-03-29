import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
      const response = NextResponse.next({
        request: {
          headers: request.headers,
        },
      });
    
      const cookieStore = await cookies()
      const cookieToken = cookieStore.get('token');
      const cookieUseId = cookieStore.get('userId');

      if (request.nextUrl.pathname.startsWith("/finance") || !cookieToken || !cookieUseId) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }
    
      return response;
    } catch {
      return NextResponse.next({
        request: {
          headers: request.headers,
        },
      });
    }
};