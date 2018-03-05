class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');

        this._negotiationsList = new NegotiationsList();
        this._negotiationsView = new NegotiationsView($('#negociacoes'));
        this._messageView = new MessageView($('#message'));

        this._renderNegotiationsTable();
    }

    add(event) {
        event.preventDefault();
        this._negotiationsList.add(this._createNegotiation());
        this._clearForm();
        this._renderNegotiationsTable();
        this._renderMessage('Negotiation registered.');
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

    _renderNegotiationsTable() {
        this._negotiationsView.update(this._negotiationsList);
    }

    _renderMessage(messageContent) {
        this._messageView.update(new Message(messageContent));
    }

}