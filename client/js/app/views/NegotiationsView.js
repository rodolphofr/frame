class NegotiationsView extends View {

    template(negotiationList) {
        let negotiations = negotiationList.all();

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onClick="negotiationController.sort('date')">DATA</th>
                        <th onClick="negotiationController.sort('amount')">QUANTIDADE</th>
                        <th onClick="negotiationController.sort('value')">VALOR</th> 
                        <th onClick="negotiationController.sort('volume')">VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${negotiations.map(n => 
                        `
                        <tr>
                            <td>${DateConverter.toStr(n.date)}</td>
                            <td>${n.amount}</td>
                            <td>${n.value}</td>
                            <td>${n.volume}</td>
                        </tr>
                        ` 
                    ).join('')}
                </tbody>

                <tfoot>
                    <td colspan="3"></td> 
                    <td>${negotiationList.totalVolume}</td>
                </tfoot>
            </table>
            `;
    }

}