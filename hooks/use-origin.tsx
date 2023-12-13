"use client";

import { useState, useEffect } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  const origin =
    window && typeof window !== undefined && window?.location?.origin
      ? window.location.origin
      : "0";

  return origin;
};
