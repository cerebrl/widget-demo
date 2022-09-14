import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Widget, { modal, journey, user } from './package/modal'
import './App.css'

new Widget({
  props: {
    config: {
      serverConfig: {
        baseUrl: 'https://openam-crbrl-01.forgeblocks.com/am/',
        timeout: 5000,
      }
    }
  },
  target: document.getElementById('widget')
})

function App() {
  const [count, setCount] = useState(0)
  const [userInfo, setUserInfo] = useState(null)

  journey.onSuccess((data) => {
    setUserInfo(data.user.response)
  })

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {userInfo ? (
          <>
            <pre>{JSON.stringify(userInfo, null, ' ')}</pre>
            <button onClick={() => {
              user.logout()
              setUserInfo(null)
            }}>Logout</button>
          </>
        ) : (
          <button onClick={() => modal.open()}>
            Login
          </button>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
