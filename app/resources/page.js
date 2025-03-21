"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../fontawesome.js";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";

// Import custom components
import ResourceHero from "@/public/components/resources/ResourceHero";
import CategoryNav from "@/public/components/resources/CategoryNav";
import CategorySection from "@/public/components/resources/CategorySection";
import NewsletterSection from "@/public/components/resources/NewsletterSection";
import FAQSection from "@/public/components/resources/FAQSection";
import CTASection from "@/public/components/resources/CTASection";
import { useEffect, useCallback } from "react";

export default function ResourcesPage() {
  // Scroll to section function - extracted to be reusable
  const scrollToSection = useCallback((sectionId) => {
    // First try to find the specific anchor element
    const anchorElement = document.getElementById(`${sectionId}-anchor`);
    // Fall back to the section element if anchor doesn't exist
    const element = anchorElement || document.getElementById(sectionId);
    
    if (element) {
      // Get the heights of fixed elements
      const headerElement = document.querySelector('header');
      const navElement = document.querySelector('nav');
      
      // Calculate the combined height of fixed elements
      const headerHeight = headerElement ? headerElement.offsetHeight : 64;
      const navHeight = navElement ? navElement.offsetHeight : 0;
      const totalOffset = headerHeight + navHeight + 8; // Reduced padding for better positioning
      
      // Calculate the scroll position
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - totalOffset;
      
      // Scroll to the element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without triggering a scroll (for bookmarking/sharing)
      if (history.pushState) {
        history.pushState(null, null, `#${sectionId}`);
      } else {
        location.hash = `#${sectionId}`;
      }
    }
  }, []);

  // Fix for scroll position on page load
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Handle hash links for direct navigation
    if (window.location.hash) {
      // Small delay to ensure components are rendered
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        scrollToSection(id);
      }, 700); // Increased delay to ensure all components are fully rendered
    }
  }, [scrollToSection]);

  // Resource categories with their respective articles
  const resourceCategories = [
    {
      id: "physical-harms",
      title: "Physical Harms",
      icon: "fas fa-heartbeat",
      description: "Understanding the physical impact of addiction on your body and brain",
      articles: [
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
      ]
    },
    {
      id: "spiritual-harms",
      title: "Spiritual Harms",
      icon: "fas fa-pray",
      description: "Exploring the spiritual impact of addiction and pathways to healing",
      articles: [
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
      ]
    },
    {
      id: "how-to-quit",
      title: "How to Quit",
      icon: "fas fa-door-open",
      description: "Practical strategies and step-by-step guides to break free from addiction",
      articles: [
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
      ]
    },
    {
      id: "parents-guide",
      title: "For Parents: Keeping Kids Safe",
      icon: "fas fa-child",
      description: "Resources for parents to protect children and have important conversations",
      articles: [
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
      ]
    },
    {
      id: "community-resources",
      title: "Community Resources",
      icon: "fas fa-mosque",
      description: "Materials for community leaders, teachers, and mentors",
      articles: [
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
      ]
    }
  ];

  return (
    <div className="bg-[#1C1F26] text-gray-200 min-h-screen font-sans">
      <Header />
      
      {/* Hero Section */}
      <ResourceHero scrollToSection={scrollToSection} />
      
      {/* Category Navigation */}
      <CategoryNav categories={resourceCategories} scrollToSection={scrollToSection} />
      
      {/* Resource Categories */}
      <section className="py-16 bg-[#1C1F26]">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {resourceCategories.map((category, index) => (
              <CategorySection key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
} 