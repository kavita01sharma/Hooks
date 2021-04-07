import React from 'react'
import './App.css';
import CompoA from './CompoA';
// import Pracone from './Pracone';

export let usercontext = React.createContext();
export let userchannel = React.createContext();
function App() {

  return (
    <>
    <h1>React Hooks</h1>
    {/* <Pracone/> */}
    <usercontext.Provider value="Kavya">
      <userchannel.Provider value="Coding curry">
        <CompoA/>
      </userchannel.Provider>
    </usercontext.Provider>
    </>
  );
}

export default App;
