const {test, expect} = require('@playwright/test');

test('Get all calender activities', async({request}) =>{
    const response = await request.get('/calendar-activities?user=1031');
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
    let responseData = await response.json();
    console.log(responseData)
});

let createUserID;
test('Should be able to create and delete a user a user', async({request}) =>{
    const response = await request.post('/calendar-activities',{
        data:{
            "StartDate": "1983-08-29T08:14:42.070Z",
            "code": 50632149,
            "endDate": "1970-07-20T14:28:33.988Z",
            "location": "do",
            "memo": "officia incididunt non laborum irure",
            "startDate": "1965-03-20T23:58:13.637Z",
            "title": "ut consequat",
            "user": "dolore anim eiusmod"
          },
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let responseData = await response.json();
    console.log(responseData)
    expect (response.ok()).toBeTruthy();
    expect (response.status()).toBe(200)
});




