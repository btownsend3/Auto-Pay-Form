// Uses data from the form to create a document with all of the payment dates/amounts filled in
function paymentFrequency (firstDate, payFrequency, totalPayments, payment) {

  let paymentDates = []
  payFrequency = parseInt(payFrequency)
  totalPayments = parseInt(totalPayments)

  // Convert human-entered date to JS friendly date
  let dateMap = firstDate.split('-').map(item => parseInt(item))
  let newDate = new Date((dateMap[0]), (dateMap[1] - 1), dateMap[2], 0, 0, 0)

  // Creates first date object to push to paymentDates arr
  let firstPaymentDate = {
    key: 1,
    payment: payment,
    month: newDate.getMonth() + 1,
    day: newDate.getDate(),
    year: newDate.getFullYear()
  }
  paymentDates.push(firstPaymentDate)

  // Creates new date by adding days arg to date arg. Pushes new date object to paymentDates array
  function addDays(date, days, key) {
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    date = result
    paymentDates.push({
      key: key,
      payment: payment,
      month: result.getMonth() + 1,
      day: result.getDate(),
      year: result.getFullYear()
    })
  }

  // Variable x will increase by paymentFreq with each iteration of the below for loop
  let x = payFrequency
  let key = 2
  // Creates new dates using the starting date and the payment frequency
  for (let i = 0; i < totalPayments - 1; i++) {
    addDays(newDate, x, key)
    x += payFrequency
    key += 1
  }
  return paymentDates
}

export default paymentFrequency