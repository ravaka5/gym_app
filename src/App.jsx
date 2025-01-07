import './App.css'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'
import { useState } from 'react'

function App() {

    const[poison,setPoison] = useState('individual')
    const [muscles,setMuscles] = useState([])
    const [goal,setGoal] = useState('strength power')
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator 
        poison={poison}
        setPoison={setPoison}
        muscles = {muscles}
        setMuscles = {setMuscles}
        goal = {goal}
        setGoal = {setGoal}
      />
      <Workout/>
    </main>
  )
}

export default App
