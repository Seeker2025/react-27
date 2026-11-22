import { useState } from 'react'
import './App.css'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { StartReact } from './StartReact/StartReact'
import { Context } from './Context/'
import { Alert } from './Alert/'
import { Main  }  from './Main/'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
                  <Context>
                    <section id="center">
                                            
                                            <StartReact/>

                                            <Main/>

                                            <Alert/>
                    
                    </section>
                  </Context>
  )
}

export default App
