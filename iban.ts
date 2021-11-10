// Input
//{"ibanNR":"DE05513900000011422140"}

let IBAN = require('iban'); // require

let iban = {"ibanNR":"DE05513900000011422140"}

//test cases
const firstIBAN = "DE05513900000011422***"
const secondIBAN = "phonyIban"
const thirdIBAN = "amIanIBAN?"

// return an object response
type IbanStatus = {
    ibanstatus: boolean;
  };

const ibanStatus = (iban:string): IbanStatus => ({
    ibanstatus: IBAN.isValid(iban)
})

const result = ibanStatus(iban.ibanNR)

let output = {"ibanstatus": result}

// Output
// {'ibanstatus': boolean}
// in the shown case the output would be false because the IBAN is wrong
//{"ibanstatus": false}