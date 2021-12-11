// Returns 1 payment date
function getDays(n, weekday, monthOfFirstPayment) {
    
    let days = []
    let d = new Date()
    d.setMonth(monthOfFirstPayment - 1)
    let month = d.getMonth()
    weekday = parseInt(weekday)
    
    d.setDate(1)

    // Get the first occurnce of day in the month
    while (d.getDay() !== weekday) {
        d.setDate(d.getDate() + 1)
    }

    // Get all the other occurencs of day in the month
    while (d.getMonth() === month) {
        days.push(new Date(d.getTime()))
        d.setDate(d.getDate() + 7)
    }

    return days[n - 1]
    
}

// Loops getDays to return array of payment date objects 
function getPaymentDates(n, weekday, firstDate, totalPayments, payment) {

  totalPayments = parseInt(totalPayments)

  // Convert human-entered date to JS friendly date
  let dateMap = firstDate.split('-').map(item => parseInt(item))
  let newDate = new Date((dateMap[0]), (dateMap[1] - 1), dateMap[2], 0, 0, 0)
  let monthOfFirstPayment = newDate.getMonth() + 1

  let paymentDates = []
  let x = 0

  for (let i = 0; i < totalPayments; i++) {

    let date = getDays(n, weekday, (monthOfFirstPayment + x))
    
    x++

    paymentDates.push({
      key: x,
      payment: payment,
      month: date.getMonth() + 1,
      day: date.getDate(),
      year: date.getFullYear()
    })

  }
  return paymentDates
}

export {getPaymentDates}