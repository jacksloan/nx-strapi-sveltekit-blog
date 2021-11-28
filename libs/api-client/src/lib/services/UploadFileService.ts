/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UploadFileService {

    /**
     * Upload a file
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static postUploadFile(
        requestBody: any,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'POST',
            path: `/upload/`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Retrieve the total number of uploaded files
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getUploadFile(): CancelablePromise<any | Error> {
        return __request({
            method: 'GET',
            path: `/upload/files/count`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Retrieve all file documents
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getUploadFile1(): CancelablePromise<any | Error> {
        return __request({
            method: 'GET',
            path: `/upload/files`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Retrieve a single file depending on its id
     * @param id
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getUploadFile2(
        id: string,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'GET',
            path: `/upload/files/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Delete an uploaded file
     * @param id
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static deleteUploadFile(
        id: string,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'DELETE',
            path: `/upload/files/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Search for an uploaded file
     * @param id
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getUploadFile3(
        id: string,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'GET',
            path: `/upload/search/${id}`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

}