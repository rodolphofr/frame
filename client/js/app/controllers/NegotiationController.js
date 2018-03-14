/*jshint esversion: 6*/

class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');

        // o this de uma arrow function eh lexico, ou seja, não muda de contexto
        // o valor de this eh definido no local onde eh declarada
        this._negotiationsList = new NegotiationsList(model => this._renderNegotiationsTable(model));
        this._negotiationsView = new NegotiationsView($('#negociacoes'));
        this._messageView = new MessageView($('#message'));

        this._renderNegotiationsTable(this._negotiationsList);
    }

    add(event) {
        event.preventDefault();
        this._negotiationsList.add(this._createNegotiation());
        this._renderMessage('Negotiation registered.');
        this._clearForm();
    }

    clearList() {
        if (this._negotiationsList.isEmpty()) {
            this._negotiationsList.clear();
            this._renderMessage('Cleared');
        }
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

    _renderMessage(messageContent) {
        this._messageView.update(new Message(messageContent));
    }

    _renderNegotiationsTable(negotiationsList) {
        this._negotiationsView.update(negotiationsList);
    }
    
}