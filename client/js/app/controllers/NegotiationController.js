/*jshint esversion: 6*/

class NegotiationController {

    constructor() {
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._form = $('.form');

        this._negotiationsList = new Proxy(new NegotiationsList(), this._handlerList());
        this._negotiationsView = new NegotiationsView($('#negociacoes'));
        this._messageView = new MessageView($('#message'));

        this._negotiationsView.update(this._negotiationsList);
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

    _handlerList() {
        let self = this;
       
        return {
            get(target, prop, receiver) {
                if ( ['add', 'clear'].includes(prop) && typeof(target[prop]) == typeof(Function) ) {
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        self._negotiationsView.update(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            }
        };
    }

}