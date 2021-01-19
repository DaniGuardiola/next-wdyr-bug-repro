import { useEffect, useState } from 'react'

const ExplicitState = () => {
  const [objState, setObjState] = useState({ name: 'World' })
  console.log('Rendering ExplicitState, state:', objState)

  useEffect(() => {
    setObjState({ name: 'World' })
  }, [])

  return (
    <header>
      <h1>Hello {objState.name}! (ExplicitState)</h1>
    </header>
  )
}

ExplicitState.whyDidYouRender = true

export default ExplicitState
