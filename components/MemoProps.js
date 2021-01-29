import React from 'react'

const MemoProps = ({ data }) => {
  console.log('Rendering MemoProps, data prop:', data)
  return (
    <header>
      <h1>Hello {data.name}! (MemoProps)</h1>
    </header>
  )
}

export default React.memo(MemoProps)
