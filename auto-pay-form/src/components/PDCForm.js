import React, {useContext} from 'react'
import {Context} from '../Context'

function Form() {
  const {handleRouting, handleAccount, handlePayment, routingNum, accountNum, payment, payFrequency, handlePayFrequency, firstDate, handleFirstDate, totalPayments, handleTotalPayments, checkingNames, debtorName, debtorNumber, collectorNumber, handleCheckingNames, handleDebtorName, handleDebtorNumber, handleCollectorNumber, setCompleteForm, handleFrequencyForm, frequencyForm, handleNthWeekdayForm, nthWeekdayForm, handleNthWeekday, nthWeekday, weekday, handleWeekday, handleDateForm, dateForm} = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault()
    setCompleteForm(prev => true)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <button className={frequencyForm ? 'btn-filled' : 'btn-border'} onClick={handleFrequencyForm}>Frequency</button>
          <button className={nthWeekdayForm ? 'btn-filled' : 'btn-border'} onClick={handleNthWeekdayForm}>Nth Weekday</button>
          <button className={dateForm ? 'btn-filled' : 'btn-border'} onClick={handleDateForm}>Date</button>
        </div>
        <div className="flex">
          <label>Routing Number
            <input
              required
              type="text"
              name="routing"
              value={routingNum}
              onChange={handleRouting}
            />
          </label>
          <br/>
          <label>Account Number
            <input
              required
              type="text"
              name="account"
              value={accountNum}
              onChange={handleAccount}
            />
          </label>
        </div>
        <br/>
        <div className="flex">
          <label>Payment Amount
            <input
              required
              type="text"
              name="payment"
              value={payment}
              onChange={handlePayment}
            />
          </label>
          <br/>
          <label>First payment date
            <input
              required
              type="date"
              name="first date"
              value={firstDate}
              onChange={handleFirstDate}
              placeholder="mm/dd/yy"
            />
          </label>
        </div>
        <br/>
        <div className="flex">
          <label>Total Payments
            <input
              required
              type="text"
              name="total payments"
              value={totalPayments}
              onChange={handleTotalPayments}
            />
          </label>
          <br/>
          {frequencyForm && 
            <label>Payment Frequency
              <input
                required
                type="text"
                name="payment frequency"
                value={payFrequency}
                onChange={handlePayFrequency}
                placeholder="days, i.e. 14"
              />
            </label>
          }
          {nthWeekdayForm &&
            <label>Nth Weekday
              <div className="flex">
              <select 
                required 
                value={nthWeekday} 
                onChange={handleNthWeekday}
              >
                <option value=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>
              <select 
                required 
                id="input-weekday" value={weekday}
                onChange={handleWeekday}
              >
                <option value=""></option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
              </select>
              </div>
            </label>
          }
        <br/>
        </div>
        <br/>
        <div className="flex">
          <label>Name(s) on checking
            <input
              required
              type="text"
              name="checking names"
              value={checkingNames}
              onChange={handleCheckingNames}  
            />
          </label>
          <br/>
          <label>Debtor Name
            <input
              required
              type="text"
              name="debtor name"
              value={debtorName}
              onChange={handleDebtorName}
            />
          </label>
        </div>
        <br/>
        <div className="flex">
          <label>Debtor Number
            <input
              required
              type="text"
              name="debtor number"
              value={debtorNumber}
              onChange={handleDebtorNumber}
            />
          </label>
          <br/>
          <label>Collector Number
            <input
              required
              type="text"
              name="collector number"
              value={collectorNumber}
              onChange={handleCollectorNumber}
            />
          </label>
        </div>
        <br/>
        {nthWeekdayForm || frequencyForm || dateForm ? <button>Submit</button> : null }
      </form>
    </div>
  )
}

export default Form