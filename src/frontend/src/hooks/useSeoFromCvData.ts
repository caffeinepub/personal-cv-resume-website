import { useEffect } from 'react';
import type { CVData } from '../data/cv';

export function useSeoFromCvData(cvData: CVData) {
  useEffect(() => {
    const { name, title, summary } = cvData.hero;
    
    // Set document title
    document.title = `${name} - ${title}`;
    
    // Set or update meta description
    const description = summary;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: `${name} - ${title}` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' }
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${name} - ${title}` },
      { name: 'twitter:description', content: description }
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [cvData]);
}
