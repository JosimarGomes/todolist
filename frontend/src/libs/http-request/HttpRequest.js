import FetchApi from './adapters/FetchApi';
import XMLHttpRequestApi from './adapters/XMLHttpRequestApi';

export default class HttpRequest {
    constructor({ url = '', body = {}, headers = {} }) {
        this.url = url;
        this.body = body;
        this.headers = headers;
        this.adapter = window.fetch ? new FetchApi() : new XMLHttpRequestApi();
        console.log('o adpater é:', this.adapter);
    }

    get() {
        return this.adapter.get({
            url: this.url,
        });
    }

    post() {
        return this.adapter.post({
            url: this.url,
            headers: this.headers,
            body: this.body,
        });
    }

    patch() {
        return this.adapter.patch({
            url: this.url,
            headers: this.headers,
            body: this.body,
        });
    }

    delete() {
        return this.adapter.delete({
            url: this.url,
            headers: this.headers,
            body: this.body,
        });
    }
}
