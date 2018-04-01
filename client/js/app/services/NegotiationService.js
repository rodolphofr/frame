class NegotiationService {

    constructor() {
        this._http = new HTTPService();
    }

    getAllNegotiations() {
        return Promise.all([
                this.getNegotiationsOfTheWeek(),
                this.getNegotiationsOfTheLastWeek(),
                this.getNegotiationsOfTheBeforeLastWeek()
            ])
            .then(array => {
                return array.reduce((negotiations, array) => negotiations.concat(array), []);
            });
    }

    getNegotiationsOfTheWeek() {
        return this._getNegotiations('semana', 'Error to get negotiations of the week');       
    }

    getNegotiationsOfTheLastWeek() {
        return this._getNegotiations('anterior', 'Error to get negotiations of last week')
    }

    getNegotiationsOfTheBeforeLastWeek() {
        return this._getNegotiations('retrasada', 'Error to get negotiations of before last week')
    }

    _getNegotiations(period, errorMessage) {
        return this._http
            .get(`negociacoes/${period}`)
            .then(result => {
                return result.map(data => new Negotiation(data.valor, new Date(data.data), data.quantidade));
            })
            .catch(error => { 
                throw new Error(errorMessage);
            });
    }


}