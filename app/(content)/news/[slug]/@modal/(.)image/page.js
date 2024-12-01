
//'use client'
// import { DUMMY_NEWS } from "@/dummy-news";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function InterceptedImagePage({ params: paramsPromise }) {
//   const router = useRouter();

//   // Unwrap the params promise
//   const params = React.use(paramsPromise);

//   const newsItemSlug = params.slug;
//   const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

//   // Handle the not found case
//   if (!newsItem) {
//     router.push("/404"); // Redirect to a custom 404 page
//     return null; // Prevent rendering
//   }

//   return (
//     <>
//       {/* Modal backdrop */}
//       <div className="modal-backdrop" onClick={router.back} />
//       <dialog className="modal" open>
//         {/* Fullscreen image */}
//         <div className="fullscreen-image">
//           <img
//             src={`/images/news/${newsItem.image}`}
//             alt={newsItem.title}
//             width={400}
//             height={500}
//           />
//         </div>
//       </dialog>
//     </>
//   );
// }


import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";


export default async function InterceptedImagePage({ params }) {
  const { slug: newsSlug } = await params;

  let newsItem;

  if(newsSlug){
    newsItem = await getNewsItem(newsSlug);
  } else {
    notFound();
  }

  return (
    <div>
    <ModalBackdrop newsItem={newsItem}/>
    <dialog className="modal" open>
        <div className="fullscreen-image">
          {newsItem && <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={400}
            height={500}
            priority
          />}
        </div>
      </dialog>
    </div>
  );
}