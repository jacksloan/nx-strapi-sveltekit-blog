/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { NewUsersPermissionsRole } from '../models/NewUsersPermissionsRole';
import type { UsersPermissionsRole } from '../models/UsersPermissionsRole';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UsersPermissionsRoleService {

    /**
     * Retrieve a role depending on its id
     * @param id
     * @returns UsersPermissionsRole response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getUsersPermissionsRole(
        id: string,
    ): CancelablePromise<UsersPermissionsRole | Error> {
        return __request({
            method: 'GET',
            path: `/users-permissions/roles/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Retrieve all role documents
     * @param limit Maximum number of results possible
     * @param sort Sort according to a specific field.
     * @param start Skip a specific number of entries (especially useful for pagination)
     * @param eq Get entries that matches exactly your input
     * @param ne Get records that are not equals to something
     * @param lt Get record that are lower than a value
     * @param lte Get records that are lower than or equal to a value
     * @param gt Get records that are greater than a value
     * @param gte Get records that are greater than  or equal a value
     * @param contains Get records that contains a value
     * @param containss Get records that contains (case sensitive) a value
     * @param _in Get records that matches any value in the array of values
     * @param nin Get records that doesn't match any value in the array of values
     * @returns UsersPermissionsRole response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getUsersPermissionsRole1(
        limit?: number,
        sort?: string,
        start?: number,
        eq?: string,
        ne?: string,
        lt?: string,
        lte?: string,
        gt?: string,
        gte?: string,
        contains?: string,
        containss?: string,
        _in?: Array<string>,
        nin?: Array<string>,
    ): CancelablePromise<Array<UsersPermissionsRole> | Error> {
        return __request({
            method: 'GET',
            path: `/users-permissions/roles`,
            query: {
                '_limit': limit,
                '_sort': sort,
                '_start': start,
                '_eq': eq,
                '_ne': ne,
                '_lt': lt,
                '_lte': lte,
                '_gt': gt,
                '_gte': gte,
                '_contains': contains,
                '_containss': containss,
                '_in': _in,
                '_nin': nin,
            },
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Create a new role
     * @param requestBody
     * @returns UsersPermissionsRole response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static postUsersPermissionsRole(
        requestBody: NewUsersPermissionsRole,
    ): CancelablePromise<UsersPermissionsRole | Error> {
        return __request({
            method: 'POST',
            path: `/users-permissions/roles`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Update a role
     * @param role
     * @param requestBody
     * @returns UsersPermissionsRole response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static putUsersPermissionsRole(
        role: string,
        requestBody: NewUsersPermissionsRole,
    ): CancelablePromise<UsersPermissionsRole | Error> {
        return __request({
            method: 'PUT',
            path: `/users-permissions/roles/${role}`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Delete a role
     * @param role
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static deleteUsersPermissionsRole(
        role: string,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'DELETE',
            path: `/users-permissions/roles/${role}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

}