"use client";
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ClientArticleWrapper({ articleContent }) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="prose prose-invert prose-lg max-w-4xl mx-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {articleContent}
      </ReactMarkdown>
    </article>
  );
} 