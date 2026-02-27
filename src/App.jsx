import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const hiddenRoutes = ['/login', '/signup'];

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const hideChrome = hiddenRoutes.includes(pathname);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideChrome && <Navbar />}
      <div className="flex-grow">{children}</div>
      {!hideChrome && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;