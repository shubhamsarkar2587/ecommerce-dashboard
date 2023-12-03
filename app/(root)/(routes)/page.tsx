"use client";

import { useEffect, useState } from "react";

import { userStoreModal } from "@/hooks/use-store-modal";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = userStoreModal((state) => state.onOpen)
  const isOpen = userStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-3xl">
      Root Page dfdfdf
    </div>
  );
}
