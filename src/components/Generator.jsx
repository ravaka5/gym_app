import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types"
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { useState } from "react";

function Header(props){
    const {index,title,description} = props
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}

export default function Generator(props) {

    let {poison , setPoison , muscles , setMuscles , goal , setGoal} = props 

    const [showModal,setShowModal] = useState(false)
    

    function updateMuscles (muscleGroup)
    {

        if(muscles.includes(muscleGroup))
            {
                setMuscles(muscles.filter(val=>val !== muscleGroup ))
                return
        }

        if(muscles.length > 2)
        {
            return
        }

        if(poison !== 'individual')
        {
            setMuscles([...muscles,muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles,muscleGroup])
        if(muscles.length === 2)
        {
            setShowModal(false)
        }
        console.log(muscles)
    }
  return (
    <SectionWrapper header="Generate your workout" title={[
        'It\'s','Huge','O\'clock'
    ]}>
        <Header index="01" title="Pick your poison" description={"Select the workout you want to start"}/>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((type,typeIndex) => {
                return (
                    <button
                     onClick={() => {setPoison(type); setMuscles([])}}
                     key={typeIndex} 
                     className={"bg-slate-950 border border-blue-400 rounded-lg hover:border-blue-600 py-2 px-1 " + (type === poison ? "border-blue-600" : "border-blue-400")}>
                        <p className="capitalize">{type.replaceAll("_"," ")}</p>
                    </button>
                )
            })}
        </div>
        
        <Header index="02" title="Lock on targets" description={"Select the muscles judged for annihilation"}/>
        <div className="bg-slate-950 border p-3 border-solid border-blue-400 rounded-lg flex flex-col">
            <button onClick={() => setShowModal(!showModal)} className="relative flex items-center justify-center">
                <p>Select muscle groups</p>
                <i className="fa-solid fa-caret-down absolute top-1/2 -translate-y-1/2 right-3"></i>
            </button>
            {
                showModal && (
                    <div className="flex flex-col">
                        {(
                            poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison] )
                        ).map((muscleGroup,muscleGroupIndex) => {
                            return(
                                <button 
                                onClick={()=>{updateMuscles(muscleGroup)}}
                                key={muscleGroupIndex}
                                className={"hover:text-blue-400 duration-200 " + (muscles.includes(muscleGroup)
                                ? "text-blue-400" : " ")}
                                >
                                    <p className="uppercase">
                                    {muscleGroup.replaceAll("_"," ")}</p>
                                </button>
                            )
                        })}
                    </div>
                )
            }
        </div>

        <Header index="03" title="Become a Juggernaut" description={"Select your ultimate objective"}/>
        <div className="grid grid-cols-3 gap-4">
            {Object.keys(SCHEMES).map((scheme,schemeIndex) => {
                return (
                    <button
                     onClick={() => setGoal(scheme)}
                     key={schemeIndex} 
                     className={"bg-slate-950 border border-blue-400 rounded-lg hover:border-blue-600 py-2 px-1 " + (scheme === goal ? "border-blue-600" : "border-blue-400")}>
                        <p className="capitalize">{scheme.replaceAll("_"," ")}</p>
                    </button>
                )
            })}
        </div>
    </SectionWrapper>
  )
}

Header.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string ,
}

Generator.propTypes = {
    poison: PropTypes.string,
    setPoison: PropTypes.func,
    muscles: PropTypes.array,
    setMuscles:PropTypes.func,
    goal:PropTypes.string,
    setGoal:PropTypes.func
}