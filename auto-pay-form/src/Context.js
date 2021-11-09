import React, {useState} from 'react'
const Context = React.createContext()

function ContextProvider(props) {
  const [routingNum, setRoutingNum] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [payment, setPayment] = useState('')
  const [firstDate, setFirstDate] = useState('')
  const [totalPayments, setTotalPayments] = useState('')
  const [payFrequency, setPayFrequency] = useState('')
  const [chosenDate, setChosenDate] = useState('')
  const [checkingNames, setCheckingNames] = useState('')
  const [debtorName, setDebtorName] = useState('')
  const [debtorNumber, setDebtorNumber] = useState('')
  const [collectorNumber, setCollectorNumber] = useState('')
  const [completeForm, setCompleteForm] = useState(false)
  
  function handleRouting(e) {
    setRoutingNum(prev => e.target.value)
  }

  function handleAccount(e) {
    setAccountNum(prev => e.target.value)
  }

  function handlePayment(e) {
    setPayment(prev => e.target.value)
  }

  function handlePayFrequency(e) {
    setPayFrequency(prev => e.target.value)
  }

  function handleTotalPayments(e) {
    setTotalPayments(prev => e.target.value)
  }

  function handleFirstDate(e) {
    setFirstDate(prev => e.target.value)
  }

  function handleChosenDate(e) {
    setChosenDate(prev => e.target.value)
  }

  function handleCheckingNames(e) {
    setCheckingNames(prev => e.target.value)
  }

  function handleDebtorName(e) {
    setDebtorName(prev => e.target.value)
  }

  function handleDebtorNumber(e) {
    setDebtorNumber(prev => e.target.value)
  }

  function handleCollectorNumber(e) {
    setCollectorNumber(prev => e.target.value)
  }

  return (
    <Context.Provider value={{handleRouting, handleAccount, handlePayment, routingNum, accountNum, payment, payFrequency, handlePayFrequency, firstDate, handleFirstDate, chosenDate, handleChosenDate, totalPayments, handleTotalPayments, checkingNames, debtorName, debtorNumber, collectorNumber, handleCheckingNames, handleDebtorName, handleDebtorNumber, handleCollectorNumber, setCompleteForm, completeForm}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}