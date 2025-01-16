import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useState } from 'react'

import Header from './components/header/Header'
import NotFound from './components/404'
import Footer from './components/footer/Footer'
import Home from './components/main/Home'
import Shop from './components/shop/Shop'
import store from './store'
import About from './components/about/About'
import Preview from './components/preview/Preview'

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
                                                        <Route path='/shop' element={<Shop />} />
                                                        <Route path='/about' element={<About />} />
                                                        <Route path='/preview/:itemId?' element={<Preview />} />
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
