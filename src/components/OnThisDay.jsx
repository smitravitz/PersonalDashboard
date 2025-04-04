import React, { useEffect, useState } from 'react'

export default function OnThisDay() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const today = new Date()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`

    fetch(url)
      .then(res => res.json())
      .then(data => setEvents(data.events?.slice(0, 5) || []))
      .catch(err => console.error("Failed to fetch on this day:", err))
  }, [])

  return (
    <div className="space-y-4">
      {events.map((event, idx) => {
        const page = event.pages[0]
        return (
          <div key={idx} className="flex items-start gap-4 bg-gray-50 p-3 rounded-lg shadow-sm">
            {page?.thumbnail?.source && (
              <img src={page.thumbnail.source} alt={page.title} className="w-20 h-20 object-cover rounded" />
            )}
            <div>
              <p className="font-semibold">{event.year} — {page?.title || 'Untitled'}</p>
              <p className="text-sm italic mt-1">🧠 {page?.extract || event.text}</p>
              <a href={`https://en.wikipedia.org/wiki/${page?.title?.replace(/ /g, "_")}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline mt-1 inline-block">
                Read more
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}