import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Menu from './pages/Menu'; // Future screen

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* This area will eventually use React Router to switch between your 5 screens */}
      <Home /> 
      
      <Footer />
    </div>
  )
}

export default App;