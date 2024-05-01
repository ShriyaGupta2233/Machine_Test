import React from 'react'
import'./App.css'
import FirstSection from './Components/First Section/FirstSection'
import SecondSection from './Components/Second Section/SecondSection'
import ThirdSection from './Components/ThirdSection/ThirdSection'
import FourthSection from './Components/FourthSection/FourthSection'
const App = () => {
  return (
    <>
      <div className='main_container'>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      </div>
    </>
  )
}

export default App