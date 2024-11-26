import React from 'react'
import Counter from './Counter'
import ApiFetch from './components/ApiFetch'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
     <div>
      <h1>First React Test Case</h1>
      <Counter/>
      <ApiFetch/>
      <LoginForm/>
     </div>
  )
}

export default App
