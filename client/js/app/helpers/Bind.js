class Bind {

    constructor(model, view, ...props) {
        this._proxy = ProxyFactory.create(model, props, model => view.update(model));
        
        view.update(model);

        return this._proxy;
    }
}