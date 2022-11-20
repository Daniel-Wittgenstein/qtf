

/* Element where you select the text-transformation to apply.
Basically a list of fancy styled buttons.
*/


function Slider(props) {
  /*
    props:
    props.list: an array.
      must contain objects of the form:
      {
        text: string: button text,
        tooltip: string: tooltip text
        key: string: unique id
      }
    props.click: function: gets called whenever a button is clicked,
      passes index of the button (index inside the props.list array)
  */

  function clickButton(index) {
    props.click(index)
  }

  const listItems = props.list.map( (item, index) =>
    <button
      className="p-3 bg-white text-sky-800 m-1 hover:bg-gray-700 hover:text-gray-50"
      title={item.tooltip} key={item.key} onClick={() => clickButton(index)}>{item.text}</button>
  )

  return (
    <div className="p-1 bg-gray-200 w-[100%] max-h-40 overflow-auto">
        {listItems}
    </div>
  )

}

export default Slider