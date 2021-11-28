import { request as __request } from '../core/request';
export class UsersPermissionsUserService {
    /**
     * Search for users
     * @param id
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
     * @returns UsersPermissionsUser response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser(id, limit, sort, start, eq, ne, lt, lte, gt, gte, contains, containss, _in, nin) {
        return __request({
            method: 'GET',
            path: `/users-permissions/search/${id}`,
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
     * Connect a provider
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser1() {
        return __request({
            method: 'GET',
            path: `/connect/*`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Login a user using the identifiers email and password
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postUsersPermissionsUser(requestBody) {
        return __request({
            method: 'POST',
            path: `/auth/local`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Register a new user with the default role
     * @param requestBody
     * @returns UsersPermissionsUser response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postUsersPermissionsUser1(requestBody) {
        return __request({
            method: 'POST',
            path: `/auth/local/register`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Successfull redirection after approving a provider
     * @param provider
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser2(provider) {
        return __request({
            method: 'GET',
            path: `/auth/${provider}/callback`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Send the reset password email link
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postUsersPermissionsUser2(requestBody) {
        return __request({
            method: 'POST',
            path: `/auth/forgot-password`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Reset user password with a code (resetToken)
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postUsersPermissionsUser3(requestBody) {
        return __request({
            method: 'POST',
            path: `/auth/reset-password`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Validate a user account
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser3() {
        return __request({
            method: 'GET',
            path: `/auth/email-confirmation`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Send a confirmation email to user
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postUsersPermissionsUser4(requestBody) {
        return __request({
            method: 'POST',
            path: `/auth/send-email-confirmation`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve all user documents
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
     * @returns UsersPermissionsUser response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser4(limit, sort, start, eq, ne, lt, lte, gt, gte, contains, containss, _in, nin) {
        return __request({
            method: 'GET',
            path: `/users`,
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
     * Retrieve the logged in user information
     * @returns UsersPermissionsUser response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser5() {
        return __request({
            method: 'GET',
            path: `/users/me`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve a single user depending on his id
     * @param id
     * @returns UsersPermissionsUser response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getUsersPermissionsUser6(id) {
        return __request({
            method: 'GET',
            path: `/users/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Update an existing user
     * @param id
     * @param requestBody
     * @returns UsersPermissionsUser response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static putUsersPermissionsUser(id, requestBody) {
        return __request({
            method: 'PUT',
            path: `/users/${id}`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Delete an existing user
     * @param id
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static deleteUsersPermissionsUser(id) {
        return __request({
            method: 'DELETE',
            path: `/users/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
}
//# sourceMappingURL=UsersPermissionsUserService.js.map