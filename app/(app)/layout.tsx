import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-full flex flex-col py-16 px-8 max-w-2xl mx-auto gap-y-16">
        {children}
      </main>
    </>
  );
}
