import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { ProductDetail } from './pages/ProductDetail'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
