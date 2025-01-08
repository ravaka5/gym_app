import PropTypes from "prop-types"
export default function Button(props) {
    const { text , click } = props
  return (
    <div>
      <button onClick={click} className="px-8 py-4 mx-auto rounded-md border-2 border-blue-400 bg-slate-950 border-solid blueShadow duration-200">
            <p>{text}</p>
        </button>
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    click:PropTypes.func
}