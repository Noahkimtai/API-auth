const {test, expect } = require('@playwright/test');

test('Select list of all roles', async({request}) =>{
    const response = await request.get('/roles?organizationId=1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseData = await response.json();
    console.log(responseData);
});

test('Fetch role using ID', async({request}) =>{
    const response = await request.get('roles/2017')
    // expect(response.ok()).toBeTruthy();
    // expect(response.status()).toBe(200);
    console.log(response.ok())
    console.log(response.status())
    let responseData = await response.json();
    console.log(responseData)
});