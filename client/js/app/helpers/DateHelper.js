const PATTERN_DATE = /\d{4}-\d{2}-\d{2}/

class DateHelper {

    constructor() {
        throw new Error('Cannot instantiate class DateHelper.')
    }

    static toDate(dateString) {
        if (!PATTERN_DATE.test(dateString)) 
            throw new Error('Invalid date format. The correct format must be YYYY-mm-dd');

        const date = dateString.split('-')
                               .map((number, index) => number - index % 2);
        return new Date(...date); // com spread operator
    }

    static toString(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}