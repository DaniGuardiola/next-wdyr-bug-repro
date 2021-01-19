import React, { useEffect, useState } from 'react'

const MemoState = React.memo(() => {
  console.log('Rendering MemoState')
  const [objState, setObjState] = useState({ name: 'World' })

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
