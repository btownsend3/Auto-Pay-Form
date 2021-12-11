import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'
import validCreditCard from '../js/luhn'

function CardForm() {
  const {handlePayment, firstFour, handleFirstFour, secondFour, handleSecondFour, thirdFour, handleThirdFour, fourthFour, handleFourthFour, payment, handleBillingAddress, billingAddress, handleZipCode, zipCode, handleCcv, ccv, payFrequency, handlePayFrequency, firstDate, handleFirstDate, totalPayments, handleTotalPayments, debtorName, debtorNumber, collectorNumber, handleDebtorName, handleDebtorNumber, handleCollectorNumber, setCompleteForm, handleFrequencyForm, frequencyForm, handleNthWeekdayForm, nthWeekdayForm, handleNthWeekday, nthWeekday, weekday, handleWeekday, handleDateForm, dateForm, firstFourRef, secondFourRef, thirdFourRef, fourthFourRef, expirationMonth, handleExpirationMonth, expirationYear, handleExpirationYear, nameOnCard, handleNameOnCard} = useContext(Context)

  const [validCard, setValidCard] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setCompleteForm(prev => true)
  }

  function cardValidity() {
    let str = firstFour.concat(secondFour.concat(thirdFour.concat(fourthFour)))
    let valid = validCreditCard(str)
    if (valid) {
      setValidCard(prev => true)
    } else {
      setValidCard(prev => false)
    }
  }

  useEffect(() => {
    cardValidity()
  }, [fourthFour])

  return (
    <div className="form-container">
      <form autoComplete="nope" onSubmit={handleSubmit}>
        <div className="flex">
          <button className={frequencyForm ? 'btn-filled' : 'btn-border'} onClick={handleFrequencyForm}>Frequency</button>
          <button className={nthWeekdayForm ? 'btn-filled' : 'btn-border'} onClick={handleNthWeekdayForm}>Nth Weekday</button>
          <button className={dateForm ? 'btn-filled' : 'btn-border'} onClick={handleDateForm}>Date</button>
        </div>
        <div className="flex">
          <label>Name on card
            <input
              required
              type="text"
              autoComplete="nope"
              name="name on card"
              value={nameOnCard}
              onChange={handleNameOnCard}  
            />
          </label>
          <br/>
          <label>Debtor Name
            <input
              required
              type="text"
              autoComplete="nope"
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
              autoComplete="nope"
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
              autoComplete="nope"
              name="collector number"
              value={collectorNumber}
              onChange={handleCollectorNumber}
            />
          </label>
        </div>
        <br />
        <div className="flex">
          <label>Billing Address
            <input
              required
              type="text"
              autoComplete="nope"
              name="address"
              value={billingAddress}
              onChange={handleBillingAddress}
            />
          </label>
          <label>Zip Code
            <input
              required
              autoComplete="nope"
              type="text"
              name="zip"
              value={zipCode}
              onChange={handleZipCode}
            />
          </label>
        </div>
        <br />
        <div className="flex card-info-container">
          <label>Card Number {fourthFour.length > 2 && validCard ? (<span id="valid">valid</span>) : (<span id="invalid">Invalid</span>) }
            <div className="card-number-container flex">
              <input 
                type="text"
                maxLength={4}
                ref={firstFourRef}
                autoComplete="nope"
                name="first four"
                value={firstFour}
                onChange={handleFirstFour}
              />
              <input 
                type="text"
                maxLength={4}
                ref={secondFourRef}
                autoComplete="nope"
                name="second four"
                value={secondFour}
                onChange={handleSecondFour}
              />
              <input 
                type="text"
                maxLength={4}
                ref={thirdFourRef}
                autoComplete="nope"
                name="third four"
                value={thirdFour}
                onChange={handleThirdFour}
              />
              <input 
                type="text"
                maxLength={4}
                ref={fourthFourRef}
                autoComplete="nope"
                value={fourthFour}
                name="fourth four"
                onChange={handleFourthFour}
              />
            </div>
          </label>
          <br/>
          <label>Expiration
            <div className="card-expiration-container">
            <select
                required
                value={expirationMonth}
                onChange={handleExpirationMonth}
              >
                <option value="">MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                required
                value={expirationYear}
                onChange={handleExpirationYear}
                >
                <option value="">YY</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
              </select>
            </div>
          </label>
          <label>CCV
            <input
              id="ccv"
              required
              type="text"
              autoComplete="nope"
              name="ccv"
              value={ccv}
              onChange={handleCcv}
            />
          </label>
        </div>
        <br/>
        <div className="flex">
          <label>Payment Amount
            <input
              required
              type="text"
              autoComplete="nope"
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
              autoComplete="nope"
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
                autoComplete="nope"
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
        {nthWeekdayForm || frequencyForm || dateForm ? <button>Submit</button> : null }
      </form>
    </div>
  )
}

export default CardForm