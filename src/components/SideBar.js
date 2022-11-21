
import { useSelector } from 'react-redux'


function SideBar(props) {
  const appState = useSelector(state => state.main)
    
  return (
    <>
    <div className="">
      {appState.sideBar.title}
    </div>
    <div className="display-linebreak mb-8">
       {appState.sideBar.text1}
    </div>
    <div className="display-linebreak">
      {appState.sideBar.text2}
    </div>
    </>
  )
}

export default SideBar