import React from 'react';
import './App.css';
import Slider from './components/Slider.js'
import TextField from './components/TextField.js'
import Options from './components/Options.js'

function App() {
  /* The right-hand column is optional and only displayed on big screens
  It should only be used for optional things like examples, not for anything
  app-critical.
  */

  const sliderList = [
    {
      text: "add prefix / suffix",
      tooltip: "tooltip 1",
      key: "id1",
    },
    {
      text: "remove duplicate lines",
      tooltip: "tooltip 2",
      key: "id2",
    },
    {
      text: "collapse duplicate lines",
      tooltip: "tooltip 3",
      key: "id3",
    },
    {
      text: "remove duplicate whitespace (smart)",
      tooltip: "tooltip 4",
      key: "id4",
    },
  ]

  const sliderClick = (index) => {
    console.log("clicked index button:", index)
  }

  const optionsList = [
    {
      type: "input",
      text: "1234567",
      key: "id1",
      descr: `This option does rtoo.`
    },
    {
      type: "input",
      text: "abcd1234567",
      key: "id2",
      descr: `This option does someting.`
    },
    {
      type: "checkbox",
      text: "121221",
      key: "id3",
      descr: `This option does someting.`
    },
  ]

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col h-[100%]">

        <div className="bg-sky-400 text-white font-bold p-4 text-left">
          QUICK TEXT FIXER
        </div>

        <div className="flex justify-between grow">

          <div className="grow p-4">
            <Slider list={sliderList} click={sliderClick}></Slider>
            <Options list={optionsList}></Options>
            <TextField></TextField>
          </div>
          
          <div className="bg-white hidden lg:block max-w-[33%] p-4">
            optional column - only on big screens etc. etc. etc. etc. etc. etc. etc. etc. etc. etc. etc. etc.
          </div>
            
        </div>

      </div>
    
    </div>
  );
}

export default App;
