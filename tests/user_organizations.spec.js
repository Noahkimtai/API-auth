const {test, expect} = require('@playwright/test')

//Test that you can send a get request for all the user organizations.

test('You can be able to get a list of all user organizations', async ({request}) =>{
    const response = await request.get('/user-organizations?userId=84406375')
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)

})
// Test Adding an organization to a user profile
///user-organizations/:userId/add/:organizationId
test('Add an organization to a user profile', async({request}) =>{
    const response = await request.post('/user-organizations/1031/add/1',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        data: 1,
    })
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
})

//Test for Removing an existing organization to user profile
// /user-organizations/:userId/remove/:organizationId
test('Remove an existing organization to user profile', async({request}) =>{
    const response = await request.post('/user-organizations/1031/remove/1',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        data: 1,
    })
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
})

//Test Swith to an organization and set as active organization
test('Swith to an organization and set as active organization', async({request}) =>{
    const response = await request.post('user-organizations/1031/switch/1',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        data: 1,
    }
    )
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
})
