import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const { slug: newsSlug } = await params;

  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}