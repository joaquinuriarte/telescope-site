import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the request is for the DMG file
    if (request.nextUrl.pathname === '/Telescope.dmg') {
        const response = NextResponse.next();

        // Set appropriate headers for file download
        response.headers.set('Content-Type', 'application/x-apple-diskimage');
        response.headers.set('Content-Disposition', 'attachment; filename="Telescope.dmg"');

        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/Telescope.dmg',
}; 