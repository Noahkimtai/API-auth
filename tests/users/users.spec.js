const {test, expect } = require('@playwright/test');

// Getting all the system users test
test('Get all users', async({request})=> {
    const response = await request.get('/users');
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)
});

//Get a single user using its id test
test('Should be able to get a single user using the id', async({request}) =>{
    const response = await request.get('/users/16682947')
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
}
);

//Test fetching user assigned roles
test('Fetch user assigned roles using a users id', async({request}) =>{
    const response = await request.get('/users/16682947/roles');
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200);
    let responseData = await response.json();
    console.log(responseData)
})

/* // Test assigning a role to a user
test('Assign a role to a user', async({request}) =>{
    const response = await request.post('/users/:userId/switch/:organizationId',{
        Headers: {
            'Content-Type': 'application/json',
            'Accept': 'applicaton/json',
        },
        rolesData
    });
}
); */

const data = {
    "name": "tester name",
    "username": "tester username",
    "emailAddress": "scmugo@gmail.com",
    "dateOfBirth": "0025-11-30T00:00:00.000+00:00",
    "status": "A",
    "userType": "U",
    "telNo": "0765456342",
    "phoneNumber": "0765456342",
    "otherPhone": null,
    "personelRank": "Advocate",
    "countryCode": 1100,
    "townCode": null,
    "physicalAddress": null,
    "postalCode": null,
    "departmentCode": 1,
    "activatedBy": null,
    "updateBy": null,
    "granter": null,
    "profilePicture": null,
    "organizationId":2,
    "organizationGroupId": 1,
    "supervisorId": 16682847,
    "branchId": null,
    "gender": "M",
    "pinNumber": "A859819198X",
    "idNumber": "34150100"
    }
// Test a post request for users end point
let createUserID;
test('Should be able to create and delete a user a user', async({request}) =>{
    const response = await request.post('/users',{
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let responseData = await response.json();
    console.log(responseData)
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    // Check the data returned is similar to the data that was posted by the user
    // test data is posted to the API
    expect (responseData.name).toBe(data.name)
    //Store the response value inside a a variable
    const createdUserID = responseData.id;
    console.log(createdUserId)
});
// currentUserID = 16683135

// Update the created user using PUT method test
test('User can be updated using PUT method', async({request}) =>{
    const response = await request.put(`users/${createdUserId}`,{
   
    Headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        },
     data
    },
    )
})
test('Delete the created request', async({request}) =>{
    const response = await request.delete(`/users/${createdUserId}`,
    { 'Content-Type': 'application/json'});
    let responseData = await response.json()
    console.log(responseData)
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)

})