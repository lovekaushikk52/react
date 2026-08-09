import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user="dian chan" age={23} img="https://images.unsplash.com/photo-1755973707174-47be69f3d037?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGFuaW1lfGVufDB8fDB8fHww" />
      <Card user="Love" age={21} img="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='bubu' age={5} img="https://plus.unsplash.com/premium_vector-1742668947361-739780396fb6?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
