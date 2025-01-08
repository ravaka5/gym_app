import './App.css'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'
import { useState } from 'react'
import { generateWorkout } from './utils/functions'

function App() {
    const [workout , setWorkout ] = useState(null)
    const[poison,setPoison] = useState('individual')
    const [muscles,setMuscles] = useState([])
    const [goal,setGoal] = useState('strength power')

    function updateWorkout ()
    {
      if(muscles.length < 1)
      {
        alert('Please select a muscle group')
        return
      }
      let newWorkout = generateWorkout({poison,muscles,goal})
      setWorkout(newWorkout)
    }
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
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
