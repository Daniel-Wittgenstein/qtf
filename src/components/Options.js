
import OptionsInput from './OptionsInput.js'
import OptionsCheckbox from './OptionsCheckbox.js'


function Options(props) {
  /*
    props.list: array with entries:

    {
      text: string: short text
      type: string: "input" or "checkbox"
      checked: boolean (only for checkbox) -> whether it should be checked at app start,
        after that the state is handled by this component
      descr: string: description
      key: unique id
    }
  */

  function onCheckboxChange(item, index) {
    console.log(item, index)
  }
  
  const listItems = props.list.map( (item, index) => {
      let optionsEntry
      if (item.type === "input") {
        optionsEntry = (
          <OptionsInput text={item.text} descr={item.descr} value={item.value}></OptionsInput>
        )
      } else if (item.type === "checkbox") {
        optionsEntry = (
          <OptionsCheckbox text={item.text} descr={item.descr} checked={item.checked}
            onChangeCallback={ () => onCheckboxChange(item, index)}></OptionsCheckbox>
        )
      }
      return (
        <div className="inline-block mr-6" key={item.key}>
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
