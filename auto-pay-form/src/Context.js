import React, {useState} from 'react'
const Context = React.createContext()

function ContextProvider(props) {
  const [routingNum, setRoutingNum] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [payment, setPayment] = useState('')
  const [firstDate, setFirstDate] = useState('')
  const [totalPayments, setTotalPayments] = useState('')
  const [payFrequency, setPayFrequency] = useState('')
  const [checkingNames, setCheckingNames] = useState('')
  const [debtorName, setDebtorName] = useState('')
  const [debtorNumber, setDebtorNumber] = useState('')
  const [collectorNumber, setCollectorNumber] = useState('')
  const [completeForm, setCompleteForm] = useState(false)
  const [nthWeekday, setNthWeekday] = useState('')
  const [weekday, setWeekday] = useState('')
  const [frequencyForm, setFrequencyForm] = useState(false)
  const [nthWeekdayForm, setNthWeekdayForm] = useState(false)
  const [dateForm, setDateForm] = useState(false)
  
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

  function handleFrequencyForm(e) {
    e.preventDefault()
    setFrequencyForm(prev => true)
    setNthWeekdayForm(prev => false)
    setDateForm(prev => false)
  }

  function handleNthWeekdayForm(e) {
    e.preventDefault()
    setFrequencyForm(prev => false)
    setNthWeekdayForm(prev => true)
    setDateForm(prev => false)
  }

  function handleNthWeekday(e) {
    setNthWeekday(prev => e.target.value)
  }

  function handleWeekday(e) {
    setWeekday(prev => e.target.value)
  }

  function handleDateForm(e) {
    e.preventDefault()
    setFrequencyForm(prev => false)
    setNthWeekdayForm(prev => false)
    setDateForm(prev => true)
  }

  return (
    <Context.Provider value={{handleRouting, handleAccount, handlePayment, routingNum, accountNum, payment, payFrequency, handlePayFrequency, firstDate, handleFirstDate, totalPayments, handleTotalPayments, checkingNames, debtorName, debtorNumber, collectorNumber, handleCheckingNames, handleDebtorName, handleDebtorNumber, handleCollectorNumber, setCompleteForm, completeForm, handleFrequencyForm, frequencyForm, handleNthWeekdayForm, nthWeekdayForm, handleNthWeekday, handleWeekday, weekday, nthWeekday, handleDateForm, dateForm}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}