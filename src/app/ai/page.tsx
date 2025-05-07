import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Services | Company Name',
  description: 'Explore our cutting-edge AI solutions for your business.',
};

export default function AIPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-black">AI Services</h1>
      <p className="text-lg">
        Leverage our AI expertise to drive innovation and efficiency in your organization.
      </p>
      {/* Add more content, images, or components here */}
    </div>
  );
}