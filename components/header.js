import React, { useState, useEffect } from 'react'

const Header = React.memo(() => {
  const [objState, setObjState] = useState({ name: 'World' })

  useEffect(() => {
    setObjState({ name: 'World' })
  }, [])

  return (
    <header>
      <h1>Hello {objState.name} !</h1>
    </header>
  )
})

export default Header
