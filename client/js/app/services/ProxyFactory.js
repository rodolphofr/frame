class ProxyFactory {

    static create(object, props, action) {
        return new Proxy(object, ProxyFactory._handlerList(props, action));
    }

    static _handlerList(props, action) {
        return {
            get : (target, prop, receiver) => {
                if ( props.includes(prop) && ProxyFactory._isFunction(target[prop]) ) {
                    return function() {
                        // retorna o valor resultante do método
                        let res = Reflect.apply(target[prop], target, arguments); 
                        action(target);
                        return res;
                    };
                }

                return Reflect.get(target, prop, receiver);
            },
            set : (target, prop, value, receiver) => {
                let res = Reflect.set(target, prop, value, receiver);

                if (props.includes(prop)) action(target);

                return res;
            }
        };
    }

    static _isFunction(prop) {
        return typeof(prop) == typeof(Function);
    }
}