"use client";
import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

export default function ClientCategoryWrapper({ category }) {
  const [categoryArticles, setCategoryArticles] = useState([]);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set articles based on the category
    setCategoryArticles(getCategoryArticles(category));
  }, [category]);

  // Get the proper title based on the category slug
  const getCategoryTitle = () => {
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
  };
  
  // Get the articles for the specific category
  const getCategoryArticles = (categoryId) => {
    switch(categoryId) {
      case 'physical-harms':
        return [
          {
            title: "How Addiction Rewires Your Brain",
            description: "The neuroscience behind addiction and its effects on brain chemistry",
            icon: "fas fa-brain",
            readTime: "5 min read",
            comingSoon: false
          },
          {
            title: "Physical Symptoms of Digital Addiction",
            description: "Recognizing the warning signs your body is giving you",
            icon: "fas fa-exclamation-triangle",
            readTime: "7 min read",
            comingSoon: false
          },
          {
            title: "Sleep Disruption and Recovery",
            description: "How screen time affects sleep patterns and steps to restore healthy sleep",
            icon: "fas fa-moon",
            readTime: "6 min read",
            comingSoon: true
          }
        ];
      case 'spiritual-harms':
        return [
          {
            title: "Addiction and Spiritual Disconnection",
            description: "Understanding how addiction creates distance in your spiritual life",
            icon: "fas fa-heart-broken",
            readTime: "8 min read",
            comingSoon: false
          },
          {
            title: "Rebuilding Your Relationship with Allah",
            description: "Steps to reconnect spiritually after addiction",
            icon: "fas fa-hands",
            readTime: "10 min read",
            comingSoon: false
          },
          {
            title: "Purification of the Heart",
            description: "Islamic principles for cleansing the heart from addiction",
            icon: "fas fa-heart",
            readTime: "9 min read",
            comingSoon: true
          }
        ];
      case 'how-to-quit':
        return [
          {
            title: "The 30-Day Recovery Plan",
            description: "A comprehensive month-long guide to breaking addiction patterns",
            icon: "fas fa-calendar-alt",
            readTime: "12 min read",
            comingSoon: false
          },
          {
            title: "Building a Support System",
            description: "How to create a network of people who will help you stay accountable",
            icon: "fas fa-users",
            readTime: "7 min read",
            comingSoon: false
          },
          {
            title: "Replacing Bad Habits with Good Ones",
            description: "Practical strategies for habit replacement",
            icon: "fas fa-exchange-alt",
            readTime: "8 min read",
            comingSoon: false
          },
          {
            title: "Dealing with Relapses",
            description: "How to bounce back stronger after a setback",
            icon: "fas fa-redo",
            readTime: "6 min read",
            comingSoon: true
          }
        ];
      case 'parents-guide':
        return [
          {
            title: "Age-Appropriate Conversations About Online Safety",
            description: "How to talk to children of different ages about internet dangers",
            icon: "fas fa-comments",
            readTime: "9 min read",
            comingSoon: false
          },
          {
            title: "Setting Up Parental Controls",
            description: "Technical guide to securing devices for children",
            icon: "fas fa-lock",
            readTime: "11 min read",
            comingSoon: false
          },
          {
            title: "Recognizing Warning Signs",
            description: "How to identify if your child is developing unhealthy digital habits",
            icon: "fas fa-search",
            readTime: "8 min read",
            comingSoon: true
          }
        ];
      case 'community-resources':
        return [
          {
            title: "Khutbah Guide on Digital Wellness",
            description: "Pre-written khutbah templates addressing addiction issues",
            icon: "fas fa-book-open",
            readTime: "15 min read",
            comingSoon: false
          },
          {
            title: "Hosting a Workshop in Your Community",
            description: "Step-by-step guide to organizing addiction awareness events",
            icon: "fas fa-chalkboard-teacher",
            readTime: "14 min read",
            comingSoon: true
          },
          {
            title: "Mentoring Guide for Youth Leaders",
            description: "How to support young people struggling with addiction",
            icon: "fas fa-hands-helping",
            readTime: "12 min read",
            comingSoon: false
          }
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{getCategoryTitle()}</h1>
        <p className="text-xl text-gray-300">All articles in this category</p>
        <div className="h-1 w-24 bg-gradient-to-r from-[#61EBCE] to-[#51A4FA] rounded-full mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryArticles.length > 0 ? (
          categoryArticles.map((article, index) => (
            <div key={index} className="transform transition-all duration-300 hover:-translate-y-1">
              <ArticleCard article={article} categoryId={category} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-400">Articles for this category are being developed. Please check back soon.</p>
        )}
      </div>
    </>
  );
} 