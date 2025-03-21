// Server component only - no "use client" directive
import Header from '@/public/components/Header';
import Footer from '@/public/components/Footer';
import ClientCategoryWrapper from '@/public/components/resources/ClientCategoryWrapper';

// This function is required for static site generation with output: export
export async function generateStaticParams() {
  // Define all possible category values
  return [
    { category: 'physical-harms' },
    { category: 'spiritual-harms' },
    { category: 'how-to-quit' },
    { category: 'parents-guide' },
    { category: 'community-resources' },
  ];
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { category } = params;
  
  // Get the category title for metadata
  let title;
  switch(category) {
    case 'physical-harms':
      title = 'Physical Harms';
      break;
    case 'spiritual-harms':
      title = 'Spiritual Harms';
      break;
    case 'how-to-quit':
      title = 'How to Quit';
      break;
    case 'parents-guide':
      title = 'For Parents: Keeping Kids Safe';
      break;
    case 'community-resources':
      title = 'Community Resources';
      break;
    default:
      title = 'Resources';
  }
  
  return {
    title: `${title} | SalamGuard Resources`,
    description: `Explore our comprehensive resources about ${title.toLowerCase()}.`
  };
}

// Server component that renders the page
export default function CategoryPage({ params }) {
  const { category } = params;
  
  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <a 
            href="/resources"
            className="inline-flex items-center gap-2 text-[#61EBCE] hover:text-[#51A4FA] transition-colors duration-300"
          >
            <i className="fas fa-arrow-left text-xs"></i>
            <span>Back to Resources</span>
          </a>
        </div>
        
        <ClientCategoryWrapper category={category} />
      </div>
      
      <Footer />
    </div>
  );
} 