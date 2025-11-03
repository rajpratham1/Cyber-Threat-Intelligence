import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('/api/news');
      const data = await response.json();
      setArticles(data.articles || []);
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Cybersecurity News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="font-bold">{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;