
import OptionEntry from './OptionEntry.js'

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

    const optionEntry = (
        <OptionEntry text={item.text} descr={item.descr}
          entryId={props.entryId} selfId={item.key} type={item.type}
          ></OptionEntry>
      )

      return (
        <div className="block mr-6" key={item.key}>
          {optionEntry}
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
