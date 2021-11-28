import { request as __request } from '../core/request';
export class PostsService {
    /**
     * Find all the posts's records
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
     * @returns Posts Retrieve posts document(s)
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getPosts(limit, sort, start, eq, ne, lt, lte, gt, gte, contains, containss, _in, nin) {
        return __request({
            method: 'GET',
            path: `/posts`,
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
     * Create a new posts record
     * @param requestBody
     * @returns Posts Retrieve posts document(s)
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postPosts(requestBody) {
        return __request({
            method: 'POST',
            path: `/posts`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve the number of posts documents
     * @returns any Retrieve posts document(s)
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getPosts1() {
        return __request({
            method: 'GET',
            path: `/posts/count`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Find one posts record
     * @param id
     * @returns Posts Retrieve posts document(s)
     * @returns Error unexpected error
     * @throws ApiError
     */
    static getPosts2(id) {
        return __request({
            method: 'GET',
            path: `/posts/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Update a single posts record
     * @param id
     * @param requestBody
     * @returns Posts Retrieve posts document(s)
     * @returns Error unexpected error
     * @throws ApiError
     */
    static putPosts(id, requestBody) {
        return __request({
            method: 'PUT',
            path: `/posts/${id}`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Delete a single posts record
     * @param id
     * @returns number deletes a single posts based on the ID supplied
     * @returns Error unexpected error
     * @throws ApiError
     */
    static deletePosts(id) {
        return __request({
            method: 'DELETE',
            path: `/posts/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
}
//# sourceMappingURL=PostsService.js.map