const {test, expect } = require('@playwright/test');

// Test fetching user assigned systems
test('Fet systems assigned to a user', async({request})=>{
    const response = await request.get('/users/16682947/systems');
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)

})