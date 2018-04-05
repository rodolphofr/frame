class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');

        this._negotiationsList = new Bind(
                new NegotiationsList(),
                new NegotiationsView($('#negociacoes')),
                'add', 'clear', 'sort', 'reverse'
            );
        
        this._message = new Bind(
                new Message(),
                new MessageView($('#message')),
                'text'
            );

        this._negotiationService = new NegotiationService();
        this._currentOrder = '';
    } 

    add(event) {
        event.preventDefault();

        try {
            this._negotiationsList.add(this._createNegotiation());
            this._message.text = 'Negotiation registered.';
            this._clearForm();    
        } catch (error) {
            this._message.text = error;
        }
    }

    clearList() {
        if (!this._negotiationsList.isEmpty()) {
            this._negotiationsList.clear();
            this._message.text = 'Cleared';
        }
    }

    importNegotiations() {
        this._negotiationService
            .getAllNegotiations()
            .then(negotiations => {
                negotiations.forEach(negotiation => this._negotiationsList.add(negotiation));
                this._message.text = "Negotiations imported.";
            })
            .catch(error => this._message.text = error);
    }

    sort(column) {
        if (this._currentOrder == column) {
            this._negotiationsList.reverse();
        } else {
            this._negotiationsList.sort((a, b) => b[column] - a[column]);
        }
        this._currentOrder = column;
    }

    _clearForm() {
        this._form.reset();
        this._inputDate.focus();
    }

    _createNegotiation() {
        return new Negotiation(
            this._inputValue.value,
            DateConverter.toDate(this._inputDate.value),
            this._inputAmount.value
        );
    }

}