class NegotiationService {

    getNegotiationsOfTheWeek(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) { // request and response are ready
                if (xhr.status == 200) {
                    callback(null, this._transformJSONInNegotiation(xhr.responseText));
                    return;
                } 

                callback(xhr.responseText, null);
            }
        };

        xhr.send();
    }

    _transformJSONInNegotiation(response) {
        let datas = JSON.parse(response);
        return datas.map(
            data => new Negotiation(data.valor, new Date(data.data), data.quantidade)
        );
    }
}