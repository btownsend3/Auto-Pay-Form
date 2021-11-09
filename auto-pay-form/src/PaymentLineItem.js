import React from 'react'

function PaymentLineItem(props) {
  return (
    <div className="flex space-between payment">
      <p className="quarter-width"><strong>ACCT#:</strong>__________</p>
      <p className="quarter-width"><strong>DATE OF CK</strong></p>
      <p className="quarter-width">{props.date}</p>
      <p className="quarter-width">$ {props.payment}</p> 
    </div>
  )
}

export default PaymentLineItem