
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
      key: unique id (id identifies option inside appState)
    }

    props.entryId: string: id of currently selected slider entry (id of text transformation effect)
  */
  
  const listItems = props.list.map( (item, index) => {
      let optionsEntry
      if (item.type === "input") {
        optionsEntry = (
          <OptionsInput text={item.text} descr={item.descr}
            entryId={props.entryId} selfId={item.key}
            ></OptionsInput>
        )
      } else if (item.type === "checkbox") {
        optionsEntry = (
          <OptionsCheckbox text={item.text} descr={item.descr}
            entryId={props.entryId} selfId={item.key}           
            ></OptionsCheckbox>
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
