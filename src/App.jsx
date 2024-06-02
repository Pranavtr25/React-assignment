// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import Counter from './Counter'
import FormSample from './FormSample'

function App() {

  const container = {
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "space-evenly"
  }

  return (
    <>
    <div style={container}>
      <ProfileCard name = "pranav" email = "pranav@gmail.com"/>
      <ProfileCard name = "shihad" email = "shihad@gmail.com"/>
      <ProfileCard name = "suresh" email = "suresh@gmail.com"/>
      <Counter/>
      <FormSample/>
    </div>
    </>
  )
}

export default App
