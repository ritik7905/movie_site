import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Pages
import Home from './pages/home/Home'
import About from './pages/about/About'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    )
}

export default AppRouter