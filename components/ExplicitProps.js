const ExplicitProps = ({ data }) => {
  console.log('Rendering ExplicitProps')
  return (
    <header>
      <h1>Hello {data.name}! (ExplicitProps)</h1>
    </header>
  )
}

ExplicitProps.whyDidYouRender = true

export default ExplicitProps
