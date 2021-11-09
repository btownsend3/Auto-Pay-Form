import React, {useContext} from 'react'
import Form from './Form'
import CreateDocument from './CreateDocument'
import {Context} from './Context'

function App() {
  const {completeForm} = useContext(Context)
  return (
    <main>
      {completeForm ? <CreateDocument /> : <Form />}
    </main>
  )
}

export default App