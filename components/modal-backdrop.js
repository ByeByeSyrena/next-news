'use client';

import { useRouter } from "next/navigation";

export default function ModalBackdrop({ newsItem }) {
  const router = useRouter();

  // Handle the not found case
  if (!newsItem) {
    router.push("/404"); // Redirect to a custom 404 page
    return null; // Prevent rendering
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
    </>
  );
}

