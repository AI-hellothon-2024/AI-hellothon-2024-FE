import React from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return [1, 2, 3, 4, 5].map((step) => ({ step: `${step}` }));
}

const Page = ({ params }: { params: { step: string } }) => {
  const { step } = params;
  return <div>step {step}</div>;
};

export default Page;
