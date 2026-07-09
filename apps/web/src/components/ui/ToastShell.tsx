import React from 'react';
import { ToastProvider } from './ToastContext';
import { ShareButton } from '@/components/ShareButton';
import { Newsletter } from '@/components/Newsletter';
import { Hero } from '@/components/Hero';
import { FAQAccordion } from '@/components/FAQAccordion';
import { BackersProgress } from '@/components/support/donation/components/BackersProgress';
import { InitiativesLayout } from '@/features/initiatives/components/InitiativesLayout';


export const ToastShell: React.FC = () => {
  return (
    <ToastProvider>
      <div className="p-5 mb-8 flex justify-end">
        <ShareButton />
      </div>
      <Hero />
      <InitiativesLayout />
      <div className='px-6'>
        <BackersProgress />
      </div>
      <FAQAccordion />
      <Newsletter />
    </ToastProvider>
  );
};

export default ToastShell;
