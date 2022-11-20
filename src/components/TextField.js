


import { useState } from 'react';


function TextField(props) {

  const [state, setState] = useState('')

  function handleChange(ev) {
    setState(ev.target.value);
  }

  return (
    <div>
      <textarea spellCheck="false" className="border-2 border-sky-900 rounded-md resize-none
        w-[100%] mt-2 p-2 text-gray-700 h-60"
        value={state}
        onChange={handleChange}
      />
    </div>
  )
}


export default TextField