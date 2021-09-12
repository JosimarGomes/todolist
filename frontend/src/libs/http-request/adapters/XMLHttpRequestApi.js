import HttpResponse from '../HttpResponse';

/* eslint-disable class-methods-use-this */
export default class XMLHttpRequestApi {
    get({ url = '', headers = {} }) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            const arrHeaders = Object.entries(headers);

            arrHeaders.forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.send();
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
                } else {
                    const response = new HttpResponse({
                        status: xhr.status,
                        data: JSON.parse(xhr.responseText),
                    });
                    resolve(response);
                }
            };

            xhr.onerror = () => {
                reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
            };
        });
    }

    post({ url = '', headers = {}, body = {} }) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);

            const arrHeaders = Object.entries(headers);

            arrHeaders.forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.send(JSON.stringify(body));
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
                } else {
                    let responseData;

                    try {
                        responseData = JSON.parse(xhr.responseText);
                    } catch (error) {
                        responseData = xhr.responseText;
                    }

                    const response = new HttpResponse({
                        status: xhr.status,
                        data: responseData,
                    });
                    resolve(response);
                }
            };
            xhr.onerror = () => {
                reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
            };
        });
    }

    patch({ url = '', headers = {}, body = {} }) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PATCH', url);

            const arrHeaders = Object.entries(headers);

            arrHeaders.forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.send(JSON.stringify(body));
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
                } else {
                    let responseData;

                    try {
                        responseData = JSON.parse(xhr.responseText);
                    } catch (error) {
                        responseData = xhr.responseText;
                    }

                    const response = new HttpResponse({
                        status: xhr.status,
                        data: responseData,
                    });
                    resolve(response);
                }
            };
            xhr.onerror = () => {
                reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
            };
        });
    }

    delete({ url = '', headers = {}, body = {} }) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', url);

            const arrHeaders = Object.entries(headers);

            arrHeaders.forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.send(JSON.stringify(body));
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
                } else {
                    let responseData;

                    try {
                        responseData = JSON.parse(xhr.responseText);
                    } catch (error) {
                        responseData = xhr.responseText;
                    }

                    const response = new HttpResponse({
                        status: xhr.status,
                        data: responseData,
                    });
                    resolve(response);
                }
            };
            xhr.onerror = () => {
                reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
            };
        });
    }
}
