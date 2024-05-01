import { Layout } from '@src/components';
import { memo } from 'react';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const TermsScreen = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrivacyPolicy />
        <TermsOfService />
      </div>
    </Layout>
  );
};

export default memo(TermsScreen);
