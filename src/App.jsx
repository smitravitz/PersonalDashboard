import OnThisDay from './components/OnThisDay'
import FeaturedArticle from './components/FeaturedArticle'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-xl font-bold mb-2">📆 On This Day</h2>
          <OnThisDay />
        </div>
        <FeaturedArticle />
      </div>
    </div>
  )
}