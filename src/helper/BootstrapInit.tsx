"use client";

import { useEffect } from "react";

export default function BootstrapInit(): null {
  useEffect(() => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      // Dynamically import bootstrap JS
      import("bootstrap").then(() => {
        // Bootstrap loaded successfully
      });
    }
  }, []);

  return null;
}
