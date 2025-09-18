/**
 * Podia Integration Utilities
 * Handles lead magnet and course checkout redirects
 */

export interface PodiaConfig {
  storeUrl: string;
  checkoutUrl: string;
  leadMagnetUrl: string;
}

export const podiaConfig: PodiaConfig = {
  storeUrl: process.env.NEXT_PUBLIC_PODIA_STORE_URL || '',
  checkoutUrl: process.env.NEXT_PUBLIC_PODIA_CHECKOUT_URL || '',
  leadMagnetUrl: process.env.NEXT_PUBLIC_PODIA_LEAD_MAGNET_URL || '',
};

/**
 * Redirects user to Podia checkout for the main course
 */
export const redirectToCourseCheckout = () => {
  if (typeof window !== 'undefined' && podiaConfig.checkoutUrl) {
    // Track the conversion attempt
    if (typeof gtag !== 'undefined') {
      gtag('event', 'begin_checkout', {
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
    
    window.location.href = podiaConfig.checkoutUrl;
  }
};

/**
 * Redirects user to Podia lead magnet checkout (free)
 */
export const redirectToLeadMagnet = () => {
  if (typeof window !== 'undefined' && podiaConfig.leadMagnetUrl) {
    // Track lead magnet conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'generate_lead', {
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
    
    window.location.href = podiaConfig.leadMagnetUrl;
  }
};

/**
 * Validates Podia configuration
 */
export const validatePodiaConfig = (): boolean => {
  return !!(podiaConfig.checkoutUrl && podiaConfig.leadMagnetUrl);
};

// Type declaration for gtag (Google Analytics)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
