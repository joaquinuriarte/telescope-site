import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Log the download using console.log which will be captured by the server logs
        console.log(`[${new Date().toISOString()}] Download requested`);

        // Set appropriate headers for file download
        const headers = new Headers();
        headers.set('Content-Type', 'application/x-apple-diskimage');
        headers.set('Content-Disposition', 'attachment; filename="Telescope.dmg"');
        headers.set('Location', '/Telescope.dmg');

        return new NextResponse(null, {
            status: 302,
            headers,
        });
    } catch (error) {
        console.error('Download error:', error);
        return new NextResponse('Error downloading file', { status: 500 });
    }
} 