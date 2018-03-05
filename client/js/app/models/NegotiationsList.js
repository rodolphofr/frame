class NegotiationsList {

    constructor() {
        this._negotiations = [];
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._negotiations); // para que a lista interna do objeto nao seja alterada
    }
}