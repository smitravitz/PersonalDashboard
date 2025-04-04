import React, { useEffect, useState } from 'react'

export default function OnThisDay() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const today = new Date()
    const month = today.toLocaleString('en-us', { month: 'long' })
    const day = today.getDate()
    const page = `Wikipedia:Selected_anniversaries/${month}_${day}`

    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${page}&format=json&origin=*`)
      .then(res => res.json())
      .then(data => {
        const html = data.parse.text['*']
        const container = document.createElement('div')
        container.innerHTML = html

        const items = container.querySelectorAll('ul > li')
        const parsedEvents = []

        items.forEach(li => {
          const a = li.querySelector('a[href^="/wiki/"]')
          if (!a) return

          const title = a.getAttribute('href').replace('/wiki/', '')
          parsedEvents.push({
            title: decodeURIComponent(title.replace(/_/g, ' ')),
            href: 'https://en.wikipedia.org/wiki/' + title,
            event: li.textContent
          })
        })

        setEvents(parsedEvents.slice(0, 5))
      })
  }, [])

  return (
    <div className="space-y-4">
      {events.map((item, idx) => (
        <OnThisDayItem key={idx} item={item} />
      ))}
    </div>
  )
}

function OnThisDayItem({ item }) {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.title)}`)
      .then(res => res.json())
      .then(data => {
        setSummary(data)
      })
  }, [item.title])

  return (
    <div className="flex items-start gap-4 bg-gray-50 p-3 rounded-lg shadow-sm">
      {summary?.thumbnail?.source && (
        <img src={summary.thumbnail.source} alt={item.title} className="w-24 h-auto rounded" />
      )}
      <div>
        <p className="font-medium">{item.event}</p>
        {summary && <p className="italic text-sm mt-1">🧠 {summary.extract}</p>}
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline mt-1 inline-block">
          Read more
        </a>
      </div>
    </div>
  )
}