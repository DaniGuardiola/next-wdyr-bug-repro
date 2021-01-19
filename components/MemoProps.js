import React from 'react'

const MemoProps = React.memo(({ data }) => {
  console.log('Rendering MemoProps, data prop:', data)
  return (
    <header>
      <h1>Hello {data.name}! (MemoProps)</h1>
    </header>
  )
})

MemoProps.whyDidYouRender = true

export default MemoProps
