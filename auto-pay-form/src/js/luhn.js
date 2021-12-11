export default function validCreditCard(value) {

  let nCheck = 0 
  let bEven = false
  value = value.replace(/\D/g, "")

  for (var n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}