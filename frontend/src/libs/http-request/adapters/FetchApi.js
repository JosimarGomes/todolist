import HttpResponse from '../HttpResponse';

/* eslint-disable class-methods-use-this */
export default class FetchApi {
    get({ url, headers = {} }) {
        return fetch(url, {
            method: 'GET',
            headers,
        }).then(async (response) => {
            if (response.status !== 200) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const responseJson = await response.json();

            return new HttpResponse({
                status: response.status,
                data: responseJson,
            });
        });
    }

    post({ url, headers = {}, body }) {
        return fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        }).then(async (response) => {
            if (response.status >= 400) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            let responseData;

            try {
                responseData = await response.json();
            } catch (error) {
                responseData = response.statusText;
            }

            return new HttpResponse({
                status: response.status,
                data: responseData,
            });
        });
    }

    patch({ url, headers = {}, body }) {
        return fetch(url, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body),
        }).then(async (response) => {
            if (response.status >= 400) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            let responseData;

            try {
                responseData = await response.json();
            } catch (error) {
                responseData = response.statusText;
            }

            return new HttpResponse({
                status: response.status,
                data: responseData,
            });
        });
    }

    delete({ url, headers = {}, body }) {
        return fetch(url, {
            method: 'DELETE',
            headers,
            body: JSON.stringify(body),
        }).then(async (response) => {
            if (response.status >= 400) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            let responseData;

            try {
                responseData = await response.json();
            } catch (error) {
                responseData = response.statusText;
            }

            return new HttpResponse({
                status: response.status,
                data: responseData,
            });
        });
    }
}
