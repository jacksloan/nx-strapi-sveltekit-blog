/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Body2 } from '../models';
/**
 * UploadFileApi - axios parameter creator
 * @export
 */
export const UploadFileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve the total number of uploaded files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesCountGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/upload/files/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve all file documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/upload/files`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an uploaded file
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesIdDelete: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling uploadFilesIdDelete.');
            }
            const localVarPath = `/upload/files/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a single file depending on its id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesIdGet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling uploadFilesIdGet.');
            }
            const localVarPath = `/upload/files/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Upload a file
         * @param {Body2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadPost: async (body: Body2, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling uploadPost.');
            }
            const localVarPath = `/upload/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Search for an uploaded file
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSearchIdGet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling uploadSearchIdGet.');
            }
            const localVarPath = `/upload/search/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UploadFileApi - functional programming interface
 * @export
 */
export const UploadFileApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve the total number of uploaded files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFilesCountGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UploadFileApiAxiosParamCreator(configuration).uploadFilesCountGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve all file documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFilesGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UploadFileApiAxiosParamCreator(configuration).uploadFilesGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an uploaded file
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFilesIdDelete(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UploadFileApiAxiosParamCreator(configuration).uploadFilesIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a single file depending on its id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFilesIdGet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UploadFileApiAxiosParamCreator(configuration).uploadFilesIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Upload a file
         * @param {Body2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadPost(body: Body2, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UploadFileApiAxiosParamCreator(configuration).uploadPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Search for an uploaded file
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadSearchIdGet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UploadFileApiAxiosParamCreator(configuration).uploadSearchIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UploadFileApi - factory interface
 * @export
 */
export const UploadFileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve the total number of uploaded files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesCountGet(options?: any): AxiosPromise<Body2> {
            return UploadFileApiFp(configuration).uploadFilesCountGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve all file documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesGet(options?: any): AxiosPromise<Body2> {
            return UploadFileApiFp(configuration).uploadFilesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an uploaded file
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesIdDelete(id: string, options?: any): AxiosPromise<Body2> {
            return UploadFileApiFp(configuration).uploadFilesIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a single file depending on its id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFilesIdGet(id: string, options?: any): AxiosPromise<Body2> {
            return UploadFileApiFp(configuration).uploadFilesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload a file
         * @param {Body2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadPost(body: Body2, options?: any): AxiosPromise<Body2> {
            return UploadFileApiFp(configuration).uploadPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Search for an uploaded file
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadSearchIdGet(id: string, options?: any): AxiosPromise<Body2> {
            return UploadFileApiFp(configuration).uploadSearchIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UploadFileApi - object-oriented interface
 * @export
 * @class UploadFileApi
 * @extends {BaseAPI}
 */
export class UploadFileApi extends BaseAPI {
    /**
     * Retrieve the total number of uploaded files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadFileApi
     */
    public uploadFilesCountGet(options?: any) {
        return UploadFileApiFp(this.configuration).uploadFilesCountGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve all file documents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadFileApi
     */
    public uploadFilesGet(options?: any) {
        return UploadFileApiFp(this.configuration).uploadFilesGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an uploaded file
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadFileApi
     */
    public uploadFilesIdDelete(id: string, options?: any) {
        return UploadFileApiFp(this.configuration).uploadFilesIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a single file depending on its id
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadFileApi
     */
    public uploadFilesIdGet(id: string, options?: any) {
        return UploadFileApiFp(this.configuration).uploadFilesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Upload a file
     * @param {Body2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadFileApi
     */
    public uploadPost(body: Body2, options?: any) {
        return UploadFileApiFp(this.configuration).uploadPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Search for an uploaded file
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadFileApi
     */
    public uploadSearchIdGet(id: string, options?: any) {
        return UploadFileApiFp(this.configuration).uploadSearchIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}
