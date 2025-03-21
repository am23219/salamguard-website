import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request, { params }) {
  const { category, article } = params;
  
  // Sanitize the parameters to prevent directory traversal attacks
  const sanitizedCategory = category.replace(/[^a-zA-Z0-9-]/g, '');
  const sanitizedArticle = article.replace(/[^a-zA-Z0-9-]/g, '');
  
  try {
    // Construct the file path
    const filePath = path.join(process.cwd(), 'app', 'resources', sanitizedCategory, `${sanitizedArticle}.md`);
    
    // Read the file
    const content = await fs.readFile(filePath, 'utf8');
    
    // Return the content
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
      },
    });
  } catch (error) {
    console.error('Error reading article file:', error);
    
    // Return a 404 if the file is not found
    return new NextResponse('Article not found', {
      status: 404,
    });
  }
} 