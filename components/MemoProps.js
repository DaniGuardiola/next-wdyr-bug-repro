import React from 'react'

const MemoProps = React.memo(({ data }) => {
  console.log('Rendering MemoProps')
  return (
    <header>
      <h1>Hello {data.name}! (MemoProps)</h1>
    </header>
  )
})

MemoProps.whyDidYouRender = true

export default MemoProps
