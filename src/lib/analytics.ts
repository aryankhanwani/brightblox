/**
 * Google Analytics Integration
 * Handles conversion tracking for Podia integration
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track course checkout initiation
 */
export const trackCourseCheckout = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: 500,
      items: [{
        item_id: 'web3-career-blueprint',
        item_name: 'The Web3 Career Blueprint',
        category: 'Online Course',
        quantity: 1,
        price: 500
      }]
    });
  }
};

/**
 * Track lead magnet conversion
 */
export const trackLeadMagnet = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: 0,
      items: [{
        item_id: 'web3-career-checklist',
        item_name: 'Web3 Career Readiness Checklist',
        category: 'Lead Magnet',
        quantity: 1,
        price: 0
      }]
    });
  }
};

/**
 * Track page views
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '', {
      page_path: url,
    });
  }
};
