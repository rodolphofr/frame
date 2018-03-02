class Negotiation {

    constructor(value, date, amount) {
        this._value = value;
        this._date = this._newDate(date);
        this._amount = amount;
        Object.freeze(this);
    }

    get value() {
        return this._value;
    }

    get date() {    
        return this._newDate(this._date);
    }

    get amount() {
        return this._amount;
    }

    get volume() {
        return this._value * this._amount;
    }

    _newDate(date) {
        return new Date(date.getTime());
    }

}