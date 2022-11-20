
import OptionsInput from './OptionsInput.js'
import OptionsCheckbox from './OptionsCheckbox.js'


function Options(props) {
  /*
    props.list: array with entries:

    {
      text: string: short text
      type: string: "input" or "checkbox"
      checked: boolean (only for checkbox)
      descr: string: description
      key: unique id
    }
  */
  
  const listItems = props.list.map( (item, index) => {
      let optionsEntry
      if (item.type === "input") {
        optionsEntry = (
          <OptionsInput text={item.text} descr={item.descr} value={item.value}></OptionsInput>
        )
      } else if (item.type === "checkbox") {
        optionsEntry = (
          <OptionsCheckbox text={item.text} descr={item.descr} checked={item.checked}></OptionsCheckbox>
        )
      }
      return (
        <div className="inline-block" key={item.key}>
          {optionsEntry}
        </div>
      )
    }
  )

  return (
    <div className="m-2">
      {listItems}
    </div>
  )

}

export default Options
