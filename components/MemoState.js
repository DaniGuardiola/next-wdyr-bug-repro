import React, { useEffect, useState } from 'react'

const MemoState = ({ count }) => {
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
}

export default React.memo(MemoState)
