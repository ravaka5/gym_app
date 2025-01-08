 
import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"
import PropTypes from "prop-types"

export default function Workout(props) {
  let {workout} = props
  return (
    <SectionWrapper header="Welcome to" title={[
            'The','DANGER','zone'
        ]}>
        <div className="flex flex-col gap-4">
          {
            workout.map((exercise,index)=>
            {
              return(
                <ExerciseCard key={index} index={index} exercise={exercise}/>
              )
            })
          }
        </div>
    </SectionWrapper>
  )
}

Workout.propTypes = {
  workout:PropTypes.array
}

