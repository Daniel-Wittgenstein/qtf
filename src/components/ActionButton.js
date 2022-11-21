




function ActionButton(props) {
  /* 
    props.text: string: button text
    ptops.click: function: onClick function
  */
  const style = `p-3 bg-sky-600   text-gray-50 m-1 hover:bg-gray-700 hover:text-gray-50 rounded-sm
    pt-1 pb-1 inline-block`

  return (
    <button
      className = {style}
      onClick = {props.click}
    >
      {props.text}
    </button>
  )
}

export default ActionButton