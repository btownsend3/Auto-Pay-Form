import React from 'react'

function PaymentLineItem(props) {
  return (
    <div className="flex space-between payment">
      <div className="flex">
        <p className="quarter-width"><strong>ACCT#:</strong></p>
        <input className="input-acct" type="text" size="10"/>
      </div>
      <p className="quarter-width"><strong>DATE OF CK</strong></p>
      <p className="quarter-width">{props.date}</p>
      <p className="quarter-width">$ {props.payment}</p> 
    </div>
  )
}

export default PaymentLineItem