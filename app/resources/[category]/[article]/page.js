// Server component only - no "use client" directive
import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Header from '@/public/components/Header';
import Footer from '@/public/components/Footer';
import ClientArticleWrapper from '@/public/components/resources/ClientArticleWrapper';

// This function is required for static site generation with output: export
export async function generateStaticParams() {
  // Define all category-article combinations for pre-rendering
  const articles = [
    // Physical Harms
    { category: 'physical-harms', article: 'how-addiction-rewires-your-brain' },
    { category: 'physical-harms', article: 'physical-symptoms-of-digital-addiction' },
    
    // Spiritual Harms
    { category: 'spiritual-harms', article: 'addiction-and-spiritual-disconnection' },
    { category: 'spiritual-harms', article: 'rebuilding-your-relationship-with-allah' },
    
    // How to Quit
    { category: 'how-to-quit', article: 'the-30-day-recovery-plan' },
    { category: 'how-to-quit', article: 'building-a-support-system' },
    { category: 'how-to-quit', article: 'replacing-bad-habits-with-good-ones' },
    
    // Parents Guide
    { category: 'parents-guide', article: 'age-appropriate-conversations-about-online-safety' },
    { category: 'parents-guide', article: 'setting-up-parental-controls' },
    
    // Community Resources
    { category: 'community-resources', article: 'khutbah-guide-on-digital-wellness' },
    { category: 'community-resources', article: 'mentoring-guide-for-youth-leaders' },
  ];
  
  return articles;
}

// Function to generate metadata for the page
export async function generateMetadata({ params }) {
  // Await params before destructuring
  const resolvedParams = await params;
  const { category, article } = resolvedParams;
  
  // Get the article title for metadata
  let title = article.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${title} | SalamGuard Resources`,
    description: `Learn about ${title} in our comprehensive resource center.`
  };
}

// Helper function to get category title
function getCategoryTitle(category) {
  switch(category) {
    case 'physical-harms':
      return 'Physical Harms';
    case 'spiritual-harms':
      return 'Spiritual Harms';
    case 'how-to-quit':
      return 'How to Quit';
    case 'parents-guide':
      return 'For Parents: Keeping Kids Safe';
    case 'community-resources':
      return 'Community Resources';
    default:
      return 'Resources';
  }
}

// Server component that fetches data and renders the page
export default async function ArticlePage({ params }) {
  // Await params before destructuring
  const resolvedParams = await params;
  const { category, article } = resolvedParams;
  
  // Try to fetch the article content at build/request time
  let articleContent = '';
  
  try {
    // Direct file access from the server component
    const filePath = path.join(process.cwd(), 'app', 'resources', category, `${article}.md`);
    articleContent = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error('Error reading article file:', err);
    return notFound();
  }
  
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <a 
            href={`/resources/${category}`}
            className="inline-flex items-center gap-2 text-[#61EBCE] hover:text-[#51A4FA] transition-colors duration-300"
          >
            <i className="fas fa-arrow-left text-xs"></i>
            <span>Back to {getCategoryTitle(category)}</span>
          </a>
        </div>
        
        <ClientArticleWrapper articleContent={articleContent} />
      </div>
      
      <Footer />
    </div>
  );
} 