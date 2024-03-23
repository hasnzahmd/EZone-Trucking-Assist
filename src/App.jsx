import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 md:px-16 lg:px-20">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App