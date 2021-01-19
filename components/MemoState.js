import React, { useEffect, useState } from 'react'

const MemoState = React.memo(() => {
  const [objState, setObjState] = useState({ name: 'World' })
  console.log('Rendering MemoState, state:', objState)

  useEffect(() => {
    setObjState({ name: 'World' })
  }, [])

  return (
    <header>
      <h1>Hello {objState.name}! (MemoState)</h1>
    </header>
  )
})

MemoState.whyDidYouRender = true

export default MemoState
