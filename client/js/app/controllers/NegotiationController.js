class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');

        this._negotiationsList = new Bind(
                new NegotiationsList(),
                new NegotiationsView($('#negociacoes')),
                'add', 'clear'
            );
        
        this._message = new Bind(
                new Message(),
                new MessageView($('#message')),
                'text'
            );

        this._negotiationService = new NegotiationService();

    } 

    add(event) {
        event.preventDefault();
        this._negotiationsList.add(this._createNegotiation());
        this._message.text = 'Negotiation registered.';
        this._clearForm();
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