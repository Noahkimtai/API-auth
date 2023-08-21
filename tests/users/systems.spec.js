const {test, expect } = require('@playwright/test');

// Test fetching user assigned systems
test('Fetch systems assigned to a user', async({request})=>{
    const response = await request.get('/users/1031/systems');
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)

})

// Test Assigning apps to user
test('Assign apps to user', async({request}) =>{
    const response = await request.post('/users/1031/systems',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: {
            "assignedSystems": [
                87091048,
                75793210
              ]
        } 
    });
    expect (response.ok()).toBeTruthy();
    console.log(response.json());
})