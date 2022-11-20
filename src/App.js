import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  /* The right-hand column is optional and only displayed on big screens
  It should only be used for optional things like examples, not for anything
  app-critical.
  */
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col h-[100%]">

        <div className="bg-sky-400 text-gray-50 font-bold p-4 text-left">
          QUICK TEXT FIXER
        </div>

        <div className="flex justify-between grow">

          <div className="bg-red-500 grow">
            main
          </div>
          
          <div className="bg-yellow-400 hidden lg:block max-w-[33%] ">
            optional column - only on big screens etc. etc. etc. etc. etc. etc. etc. etc. etc. etc. etc. etc.
          </div>
            
        </div>

      </div>
    
    </div>
  );
}

export default App;
