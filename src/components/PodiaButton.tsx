'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { redirectToCourseCheckout, redirectToLeadMagnet } from '@/lib/podia'

interface PodiaButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant: 'course' | 'leadMagnet'
  children: React.ReactNode
  className?: string
}

/**
 * Podia Integration Button Component
 * Handles redirects to Podia checkout pages
 */
export const PodiaButton = forwardRef<HTMLButtonElement, PodiaButtonProps>(
  ({ variant, children, className = '', ...props }, ref) => {
    const handleClick = () => {
      if (variant === 'course') {
        redirectToCourseCheckout()
      } else if (variant === 'leadMagnet') {
        redirectToLeadMagnet()
      }
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </button>
    )
  }
)

PodiaButton.displayName = 'PodiaButton'
