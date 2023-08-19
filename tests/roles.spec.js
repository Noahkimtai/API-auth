/* const {test, expect} = require('@playwright/test');

test('Select list of all roles', async({request}) =>{
    const response = request.get('/roles?organizationId=84406375')
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)
});

test('Fetch role using ID', async({request}) =>{
    const response = request.get('/roles/:roleId')
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)
}); */