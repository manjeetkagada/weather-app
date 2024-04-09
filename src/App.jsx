import { useState } from 'react'
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/MainSection/Main"
import './App.css'

function App() {


  return (
    <>

      <div className="weather_app">

        {/* side bar comp */}
        <Navbar />
        {/* main content detail */}
        <Main />

        {/* forcast detail */}
      </div>


    </>
  )
}

export default App
