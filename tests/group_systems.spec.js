const {test, expect} = require('@playwright/test');

test('Fetch all group_systems', async({request}) =>{
    const response = await request.get('group-systems?groupId=1031')
    expect (response.ok()).toBeTruthy()
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
})