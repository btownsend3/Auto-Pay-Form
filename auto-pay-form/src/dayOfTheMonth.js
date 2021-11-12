// Uses data from the form to create a document with all of the payment dates/amounts filled in
function dayOfTheMonth (firstDate, totalPayments, payment) {

  let paymentDates = []
  totalPayments = parseInt(totalPayments)

  // Convert human-entered date to JS friendly date
  let dateMap = firstDate.split('-').map(item => parseInt(item))
  let newDate = new Date((dateMap[0]), (dateMap[1] - 1), dateMap[2], 0, 0, 0)
  const dateConst = newDate.getDate()

  // Creates first date object to push to paymentDates arr
  let firstPaymentDate = {
    key: 1,
    payment: payment,
    month: newDate.getMonth() + 1,
    day: newDate.getDate(),
    year: newDate.getFullYear()
  }
  paymentDates.push(firstPaymentDate)

  let key = 2
  // Increments the month accounting for months with 28/30/31 days
  for (let i = 0; i < totalPayments - 1; i++) {
    console.log(newDate, 1)
    if (newDate.getMonth() === 0 && dateConst > 28) {
      newDate.setDate(28)
      newDate.setMonth(newDate.getMonth() + 1)
    } else if (newDate.getMonth() === 1 && dateConst > 28) {
      newDate.setMonth(newDate.getMonth() + 1)
      newDate.setDate(dateConst)
    } else if (![12,2,4,6,7,9,11].includes(newDate.getMonth() + 1) && dateConst > 30) {
      newDate.setDate(30)
      newDate.setMonth(newDate.getMonth() + 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
      newDate.setDate(dateConst)
    }

    paymentDates.push(addDays(newDate, key, payment))
    key += 1
  }
  return paymentDates
}

// Creates and returns a new payment date object
function addDays(date, key, payment) {
    let result = new Date(date)
    return {
      key: key,
      payment: payment,
      month: result.getMonth() + 1,
      day: result.getDate(),
      year: result.getFullYear()
    }
  }

export {dayOfTheMonth}