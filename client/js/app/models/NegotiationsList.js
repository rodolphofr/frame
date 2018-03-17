class NegotiationsList {

    constructor() {
        this._negotiations = [];
    }

    all() {
        return [].concat(this._negotiations); // para que a lista interna do objeto nao seja alterada
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
    }

    clear() {
        this._negotiations = [];
    }

    isEmpty() {
        return this._negotiations.length > 0;
    }

    get totalVolume() {
        return this._negotiations.reduce((total, n) => total + n.volume, 0.0);
    }

}