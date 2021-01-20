import React, { useEffect, useState } from 'react'

const MemoState = React.memo(({ count }) => {
  const [objState, setObjState] = useState({ name: 'MemoState World' })
  console.log('Rendering MemoState, state:', objState)

  useEffect(() => {
    console.log('Setting objState in MemoState')
    setObjState({ name: 'MemoState World' })
  }, [count])

  return (
    <header>
      <h1>Hello {objState.name}! (MemoState)</h1>
    </header>
  )
})

MemoState.whyDidYouRender = true

export default MemoState
