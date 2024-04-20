import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // Define paths that are considered admin (accessible only with a token)
    const isAdminPath = path === '/admin'

    // Get the token from the cookies
    const token = request.cookies.get('token')?.value || ''

    // If trying to access a protected path without a token, redirect to the login page
    if (isAdminPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}