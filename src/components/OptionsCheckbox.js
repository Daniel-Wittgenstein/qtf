


function OptionsCheckbox(props) {
  return (
    <div className = "inline-block flex items-center">
      <div className="border-0 mr-2 ">{props.text}:</div>
      <div className="border-0 align-baseline mt-1"><input className="" type="checkbox"></input></div>
    </div>
  )

}


export default OptionsCheckbox