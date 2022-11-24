import { useState } from 'react'
import Gallery from './components/Containers/Gallery'
import { Context } from './utils/context'

const App = () => {
  const [context, setContext] = useState({value: 'all', isReady: true});

  return <Context.Provider value={[context, setContext]}><Gallery /></Context.Provider>
}

export default App
