import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/404'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import { Provider } from 'react-redux'
import store from './store'
import { useEffect, useState } from 'react'
function App() {
        const [burgerState, setBurgerState] = useState(false)
        const body = document.getElementsByTagName('body')
        if (burgerState) {
                body[0].className = 'active'
        } else {
                body[0].className = ''
        }
        return (
                <div id='root'>
                        <Provider store={store}>
                                <BrowserRouter>
                                        <Header setBurgerState={setBurgerState} burgerState={burgerState} />
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
