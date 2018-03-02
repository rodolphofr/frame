class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');
    }

    add(event) {
        event.preventDefault();
        console.log(this._createNegotiation());
        this._clearForm();
    }

    _clearForm() {
        this._form.reset();
        this._inputDate.focus();
    }

    _createNegotiation() {
        return new Negotiation(
            this._inputValue.value,
            this._convertDateStringToDate(this._inputDate.value),
            this._inputAmount.value
        );
    }

     _convertDateStringToDate(dateString) {
        const date = dateString.split('-')
                               .map((number, index) => number - index % 2);
        return new Date(...date); // with spread operator
    }

}