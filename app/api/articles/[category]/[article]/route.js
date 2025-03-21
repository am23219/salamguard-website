import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { category, article } = params;
  
  // Return 501 Not Implemented since the content files structure isn't ready yet
  return new NextResponse('Content not available - This API endpoint is still under development', {
    status: 501, // Not Implemented
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 