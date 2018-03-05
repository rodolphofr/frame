class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');
        this._negotiationsList = new NegotiationsList();
    }

    add(event) {
        event.preventDefault();
        this._negotiationsList.add(this._createNegotiation());
        this._clearForm();
        console.log(this._negotiationsList.negotiations);
    }

    _clearForm() {
        this._form.reset();
        this._inputDate.focus();
    }

    _createNegotiation() {
        return new Negotiation(
            this._inputValue.value,
            DateHelper.toDate(this._inputDate.value),
            this._inputAmount.value
        );
    }

}