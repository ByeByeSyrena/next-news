'use server'

export async function getNews (){
  let news = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);
    if (!response.ok) console.log(`HTTP error! Status: ${response}`);
   news = await response.json();

   console.log(response);
  } catch (error) {
    console.error('Error fetching news:', error);
    return <p>Failed to load news. Please try again later.</p>;
  }

  return news;
}