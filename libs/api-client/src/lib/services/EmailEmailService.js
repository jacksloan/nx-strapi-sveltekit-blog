import { request as __request } from '../core/request';
export class EmailEmailService {
    /**
     * Send an email
     * @param requestBody
     * @returns any response
     * @returns Error unexpected error
     * @throws ApiError
     */
    static postEmailEmail(requestBody) {
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
    static postEmailEmail1(requestBody) {
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
    static getEmailEmail() {
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
//# sourceMappingURL=EmailEmailService.js.map