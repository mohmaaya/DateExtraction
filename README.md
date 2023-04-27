Task: Function - array of bonus times

In this case you want an object (a customer) as the input of the function
'toExtractDates' to build an array of objects containing time periods (start and end dates).
Each element of the array should contain one object. This object contains a start date and an end date.
Relevant data can be found under the optional property 'ListOfPeriods'.

For example, the results should look like this:

toExtractDates(customer1) ("ListOfPeriods": " 03/15/2017 - 05/01/2017")
=> [{
startDate: '03/15/2017',
endDate: '01.05.2017'
}]

toExtractDates(customer2) ("ListOfPeriods": "06/12/2008 - 07/11/2008|08/12/2008 - 11/11/2008")
=> [{
startDate: '06/16/2008',
endDate: '07/11/2008'
},
{
startDate: '08/12/2008'
endDate: '11/11/2008'
}]

toExtractDates(customer3) ("ListOfPeriods": "NULL")
=> []

toExtractDates(customer4) (no property "ListOfPeriods")
=> []

Remarks:

- if possible, TypeScript definitions should be used
- (any number of) n periods can be defined in the 'ListOfPeriods'
- although the format is fixed with "Date11 - Date12 | Date21 - Date22 | ...", spaces at the beginning, at the end and in between can either exist or not be there.
- if the data as strings does not have the expected length, an error string ('string length is invalid') should be output instead of an array

- Customer examples can be found in ./src/data/customer.js.

To verify your solution, you can look at the Tests section.