"use client";

import dynamic from "next/dynamic";

const Pricing = dynamic(() => import("./sections/Pricing"), {
  ssr: false,
  loading: () => null,
});

const MagneticButtons = dynamic(() => import("./magnetic-buttons"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredClient() {
  return (
    <>
      <MagneticButtons />
      <Pricing />
    </>
  );
}
