import React, {useContext} from 'react'
import {Context} from './Context'

function Form() {
  const {handleRouting, handleAccount, handlePayment, routingNum, accountNum, payment, payFrequency, handlePayFrequency, firstDate, handleFirstDate, chosenDate, handleChosenDate, totalPayments, handleTotalPayments, checkingNames, debtorName, debtorNumber, collectorNumber, handleCheckingNames, handleDebtorName, handleDebtorNumber, handleCollectorNumber, setCompleteForm} = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
    setCompleteForm(prev => true)
  }

  return (
    <div class="form-container">
      <form>
        <label>Routing Number
          <input
             
            type="text"
            name="routing"
            value={routingNum}
            onChange={handleRouting}
          />
        </label>
        <br/>
        <label>Account Number
          <input
            
            type="text"
            name="account"
            value={accountNum}
            onChange={handleAccount}
          />
        </label>
        <br/>
        <label>Payment Amount
          <input
            
            type="text"
            name="payment"
            value={payment}
            onChange={handlePayment}
          />
        </label>
        <br/>
        <label>First payment date
          <input
            
            type="text"
            name="first date"
            value={firstDate}
            onChange={handleFirstDate}
            placeholder="mm/dd/yy"
          />
        </label>
        <br/>
        <label>Total Payments
          <input
            
            type="text"
            name="total payments"
            value={totalPayments}
            onChange={handleTotalPayments}
          />
        </label>
        <br/>
        <label>Payment Frequency
          <input
            type="text"
            name="payment frequency"
            value={payFrequency}
            onChange={handlePayFrequency}
            placeholder="days, i.e. 14"
          />
        </label>
        <br/>
        <label>Day of month
          <input
            type="text"
            name="chosen date"
            value={chosenDate}
            onChange={handleChosenDate}
            placeholder="date, i.e. 15"
          />
        </label>
        <br/>
        <label>Name(s) on checking
          <input
            type="text"
            name="checking names"
            value={checkingNames}
            onChange={handleCheckingNames}  
          />
        </label>
        <br/>
        <label>Debtor Name
          <input
            type="text"
            name="debtor name"
            value={debtorName}
            onChange={handleDebtorName}
          />
        </label>
        <br/>
        <label>Debtor Number
          <input
            type="text"
            name="debtor number"
            value={debtorNumber}
            onChange={handleDebtorNumber}
          />
        </label>
        <br/>
        <label>Collector Number
          <input
            type="text"
            name="collector number"
            value={collectorNumber}
            onChange={handleCollectorNumber}
          />
        </label>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form