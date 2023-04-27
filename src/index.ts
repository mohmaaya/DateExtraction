type Dates = {
    startDate: string;
    endDate: string;
};

//Implemented Functionality
const extractDates = (customer: any) => {

    let custListOfPeriods = customer.ListOfPeriods;
    const result: Dates[] = Array<Dates>();
    if (custListOfPeriods === undefined) return [];

    const obj: Dates = {
        startDate: "",
        endDate: ""
    };
    let j = -1, k = -1;
    for (let i = 0; i < custListOfPeriods.length; i++) {
        if (j === -1 && custListOfPeriods.charCodeAt([i]) >= 48 && custListOfPeriods.charCodeAt([i]) <= 57)
            j = i;

        if (j !== -1 && custListOfPeriods.charCodeAt([i]) >= 48 && custListOfPeriods.charCodeAt([i]) <= 57)
            k = i;

        if (custListOfPeriods[i] === '-' && k - j === 9) {
            obj.startDate = custListOfPeriods.substring(j, k + 1);
            j = -1;
        }

        if ((custListOfPeriods[i] === '|' || i === custListOfPeriods.length - 1) && k - j === 9) {

            obj.endDate = custListOfPeriods.substring(j, k + 1);
            result.push({ ...obj });

            j = -1;
        }

        if (i === custListOfPeriods.length - 1 && result.length === 0 && k - j > 9) return ['string length is invalid'];

    }
    return result;

};

export default extractDates;
