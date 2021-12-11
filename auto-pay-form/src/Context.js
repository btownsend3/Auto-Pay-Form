import React, {useState, useRef} from 'react'
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
  // Added for card payments
  const [nameOnCard, setNameOnCard] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [zipCode, setZipCode] = useState(null)
  const [firstFour, setFirstFour] = useState('')
  const [secondFour, setSecondFour] = useState('')
  const [thirdFour, setThirdFour] = useState('')
  const [fourthFour, setFourthFour] = useState('')
  const [ccv, setCcv] = useState(null)
  const [expirationMonth, setExpirationMonth] = useState('')
  const [expirationYear, setExpirationYear] = useState('')
  const firstFourRef = useRef(null)
  const secondFourRef = useRef(null)
  const thirdFourRef = useRef(null)
  const fourthFourRef = useRef(null)
  
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

  // added for card payments

  function handleNameOnCard(e) {
    setNameOnCard(prev => e.target.value)
  }
  function handleBillingAddress(e) {
    setBillingAddress(prev => e.target.value)
  }
  function handleZipCode(e) {
    setZipCode(prev => e.target.value)
  }
  function handleFirstFour(e) {
    setFirstFour(prev => e.target.value)
    if (e.target.value.length === 4) {
      secondFourRef.current.focus()
    }
  }
  function handleSecondFour(e) {
    setSecondFour(prev => e.target.value)
    if (e.target.value.length === 4) {
      thirdFourRef.current.focus()
    }
  }
  function handleThirdFour(e) {
    setThirdFour(prev => e.target.value)
    if (e.target.value.length === 4) {
      fourthFourRef.current.focus()
    }
  }
  function handleFourthFour(e) {
      setFourthFour(prev => e.target.value)
  }
  function handleExpirationMonth(e) {
    setExpirationMonth(prev => e.target.value)
  }
  function handleExpirationYear(e) {
    setExpirationYear(prev => e.target.value)
  }
  function handleCcv(e) {
    setCcv(prev => e.target.value)
  }

  return (
    <Context.Provider value={{handleRouting, handleAccount, handlePayment, routingNum, accountNum, payment, payFrequency, handlePayFrequency, firstDate, handleFirstDate, totalPayments, handleTotalPayments, checkingNames, debtorName, debtorNumber, collectorNumber, handleCheckingNames, handleDebtorName, handleDebtorNumber, handleCollectorNumber, setCompleteForm, completeForm, handleFrequencyForm, frequencyForm, handleNthWeekdayForm, nthWeekdayForm, handleNthWeekday, handleWeekday, weekday, nthWeekday, handleDateForm, dateForm, billingAddress, handleBillingAddress, zipCode, handleZipCode, firstFour, handleFirstFour, secondFour, handleSecondFour, thirdFour, handleThirdFour, fourthFour, handleFourthFour, ccv, handleCcv, firstFourRef, secondFourRef, thirdFourRef, fourthFourRef, expirationMonth, handleExpirationMonth, expirationYear, handleExpirationYear, nameOnCard, handleNameOnCard}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}