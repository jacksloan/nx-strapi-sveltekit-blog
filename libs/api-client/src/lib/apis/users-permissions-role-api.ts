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
import { NewUsersPermissionsRole } from '../models';
import { UsersPermissionsRole } from '../models';
/**
 * UsersPermissionsRoleApi - axios parameter creator
 * @export
 */
export const UsersPermissionsRoleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve all role documents
         * @param {number} [limit] Maximum number of results possible
         * @param {string} [sort] Sort according to a specific field.
         * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
         * @param {string} [eq] Get entries that matches exactly your input
         * @param {string} [ne] Get records that are not equals to something
         * @param {string} [lt] Get record that are lower than a value
         * @param {string} [lte] Get records that are lower than or equal to a value
         * @param {string} [gt] Get records that are greater than a value
         * @param {string} [gte] Get records that are greater than  or equal a value
         * @param {string} [contains] Get records that contains a value
         * @param {string} [containss] Get records that contains (case sensitive) a value
         * @param {Array&lt;string&gt;} [_in] Get records that matches any value in the array of values
         * @param {Array&lt;string&gt;} [nin] Get records that doesn&#x27;t match any value in the array of values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesGet: async (limit?: number, sort?: string, start?: number, eq?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users-permissions/roles`;
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

            if (limit !== undefined) {
                localVarQueryParameter['_limit'] = limit;
            }

            if (sort !== undefined) {
                localVarQueryParameter['_sort'] = sort;
            }

            if (start !== undefined) {
                localVarQueryParameter['_start'] = start;
            }

            if (eq !== undefined) {
                localVarQueryParameter['_eq'] = eq;
            }

            if (ne !== undefined) {
                localVarQueryParameter['_ne'] = ne;
            }

            if (lt !== undefined) {
                localVarQueryParameter['_lt'] = lt;
            }

            if (lte !== undefined) {
                localVarQueryParameter['_lte'] = lte;
            }

            if (gt !== undefined) {
                localVarQueryParameter['_gt'] = gt;
            }

            if (gte !== undefined) {
                localVarQueryParameter['_gte'] = gte;
            }

            if (contains !== undefined) {
                localVarQueryParameter['_contains'] = contains;
            }

            if (containss !== undefined) {
                localVarQueryParameter['_containss'] = containss;
            }

            if (_in) {
                localVarQueryParameter['_in'] = _in;
            }

            if (nin) {
                localVarQueryParameter['_nin'] = nin;
            }

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
         * Retrieve a role depending on its id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesIdGet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling usersPermissionsRolesIdGet.');
            }
            const localVarPath = `/users-permissions/roles/{id}`
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
         * Create a new role
         * @param {NewUsersPermissionsRole} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesPost: async (body: NewUsersPermissionsRole, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling usersPermissionsRolesPost.');
            }
            const localVarPath = `/users-permissions/roles`;
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
         * Delete a role
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesRoleDelete: async (role: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'role' is not null or undefined
            if (role === null || role === undefined) {
                throw new RequiredError('role','Required parameter role was null or undefined when calling usersPermissionsRolesRoleDelete.');
            }
            const localVarPath = `/users-permissions/roles/{role}`
                .replace(`{${"role"}}`, encodeURIComponent(String(role)));
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
         * Update a role
         * @param {NewUsersPermissionsRole} body 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesRolePut: async (body: NewUsersPermissionsRole, role: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling usersPermissionsRolesRolePut.');
            }
            // verify required parameter 'role' is not null or undefined
            if (role === null || role === undefined) {
                throw new RequiredError('role','Required parameter role was null or undefined when calling usersPermissionsRolesRolePut.');
            }
            const localVarPath = `/users-permissions/roles/{role}`
                .replace(`{${"role"}}`, encodeURIComponent(String(role)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
 * UsersPermissionsRoleApi - functional programming interface
 * @export
 */
export const UsersPermissionsRoleApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve all role documents
         * @param {number} [limit] Maximum number of results possible
         * @param {string} [sort] Sort according to a specific field.
         * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
         * @param {string} [eq] Get entries that matches exactly your input
         * @param {string} [ne] Get records that are not equals to something
         * @param {string} [lt] Get record that are lower than a value
         * @param {string} [lte] Get records that are lower than or equal to a value
         * @param {string} [gt] Get records that are greater than a value
         * @param {string} [gte] Get records that are greater than  or equal a value
         * @param {string} [contains] Get records that contains a value
         * @param {string} [containss] Get records that contains (case sensitive) a value
         * @param {Array&lt;string&gt;} [_in] Get records that matches any value in the array of values
         * @param {Array&lt;string&gt;} [nin] Get records that doesn&#x27;t match any value in the array of values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPermissionsRolesGet(limit?: number, sort?: string, start?: number, eq?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UsersPermissionsRole>>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).usersPermissionsRolesGet(limit, sort, start, eq, ne, lt, lte, gt, gte, contains, containss, _in, nin, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a role depending on its id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPermissionsRolesIdGet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersPermissionsRole>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).usersPermissionsRolesIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new role
         * @param {NewUsersPermissionsRole} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPermissionsRolesPost(body: NewUsersPermissionsRole, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersPermissionsRole>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).usersPermissionsRolesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a role
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPermissionsRolesRoleDelete(role: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Body2>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).usersPermissionsRolesRoleDelete(role, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a role
         * @param {NewUsersPermissionsRole} body 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPermissionsRolesRolePut(body: NewUsersPermissionsRole, role: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersPermissionsRole>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).usersPermissionsRolesRolePut(body, role, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersPermissionsRoleApi - factory interface
 * @export
 */
export const UsersPermissionsRoleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve all role documents
         * @param {number} [limit] Maximum number of results possible
         * @param {string} [sort] Sort according to a specific field.
         * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
         * @param {string} [eq] Get entries that matches exactly your input
         * @param {string} [ne] Get records that are not equals to something
         * @param {string} [lt] Get record that are lower than a value
         * @param {string} [lte] Get records that are lower than or equal to a value
         * @param {string} [gt] Get records that are greater than a value
         * @param {string} [gte] Get records that are greater than  or equal a value
         * @param {string} [contains] Get records that contains a value
         * @param {string} [containss] Get records that contains (case sensitive) a value
         * @param {Array&lt;string&gt;} [_in] Get records that matches any value in the array of values
         * @param {Array&lt;string&gt;} [nin] Get records that doesn&#x27;t match any value in the array of values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesGet(limit?: number, sort?: string, start?: number, eq?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options?: any): AxiosPromise<Array<UsersPermissionsRole>> {
            return UsersPermissionsRoleApiFp(configuration).usersPermissionsRolesGet(limit, sort, start, eq, ne, lt, lte, gt, gte, contains, containss, _in, nin, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a role depending on its id
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesIdGet(id: string, options?: any): AxiosPromise<UsersPermissionsRole> {
            return UsersPermissionsRoleApiFp(configuration).usersPermissionsRolesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new role
         * @param {NewUsersPermissionsRole} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesPost(body: NewUsersPermissionsRole, options?: any): AxiosPromise<UsersPermissionsRole> {
            return UsersPermissionsRoleApiFp(configuration).usersPermissionsRolesPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a role
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesRoleDelete(role: string, options?: any): AxiosPromise<Body2> {
            return UsersPermissionsRoleApiFp(configuration).usersPermissionsRolesRoleDelete(role, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a role
         * @param {NewUsersPermissionsRole} body 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPermissionsRolesRolePut(body: NewUsersPermissionsRole, role: string, options?: any): AxiosPromise<UsersPermissionsRole> {
            return UsersPermissionsRoleApiFp(configuration).usersPermissionsRolesRolePut(body, role, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersPermissionsRoleApi - object-oriented interface
 * @export
 * @class UsersPermissionsRoleApi
 * @extends {BaseAPI}
 */
export class UsersPermissionsRoleApi extends BaseAPI {
    /**
     * Retrieve all role documents
     * @param {number} [limit] Maximum number of results possible
     * @param {string} [sort] Sort according to a specific field.
     * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
     * @param {string} [eq] Get entries that matches exactly your input
     * @param {string} [ne] Get records that are not equals to something
     * @param {string} [lt] Get record that are lower than a value
     * @param {string} [lte] Get records that are lower than or equal to a value
     * @param {string} [gt] Get records that are greater than a value
     * @param {string} [gte] Get records that are greater than  or equal a value
     * @param {string} [contains] Get records that contains a value
     * @param {string} [containss] Get records that contains (case sensitive) a value
     * @param {Array&lt;string&gt;} [_in] Get records that matches any value in the array of values
     * @param {Array&lt;string&gt;} [nin] Get records that doesn&#x27;t match any value in the array of values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public usersPermissionsRolesGet(limit?: number, sort?: string, start?: number, eq?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options?: any) {
        return UsersPermissionsRoleApiFp(this.configuration).usersPermissionsRolesGet(limit, sort, start, eq, ne, lt, lte, gt, gte, contains, containss, _in, nin, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a role depending on its id
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public usersPermissionsRolesIdGet(id: string, options?: any) {
        return UsersPermissionsRoleApiFp(this.configuration).usersPermissionsRolesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new role
     * @param {NewUsersPermissionsRole} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public usersPermissionsRolesPost(body: NewUsersPermissionsRole, options?: any) {
        return UsersPermissionsRoleApiFp(this.configuration).usersPermissionsRolesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a role
     * @param {string} role 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public usersPermissionsRolesRoleDelete(role: string, options?: any) {
        return UsersPermissionsRoleApiFp(this.configuration).usersPermissionsRolesRoleDelete(role, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a role
     * @param {NewUsersPermissionsRole} body 
     * @param {string} role 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public usersPermissionsRolesRolePut(body: NewUsersPermissionsRole, role: string, options?: any) {
        return UsersPermissionsRoleApiFp(this.configuration).usersPermissionsRolesRolePut(body, role, options).then((request) => request(this.axios, this.basePath));
    }
}