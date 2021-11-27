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
import { Body } from '../models';
import { Body1 } from '../models';
/**
 * EmailEmailApi - axios parameter creator
 * @export
 */
export const EmailEmailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Send an email
         * @param {Body} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailPost: async (body: Body, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling emailPost.');
            }
            const localVarPath = `/email/`;
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
         * Get the email settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailSettingsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/email/settings`;
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
         * Send an test email
         * @param {Body1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailTestPost: async (body: Body1, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling emailTestPost.');
            }
            const localVarPath = `/email/test`;
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
    }
};

/**
 * EmailEmailApi - functional programming interface
 * @export
 */
export const EmailEmailApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Send an email
         * @param {Body} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async emailPost(body: Body, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body>> {
            const localVarAxiosArgs = await EmailEmailApiAxiosParamCreator(configuration).emailPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the email settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async emailSettingsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body1>> {
            const localVarAxiosArgs = await EmailEmailApiAxiosParamCreator(configuration).emailSettingsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Send an test email
         * @param {Body1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async emailTestPost(body: Body1, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body1>> {
            const localVarAxiosArgs = await EmailEmailApiAxiosParamCreator(configuration).emailTestPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EmailEmailApi - factory interface
 * @export
 */
export const EmailEmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Send an email
         * @param {Body} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailPost(body: Body, options?: any): AxiosPromise<Body> {
            return EmailEmailApiFp(configuration).emailPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the email settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailSettingsGet(options?: any): AxiosPromise<Body1> {
            return EmailEmailApiFp(configuration).emailSettingsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Send an test email
         * @param {Body1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailTestPost(body: Body1, options?: any): AxiosPromise<Body1> {
            return EmailEmailApiFp(configuration).emailTestPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailEmailApi - object-oriented interface
 * @export
 * @class EmailEmailApi
 * @extends {BaseAPI}
 */
export class EmailEmailApi extends BaseAPI {
    /**
     * Send an email
     * @param {Body} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailEmailApi
     */
    public emailPost(body: Body, options?: any) {
        return EmailEmailApiFp(this.configuration).emailPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the email settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailEmailApi
     */
    public emailSettingsGet(options?: any) {
        return EmailEmailApiFp(this.configuration).emailSettingsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Send an test email
     * @param {Body1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailEmailApi
     */
    public emailTestPost(body: Body1, options?: any) {
        return EmailEmailApiFp(this.configuration).emailTestPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
