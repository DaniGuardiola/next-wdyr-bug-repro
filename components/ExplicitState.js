import { useEffect, useState } from 'react'

const ExplicitState = ({ count }) => {
  const [objState, setObjState] = useState({ name: 'ExplicitState World' })
  console.log('Rendering ExplicitState, state:', objState)

  useEffect(() => {
    console.log('Setting objState in ExplicitState')
    setObjState({ name: 'ExplicitState World' })
  }, [count])

  return (
    <header>
      <h1>Hello {objState.name}! (ExplicitState)</h1>
    </header>
  )
}

ExplicitState.whyDidYouRender = true

export default ExplicitState
