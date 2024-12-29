import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/404'
import Footer from './components/Footer'
import Home from './components/home/Home'
import { Provider } from 'react-redux'
import store from './store'

function App() {
        return (
                <div id='root'>
                        <Provider store={store}>
                                <BrowserRouter>
                                        <Header />
                                        <main>
                                                <Routes>
                                                        <Route path='/' element={<Home />} />
                                                        <Route path='*' element={<NotFound />} />
                                                </Routes>
                                        </main>

                                        <Footer />
                                </BrowserRouter>
                        </Provider>
                </div>
        )
}

export default App
