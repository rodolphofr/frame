/*jshint  esversion: 6*/

class NegotiationsList {

    constructor(viewTrigger) {
        this._negotiations = [];
        this._viewTrigger = viewTrigger;
    }

    get negotiations() {
        return [].concat(this._negotiations); // para que a lista interna do objeto nao seja alterada
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
        this._viewTrigger(this);
    }

    clear() {
        this._negotiations = [];
        this._viewTrigger(this);
    }

    has_negotiation() {
        return this._negotiations.length > 0;
    }

}