import ExplicitProps from '../components/ExplicitProps.js'
import ExplicitState from '../components/ExplicitState.js'
import MemoProps from '../components/MemoProps.js'
import MemoState from '../components/MemoState.js'
import { useState } from 'react'

export default function Home () {
  const [counter, setCounter] = useState(0)
  function forceRerender () {
    setCounter(counter + 1)
  }
  return (
    <div>
      <button onClick={forceRerender}>Force re-render</button>
      <ExplicitState />
      <ExplicitProps data={{ name: 'World' }} />
      <MemoState />
      <MemoProps data={{ name: 'World' }} />
    </div>
  )
}
