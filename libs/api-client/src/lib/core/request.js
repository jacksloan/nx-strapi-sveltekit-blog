/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ApiError } from './ApiError';
import { CancelablePromise } from './CancelablePromise';
import { OpenAPI } from './OpenAPI';
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isString(value) {
    return typeof value === 'string';
}
function isStringWithValue(value) {
    return isString(value) && value !== '';
}
function isBlob(value) {
    return value instanceof Blob;
}
function base64(str) {
    try {
        return btoa(str);
    }
    catch (err) {
        return Buffer.from(str).toString('base64');
    }
}
function getQueryString(params) {
    const qs = [];
    Object.keys(params).forEach(key => {
        const value = params[key];
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach(value => {
                    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
                });
            }
            else {
                qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
            }
        }
    });
    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }
    return '';
}
function getUrl(options) {
    const path = OpenAPI.ENCODE_PATH ? OpenAPI.ENCODE_PATH(options.path) : options.path;
    const url = `${OpenAPI.BASE}${path}`;
    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }
    return url;
}
function getFormData(options) {
    if (options.formData) {
        const formData = new FormData();
        Object.entries(options.formData)
            .filter(([_, value]) => isDefined(value))
            .forEach(([key, value]) => {
            if (isString(value) || isBlob(value)) {
                formData.append(key, value);
            }
            else {
                formData.append(key, JSON.stringify(value));
            }
        });
        return formData;
    }
    return;
}
async function resolve(options, resolver) {
    if (typeof resolver === 'function') {
        return resolver(options);
    }
    return resolver;
}
async function getHeaders(options) {
    const token = await resolve(options, OpenAPI.TOKEN);
    const username = await resolve(options, OpenAPI.USERNAME);
    const password = await resolve(options, OpenAPI.PASSWORD);
    const additionalHeaders = await resolve(options, OpenAPI.HEADERS);
    const defaultHeaders = Object.entries(Object.assign(Object.assign({ Accept: 'application/json' }, additionalHeaders), options.headers))
        .filter(([_, value]) => isDefined(value))
        .reduce((headers, [key, value]) => (Object.assign(Object.assign({}, headers), { [key]: String(value) })), {});
    const headers = new Headers(defaultHeaders);
    if (isStringWithValue(token)) {
        headers.append('Authorization', `Bearer ${token}`);
    }
    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`);
        headers.append('Authorization', `Basic ${credentials}`);
    }
    if (options.body) {
        if (options.mediaType) {
            headers.append('Content-Type', options.mediaType);
        }
        else if (isBlob(options.body)) {
            headers.append('Content-Type', options.body.type || 'application/octet-stream');
        }
        else if (isString(options.body)) {
            headers.append('Content-Type', 'text/plain');
        }
        else {
            headers.append('Content-Type', 'application/json');
        }
    }
    return headers;
}
function getRequestBody(options) {
    var _a;
    if (options.body) {
        if ((_a = options.mediaType) === null || _a === void 0 ? void 0 : _a.includes('/json')) {
            return JSON.stringify(options.body);
        }
        else if (isString(options.body) || isBlob(options.body)) {
            return options.body;
        }
        else {
            return JSON.stringify(options.body);
        }
    }
    return;
}
async function sendRequest(options, url, formData, body, headers, onCancel) {
    const controller = new AbortController();
    const request = {
        headers,
        body: body || formData,
        method: options.method,
        signal: controller.signal,
    };
    if (OpenAPI.WITH_CREDENTIALS) {
        request.credentials = OpenAPI.CREDENTIALS;
    }
    onCancel(() => controller.abort());
    return await fetch(url, request);
}
function getResponseHeader(response, responseHeader) {
    if (responseHeader) {
        const content = response.headers.get(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return;
}
async function getResponseBody(response) {
    if (response.status !== 204) {
        try {
            const contentType = response.headers.get('Content-Type');
            if (contentType) {
                const isJSON = contentType.toLowerCase().startsWith('application/json');
                if (isJSON) {
                    return await response.json();
                }
                else {
                    return await response.text();
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return;
}
function catchErrors(options, result) {
    const errors = Object.assign({ 400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not Found', 500: 'Internal Server Error', 502: 'Bad Gateway', 503: 'Service Unavailable' }, options.errors);
    const error = errors[result.status];
    if (error) {
        throw new ApiError(result, error);
    }
    if (!result.ok) {
        throw new ApiError(result, 'Generic Error');
    }
}
/**
 * Request using fetch client
 * @param options The request options from the the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export function request(options) {
    return new CancelablePromise(async (resolve, reject, onCancel) => {
        try {
            const url = getUrl(options);
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = await getHeaders(options);
            if (!onCancel.isCancelled) {
                const response = await sendRequest(options, url, formData, body, headers, onCancel);
                const responseBody = await getResponseBody(response);
                const responseHeader = getResponseHeader(response, options.responseHeader);
                const result = {
                    url,
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader || responseBody,
                };
                catchErrors(options, result);
                resolve(result.body);
            }
        }
        catch (error) {
            reject(error);
        }
    });
}
//# sourceMappingURL=request.js.map