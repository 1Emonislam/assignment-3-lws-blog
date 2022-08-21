import './App.css'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* search */}
      <Search />
      {/* Blogs */}
      <Blogs />
      {/* footer */}
      <Footer />
    </div>
  )
}

export default App
