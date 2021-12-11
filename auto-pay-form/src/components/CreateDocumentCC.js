import React, {useContext} from 'react'
import {Context} from '../Context'
import PaymentLineItem from './PaymentLineItem'
import paymentFrequency from '../js/paymentFrequency'
import {getPaymentDates} from '../js/nthDayOfTheWeek'
import {dayOfTheMonth} from '../js/dayOfTheMonth'

function CreateDocumentCC() {
  const {nameOnCard, debtorName, debtorNumber, collectorNumber, billingAddress, zipCode, firstFour, secondFour, thirdFour, fourthFour, expirationMonth, expirationYear, ccv, payment, firstDate, payFrequency, totalPayments, weekday, nthWeekday, frequencyForm, nthWeekdayForm, dateForm} = useContext(Context)  

  let paymentDates = [1]
  if (frequencyForm) {
    paymentDates = paymentFrequency(firstDate, payFrequency, totalPayments, payment)
  } else if (nthWeekdayForm) {
    paymentDates = getPaymentDates(nthWeekday, weekday, firstDate, totalPayments, payment)
  } else if (dateForm) {
    paymentDates = dayOfTheMonth (firstDate, totalPayments, payment)
  }

  const cardIssuer = firstFour[0] === '3' 
    ? 'Amex'
    : firstFour[0] === '4'
    ? 'Visa'
    : firstFour[0] === '5'
    ? 'Mastercard'
    : firstFour[0] === '6'
    ? 'Discover'
    : null
    

    while (paymentDates.length < 12) {
      paymentDates.push({
        key: paymentDates.length + 1,
        payment: false,
        day: false,
        month: false,
        year: false
      })
    }

  const paymentMap = paymentDates.map(item => {
    let date = item.month + '/' + item.day + '/' + item.year
    return <PaymentLineItem key={item.key} date={date} payment={item.payment} />
  })
  
  return (
    <div className="document">
      <button id="btn-print" onClick={() => window.print()}>Print</button>
      <h1 className="text-center">Credit Card</h1>
      <p><strong>Collector #:</strong> {collectorNumber}</p>
      <p><strong>NAME ON CARD:</strong> {nameOnCard}</p>
      <p><strong>BILLING ADDRESS:</strong> {billingAddress}</p>
      <p><strong>ZIP CODE:</strong> {zipCode}</p>
      <p><strong>{cardIssuer}</strong></p>
      <p><strong>CARD NUMBER:</strong> {firstFour} {secondFour} {thirdFour} {fourthFour}</p>
      <p><strong>Expiration:</strong> {expirationMonth} / {expirationYear}</p>
      <p><strong>CCV:</strong> {ccv}</p>
      <p><strong>DEBTOR NAME ON SYSTEM MASTER:</strong> {debtorName}</p>
      <p><strong>DEBTOR #:</strong> {debtorNumber}</p>
      <div className="flex">
        <p><strong>ADDITIONAL INFO:</strong></p>
        <input
          type="text"
          className="input-additional-info"
          name="additional info"
        />
      </div>
      <br />
      <div className="payment-container">
        {paymentMap}
      </div>
    </div>
  )
}

export default CreateDocumentCC