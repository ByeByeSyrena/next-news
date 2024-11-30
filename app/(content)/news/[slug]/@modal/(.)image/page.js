'use client';

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";
import React from "react";

export default function InterceptedImagePage({ params: paramsPromise }) {
  const router = useRouter();

  // Unwrap the params promise
  const params = React.use(paramsPromise);

  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  // Handle the not found case
  if (!newsItem) {
    router.push("/404"); // Redirect to a custom 404 page
    return null; // Prevent rendering
  }

  return (
    <>
      {/* Modal backdrop */}
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        {/* Fullscreen image */}
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={400}
            height={500}
          />
        </div>
      </dialog>
    </>
  );
}
