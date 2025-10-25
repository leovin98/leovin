"use client";

import { useState } from "react";
import { PiCheck, PiShareNetworkDuotone } from "react-icons/pi";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center text-secondary cursor-pointer p-2 rounded-md hover:bg-foreground appearance-none focus:outline-none animation"
    >
      {copied ? (
        <PiCheck className="size-4 group-hover:text-secondary-foreground animation" />
      ) : (
        <PiShareNetworkDuotone className="size-4 group-hover:text-secondary-foreground animation" />
      )}
    </button>
  );
}
