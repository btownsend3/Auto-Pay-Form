import React from 'react'

function PaymentLineItem({date, payment}) {
  let placeholderDate = date
  
  if (date === 'false/false/false') {
    placeholderDate = ''
  }
  
  return (
    <div className="flex space-between payment">
      <div className="flex">
        <p className="quarter-width"><strong>ACCT#:</strong></p>
        <input className="input-acct" type="text" size="10"/>
      </div>
      <p className="quarter-width"><strong>DATE OF CK</strong></p>
      <input 
        className="quarter-width input-acct date"
        placeholder={placeholderDate} 
        type="text"
        />
      <input 
        className="quarter-width input-acct payment"
        type="text"
        placeholder={payment}
      /> 
    </div>
  )
}

export default PaymentLineItem