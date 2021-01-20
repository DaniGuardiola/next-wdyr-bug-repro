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
      <button onClick={forceRerender}>Force re-render ({counter})</button>
      <ExplicitState count={counter} />
      <ExplicitProps data={{ name: 'ExplicitProps World' }} />
      <MemoState count={counter} />
      <MemoProps data={{ name: 'MemoProps World' }} />
    </div>
  )
}
