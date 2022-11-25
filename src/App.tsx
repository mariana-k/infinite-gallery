import { useState } from 'react'
import Gallery from './components/Containers/Gallery'
import Logo from './components/Atoms/Logo'
import { Context } from './utils/context'

const App = () => {
  const defaultValue: string = 'All'
  const [context, setContext] = useState({ value: defaultValue, newValue: defaultValue, isNew: false })

  return (
    <Context.Provider value={[context, setContext]}>
      <Logo />
      <Gallery />
    </Context.Provider>
  )
}

export default App
