import Section from "./Section";
import PetEl from "./PetEl";
import Btn from "./Btn";
import { useState, useEffect, useCallback } from "react";

const API_KEY = "ff0e248d387243c7ad1307cb57e658ca";
const PROXY_URL = "https://corsproxy.io/?";
const TARGET_URL = "https://newsapi.org/v2/everything";
const PAGE_SIZE = 8;
const QUERY = "pets OR animals OR adoption";

const PLACEHOLDER_URL = "https://placehold.co/600x400?text=No+Image+Available";

const fetchNews = async (page) => {
  const newsApiUrl = `${TARGET_URL}?q=${QUERY}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}&language=en&sortBy=publishedAt`;
  const url = `${PROXY_URL}${encodeURIComponent(newsApiUrl)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const articles = data.articles.map((article, index) => ({
      id: `${article.url}-${index}`,
      image: article.urlToImage || null,
      desc: article.title || "No title provided",
      url: article.url,
    }));

    const totalResults = data.totalResults;
    const hasMore = page * PAGE_SIZE < totalResults;

    return { news: articles, hasMore: hasMore };
  } catch (error) {
    return { news: [], hasMore: false };
  }
};

export default function Pets() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadNews = useCallback(
    async (nextPage) => {
      if (loading || (!hasMore && nextPage > 1)) return;

      setLoading(true);

      try {
        const result = await fetchNews(nextPage);

        setNews((prevNews) => [...prevNews, ...result.news]);
        setHasMore(result.hasMore);
        setCurrentPage(nextPage);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    [loading, hasMore]
  );

  useEffect(() => {
    if (currentPage === 0) {
      loadNews(1);
    }
  }, [loadNews, currentPage]);

  const handleSeeMore = () => {
    loadNews(currentPage + 1);
  };

  return (
    <Section title="Our news" id="news">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
        {news.length === 0 && loading ? (
          <p className="col-span-4 text-center">Loading news...</p>
        ) : news.length > 0 ? (
          news.map((pet) => (
            <a
              key={crypto.randomUUID()}
              href={pet.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PetEl image={pet.image || PLACEHOLDER_URL} desc={pet.desc} />
            </a>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-600">
            Sorry, no news found for this query.
          </p>
        )}
      </ul>

      {hasMore && !loading && <Btn text="See more" onClick={handleSeeMore} />}

      {!hasMore && news.length > 0 && (
        <p className="text-center text-gray-500 mt-4">All news loaded.</p>
      )}

      {loading && news.length > 0 && (
        <p className="col-span-4 text-center">Loading next page...</p>
      )}
    </Section>
  );
}
