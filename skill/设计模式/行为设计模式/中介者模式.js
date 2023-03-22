/**
 * 中介者模式
 */

function Subscriber(fn, options, context) {
    console.log(fn)
    if (!this instanceof Subscriber) {
        return new Subscriber(fn, context, options)
    } else {
        this.id = '1'
        this.fn = fn;
        this.options = options;
        this.context = context;
        this.topic = null
    }
}

function Topic(namespace) {

    if (!(this instanceof Topic)) {
        return new Topic(namespace);
    } else {

        this.namespace = namespace || "";
        this._callbacks = [];
        this._topics = [];
        this.stopped = false;

    }
}
Topic.prototype = {

    // Add a new subscriber
    AddSubscriber: function (fn, options, context) {

        var callback = new Subscriber(fn, options, context);

        this._callbacks.push(callback);

        callback.topic = this;

        return callback;
    }
}