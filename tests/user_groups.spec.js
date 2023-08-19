const {test, expect } = require('@playwright/test');

// Getting all the system users test
test('Get all user-groups', async({request})=>{
    const response = await request.get('/user-groups');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)
});


test('Fetch user groups by id', async({request}) =>{
    const response = await request.get('/user-groups/1031');
    expect(response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
})

test('Fetch all users under a specific user group', async({request})=>{
    const response = await request.get('/user-groups/1031/users');
    expect(response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
})

//Test Assign a user or a list of users to a user group
test('Assign a user or a list of users to a user group', async({request}) =>{
    const response = await request.post('/user-groups/1031/users',{
        data: [
            16683042
          ],
        headers: {
            'Content-Type': 'application/json',
        },
    })
    console.log(response);
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
});