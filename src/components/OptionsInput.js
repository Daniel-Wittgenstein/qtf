


function OptionsInput(props) {
  /* 
    props.text
    props.descr
    props.entryId (id of selected over-action)
  */


  return (
    <div className = "flex flex-col mt-2">
      <div className="">
        <div className="border-0 mr-2 inline-block">{props.text}:</div>
        <div className="border-0 align-baseline mt-1 inline-block
        "><input className="
          border-sky-800 border-2 rounded-sm
        " type="textarea"></input></div>
      </div>
      <div className="text-sm text-gray-700">
        {props.descr}
      </div>
    </div>
  )
}



export default OptionsInput