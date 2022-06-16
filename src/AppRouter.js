import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Pages
import Home from './pages/home/Home'
import ExerciseDetails from "./pages/details/ExerciseDetails"
import Exercise from './pages/exercise/Exercise'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise' element={<Exercise />} />
                <Route path='/exercise:id' element={<ExerciseDetails />} />
            </Routes>
        </>
    )
}

export default AppRouter    