"use client";

import dynamic from "next/dynamic";

const MagneticButtons = dynamic(() => import("./magnetic-buttons"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredClient() {
  return (
    <>
      <MagneticButtons />
    </>
  );
}
