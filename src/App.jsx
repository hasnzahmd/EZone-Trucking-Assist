import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <div className="pt-24 px-8 md:px-16 lg:px-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
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