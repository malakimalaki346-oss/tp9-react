function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Malak Nait Haddou
        </h1>
        <p className="text-gray-600 text-center text-lg">
          Portfolio en cours de construction
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Home
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
            Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default App