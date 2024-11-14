import React from "react";
import { GAME_STEPS } from "@/lib/constants";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(GAME_STEPS).map((step) => ({ step }));
}

const Page = ({ params }: { params: { step: string } }) => {
  const { step } = params;
  return <div>step {step}</div>;
};

export default Page;
