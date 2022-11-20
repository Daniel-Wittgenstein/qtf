


function OptionsInput(props) {
  return (
    <div className = "inline-block">
      <span className="mr-2">{props.text}:</span>
      <input
        className="border-2 border-sky-900 rounded-md resize-none p-1 max-w-[100px] mr-4"
        type="text"></input>
    </div>
  )

}


export default OptionsInput