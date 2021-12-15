# Auto Pay Form

Payment scheduler written in React. This is to replace the handwritten forms currently in use.

Working demo here: https://peaceful-northcutt-ac97e1.netlify.app

## How to use the app

### Selecting Payment Type and Frequency

Select between the two payment options: PDC for post-dated check, Credit Card for credit/debit

The PDC option has a maximum of 20 payments allowed.

The Credit Card option has a maximum of 12 payments allowed due to card expirations and updated billing addresses.

Select the payment structure from the following:

* Frequency - this will schedule payments every X days (ie 14 for biweekly). The form field below will render an input expecting a value representing X

* Nth weekday - this will schedule payments once a month on nth occurence of a chosen weekday (ie 3rd wednesday). The form will render 2 dropdown menus to select occurence and weekday

* Date - this will schedule payments on the same day every month. If the 31st is chosen, the date will be the 30th on months containing fewer days and on the 28th of February.

### Populating the form

All fields are required to submit the form. If a payment frequency is not chosen, the submit button will not appear. 

The Credit Card form makes use of the Luhn algorithm for validation, providing live feedback.

Upon completion, click the Submit button

### Printing and Final Changes

After submitting the form, a document is created with all necessary information populated. 

This page contains form inputs for the following:

* ACCT# - Here you can specify which account(s) the payment should be applied to

* Payment Dates

* Payment Amounts

* Additional Information

Click the Print button or press ctrl + p to print and turn into the payment department

## License

[MIT](https://choosealicense.com/licenses/mit/)
