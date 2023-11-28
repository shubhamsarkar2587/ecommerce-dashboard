"use client"

import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <div className="text-3xl">
      {/* <UserButton afterSignOutUrl="/"/> */}
      <Modal title="Test" description="description" isOpen onClose={() => {}}>children</Modal>
    </div>
  );
}
