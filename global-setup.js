import { request } from '@playwright/test';
import {PASSWORD, USERNAME} from './creds.json';

async function globalSetup() {
    const authURL = 'http://10.176.18.211:1025/oauth/login';

    const requestContext = await request.newContext();
    const response = await requestContext.post(`${authURL}`, {
           data: {
            password: PASSWORD,
            username: USERNAME
            }
        });

        const responseBody = await response.json();
        // Extract access token from the response body
        const accessToken = responseBody.access_token;
        process.env.TOKEN = accessToken;
}

export default globalSetup;