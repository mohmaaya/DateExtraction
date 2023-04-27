import {
    example1Customer,
    example2Customer,
    example4Customer
} from "./data/customer";
import extractDates from "./index";

describe("extractDates", () => {
    test("should return empty list", () => {
        // given
        const customer = {};
        // when
        const result = extractDates(customer);
        // then
        expect(result).toStrictEqual([]);
    });
    test("should return empty list", () => {
        // given
        const customer = {
            ListOfPeriods: "NUlL"
        };
        // when
        const result = extractDates(customer);
        // then
        expect(result).toStrictEqual([]);
    });
    test("should return empty list (full customer1)", () => {
        // when
        const result = extractDates(example4Customer);
        // then
        expect(result).toStrictEqual([]);
    });
    test("should return empty list (full customer2)", () => {
        // when
        const result = extractDates(example4Customer);
        // then
        expect(result).toStrictEqual([]);
    });
    test("should return array with one object with to dates", () => {
        // given
        const customer = {
            ListOfPeriods: "   15.03.2017 - 01.05.2017"
        };
        // when
        const result = extractDates(customer);
        // then
        expect(result).toStrictEqual([
            {
                startDate: "15.03.2017",
                endDate: "01.05.2017"
            }
        ]);
    });
    test("should return array with one object with to dates (full customer)", () => {
        // when
        const result = extractDates(example1Customer);
        // then
        expect(result).toStrictEqual([
            {
                startDate: "15.03.2017",
                endDate: "01.05.2017"
            }
        ]);
    });
    test("should return array with two objects with corresponding dates", () => {
        // given
        const customer = {
            ListOfPeriods: "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008"
        };
        // when
        const result = extractDates(customer);
        // then
        expect(result).toStrictEqual([
            {
                startDate: "12.06.2008",
                endDate: "11.07.2008"
            },
            {
                startDate: "12.08.2008",
                endDate: "11.11.2008"
            }
        ]);
    });
    test("should return array with four objects with corresponding dates", () => {
        // given
        const customer = {
            ListOfPeriods:
                "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008|10.11.2011- 09.12.2011|01.08.2015 - 01.01.2016"
        };
        // when
        const result = extractDates(customer);
        // then
        expect(result).toStrictEqual([
            {
                startDate: "12.06.2008",
                endDate: "11.07.2008"
            },
            {
                startDate: "12.08.2008",
                endDate: "11.11.2008"
            },
            {
                startDate: "10.11.2011",
                endDate: "09.12.2011"
            },
            {
                startDate: "01.08.2015",
                endDate: "01.01.2016"
            }
        ]);
    });
    test("should return array with two objects with corresponding dates", () => {
        // when
        const result = extractDates(example2Customer);
        // then
        expect(result).toStrictEqual([
            {
                startDate: "12.06.2008",
                endDate: "11.07.2008"
            },
            {
                startDate: "12.08.2008",
                endDate: "11.11.2008"
            }
        ]);
    });
    test("should return error message for invalid ListOfPeriods", () => {
        // given
        const customer = {
            ListOfPeriods: "12.06.2048308- 11.07.2008|12.079868.2008 - 11.11.2008"
        };
        // when
        const result = extractDates(customer);
        // then
        expect(result[0]).toStrictEqual("string length is invalid");
    });
});
