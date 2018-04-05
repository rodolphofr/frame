const PATTERN_DATE = /\d{2}\/\d{2}\/\d{4}/;

class DateConverter {

    constructor() {
        throw new Error('Cannot instantiate class DateConverter.');
    }

    static toDate(dateString) {
        if (!PATTERN_DATE.test(dateString)) 
            throw new Error('Invalid date format. The correct format must be dd/mm/yyyy');

        let date = dateString.split('/')
                             .reverse()
                             .map((number, index) => number - index % 2);

        return new Date(...date); // com spread operator
    }

    static toStr(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}