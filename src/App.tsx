import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/404'
import Footer from './components/Footer'
import Home from './components/home/Home'

function App() {
        return (
                <>
                        <BrowserRouter>
                                <Header />
                                <main>
                                        <div className='container'>
                                                <Routes>
                                                        <Route path='/' element={<Home />} />
                                                        <Route path='*' element={<NotFound />} />
                                                </Routes>
                                        </div>
                                </main>

                                <Footer />
                        </BrowserRouter>
                </>
        )
}

export default App
