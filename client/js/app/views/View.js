class View {

    constructor(element) {
        this._element = element;
    }

    template(model) {
        throw new Error('Method \"template\" is not implemented.');
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }

}