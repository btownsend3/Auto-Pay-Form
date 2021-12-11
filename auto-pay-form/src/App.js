import React, {useContext, useState} from 'react'
import PDCForm from './components/PDCForm'
import CardForm from './components/CardForm'
import CreateDocumentPDC from './components/CreateDocumentPDC'
import CreateDocumentCC from './components/CreateDocumentCC'
import {Context} from './Context'

function App() {
  const {completeForm} = useContext(Context)
  const [creditCardForm, setCreditCardForm] = useState(false)
  const [pdcForm, setPdcForm] = useState(false)

  function handleCreditCardForm(e) {
    e.preventDefault()
    setCreditCardForm(true)
    setPdcForm(false)
  }

  function handlePdcForm(e) {
    e.preventDefault()
    setPdcForm(true)
    setCreditCardForm(false)
  }

  return (
    <main>
      {!completeForm && (
        <div className="flex" style={{justifyContent: 'center'}}>
          <button className={creditCardForm ? 'btn-filled' : 'btn-border'} onClick={handleCreditCardForm}>Credit Card</button> 
          <button className={pdcForm ? 'btn-filled' : 'btn-border'} onClick={handlePdcForm}>PDC</button> 
        </div>
      )}

      {pdcForm && !completeForm && (
        <PDCForm />
      )}
      {pdcForm && completeForm && (
        <CreateDocumentPDC />
      )}
      {creditCardForm && !completeForm && (
        <CardForm />
      )}
      {creditCardForm && completeForm && (
        <CreateDocumentCC />
      )}

    </main>
  )
}

export default App