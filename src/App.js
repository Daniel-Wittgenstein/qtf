import React from 'react';
import './App.css';
import Slider from './components/Slider.js'
import TextField from './components/TextField.js'
import Transformers from "./Transformers.js"
import SideBar from "./components/SideBar.js"

function App() {
  /* The right-hand column is optional and only displayed on big screens
  It should only be used for optional things like examples, not for anything
  app-critical.
  */

  const sliderList = Transformers

  const sliderClick = (index) => {
    //console.log("clicked index button:", index)
  }

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col h-[100%] max-w-[1600px] custom-class-main-wrapper">

        <div className="bg-sky-400 text-white font-bold p-4 text-left">
          QUICK TEXT FIXER
        </div>

        <div className="flex justify-between grow bg-white">

          <div className="p-0 pt-0 custom-class-main-column bg-white">
            <Slider list={sliderList} click={sliderClick}></Slider>
            <TextField></TextField>
          </div>
          
          <div className="bg-white p-4 custom-class-side-column">
            <SideBar></SideBar>
          </div>
            
        </div>

      </div>
    
    </div>
  );
}

export default App;
