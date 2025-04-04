import React, { useEffect, useState } from 'react'

export default function FeaturedArticle() {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const today = new Date()
    const y = today.getFullYear()
    const m = String(today.getMonth() + 1).padStart(2, '0')
    const d = String(today.getDate()).padStart(2, '0')

    fetch(`https://en.wikipedia.org/api/rest_v1/feed/featured/${y}/${m}/${d}`)
      .then(res => res.json())
      .then(data => setArticle(data.tfa))
      .catch(err => console.error("Failed to fetch featured article:", err))
  }, [])

  if (!article) return null

  return (
    <div className="bg-white rounded-xl p-4 shadow space-y-2">
      <h2 className="text-xl font-bold mb-2">🌟 Featured Article</h2>
      <div className="flex gap-4">
        {article.thumbnail?.source && (
          <img src={article.thumbnail.source} alt={article.title} className="w-32 h-auto rounded" />
        )}
        <div>
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-sm mt-1">{article.extract}</p>
          <a href={article.content_urls?.desktop?.page} className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
            Read full article
          </a>
        </div>
      </div>
    </div>
  )
}