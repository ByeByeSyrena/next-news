import NewsList from "@/components/news-list";
import { getNews } from "@/lib/get-news";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  //backend
  // const news = await getNews();

  //this is from next server
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
