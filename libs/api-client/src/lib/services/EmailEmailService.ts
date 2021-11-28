/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class EmailEmailService {

    /**
     * Send an email
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static postEmailEmail(
        requestBody: any,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'POST',
            path: `/email/`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Send an test email
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static postEmailEmail1(
        requestBody: any,
    ): CancelablePromise<any | Error> {
        return __request({
            method: 'POST',
            path: `/email/test`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Get the email settings
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static getEmailEmail(): CancelablePromise<any | Error> {
        return __request({
            method: 'GET',
            path: `/email/settings`,
            errors: {
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

}