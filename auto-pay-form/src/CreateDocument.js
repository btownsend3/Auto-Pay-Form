import React, {useContext} from 'react'
import {Context} from './Context'
import PaymentLineItem from './PaymentLineItem'
import paymentFrequency from './paymentFrequency'

function CreateDocument() {
  const {collectorNumber, debtorName, checkingNames, debtorNumber, payment, routingNum, accountNum, firstDate, payFrequency, totalPayments} = useContext(Context)
  const paymentDates = paymentFrequency(firstDate, payFrequency, totalPayments, payment)
  while (paymentDates.length < 20) {
    paymentDates.push({
      key: paymentDates.length + 1,
      payment: '____________',
      day: '____',
      month: '____',
      year: '____'
    })
  }
  const paymentMap = paymentDates.map(item => {
    let date = item.month + '/' + item.day + '/' + item.year
    return <PaymentLineItem key={item.key} date={date} payment={item.payment} />
  })

  return (
    <div>
      <h1 className="text-center">Auto Pay Information</h1>
      <p><strong>Collector #:</strong> {collectorNumber}</p>
      <p><strong>NAME(S) ON CHECKING ACCOUNT:</strong> {checkingNames}</p>
      <p><strong>ROUTING NUMBER:</strong> {routingNum}</p>
      <p><strong>ACCOUNT NUMBER:</strong> {accountNum}</p>
      <p><strong>DEBTOR NAME ON SYSTEM MASTER:</strong> {debtorName}</p>
      <p><strong>DEBTOR #:</strong> {debtorNumber}</p>
      <div className="payment-container">
        {paymentMap}
      </div>
    </div>
  )
}

export default CreateDocument