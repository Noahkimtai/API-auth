const {test, expect } = require('@playwright/test');

// Test for fetching currently logged in user
test('Should be able to get a list of all logged in users', async({request}) =>{
    const response = await request.get('/users/profile')
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)
});

//Test updating user profile for a logged in user
test('Update user profile for a logged in user', async({request}) =>{
    const response = await request.post('users/profile',{
        Headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
        },
        data:{
            "firstName": "eiusmod",
            "lastName": "dolore ex in Duis",
            "phoneNo": "mollit adipisicing dolore"
        },
    })
})