
import { useSelector } from 'react-redux'

import arrow from '../assets/arrow.png'

function SideBar(props) {
  const appState = useSelector(state => state.main)
    
  const boxStyle = `shadow-lg border-4 p-2 rounded-md`

  return (
    <>
    <div className="mb-2 font-bold text-gray-600">
      {appState.sideBar.title}:
    </div>
    <div className={"display-linebreak mb-6 " + boxStyle}>
       {appState.sideBar.text1}
    </div>
    <div className="mb-4 flex justify-center">
      <img className={"w-4"} src={arrow} alt="Arrow" />
    </div>
    <div className={"display-linebreak " + boxStyle}>
      {appState.sideBar.text2}
    </div>
    </>
  )
}

export default SideBar