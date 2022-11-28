import { useState } from 'react'
import Gallery from './components/Containers/Gallery'
import Logo from './components/Atoms/Logo'
import { Context, ISearch, defaultSearch } from './utils/context'

const App = () => {
  const [context, setContext] = useState<ISearch>(defaultSearch)

  return (
    <Context.Provider value={[context, setContext]}>
      <Logo />
      <Gallery />
    </Context.Provider>
  )
}

export default App
