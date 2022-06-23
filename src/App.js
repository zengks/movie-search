import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import About from './pages/About';
import NotFound from './pages/NotFound';
import { OmdbProvider } from './context/omdb/OmdbContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <OmdbProvider>
      <AlertProvider>
        <Router>
          <div>
            <Navbar />
            <main className='min-vh-100'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </OmdbProvider>
  );
}

export default App;
