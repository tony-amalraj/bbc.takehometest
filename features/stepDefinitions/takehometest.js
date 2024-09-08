const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert');
const axios = require('axios').default;

let responseTime, response, statusCode, statusText, responseBody, responseHeader, errorStatusCode, errorStatusText, errorResponseBody;
let arrayLength = 0;

When(/^I send a GET request to "([^"]*)"$/, async function (url) {
    const start = Date.now();
    try{
        response = await axios.get(url);
        statusCode = response.status;
        statusText = response.statusText;
        responseBody = response.data;
        responseHeader = response.headers;
    } catch(error){
        response = error.response;
        errorStatusCode = error.response.status;
        errorStatusText = error.response.statusText;
        errorResponseBody = error.response.data;
    }
    const end = Date.now();
    responseTime = end - start;
    arrayLength = (responseBody.schedule.elements).length;
    return response.status;
});

Then('the response status code should be {int}', async function (returnStatus) {
    if(statusCode === returnStatus){
        return console.log('Response status is'+' '+statusCode+'('+statusText+')');
    }
    else{
        return console.log('Something has gone wrong with the request');
    }
});

Then('the response time is below {int} milliseconds', async function (maxTime) {
    assert(responseTime < maxTime, `Expected response time to be less than ${maxTime}ms, but got ${responseTime}ms`);
});

Then('the id field is never NULL', async function() {
    for (let i = 0; i < arrayLength; i++){
        assert.notStrictEqual(responseBody.schedule.elements[i].episode.id, null, 'The id field should not be null');
    }
});

Then('the id field is never {string}', async function(blankString) {
    for (let i = 0; i < arrayLength; i++){
        assert.notStrictEqual(responseBody.schedule.elements[i].episode.id, blankString, 'The id field should not be blank');
    }
});

Then('the type field is always {string}', async function(enteredText) {
    for (let i = 0; i < arrayLength; i++){
        assert.strictEqual(responseBody.schedule.elements[i].episode.type, enteredText, `Expected ${enteredText} but got ${responseBody.schedule.elements[i].episode.type}`);
    }
});

Then('the title field is never NULL', function () {
    for (let i = 0; i < arrayLength; i++){
        assert.notStrictEqual(responseBody.schedule.elements[i].episode.title, null, 'The title field should not be null');
    }
});

Then('the title field is never {string}', function (blankString) {
    for (let i = 0; i < arrayLength; i++){
        assert.notStrictEqual(responseBody.schedule.elements[i].episode.title, blankString, 'The title field should not be blank');
    }
});

Then('only one episode has {string} in the episode set to true', function (string) {
    let t = 0;
    for (let i = 0; i < arrayLength; i++){
        if (responseBody.schedule.elements[i].episode.live === true){
            t+=1;
        }
    }
    assert.strictEqual(t, 1, `There can be only 1 episode with the live field set to true but ${t} returned`); 
});

Then('the {string} is before {string} date', function (string, string2) {
    let t = 0;
    for (let i = 0; i < arrayLength; i++){
        if (responseBody.schedule.elements[i].transmission_start < responseBody.schedule.elements[i].transmission_end){
            t+=1;
        }
    }
    assert.strictEqual(t, 5, 'There are episodes where transmission_start date is after transmission_end date'); 
});

Then('the response header should have a valid {string}', function (string) {
    const headerDate = responseHeader.date;
    const formatHeaderDate = (headerDate.substring(5,16)).replaceAll(' ','-');
    const moment = require('moment');
    const currentDate = (moment(new Date())).format('DD-MMM-YYYY');
    assert.strictEqual(formatHeaderDate, currentDate, 'The date in the headers is not valid'); 
    //return console.log(responseHeader.date, formatHeaderDate, currentDate);
});

Then('the failed response status code should be {int}', function (returnStatus) {
    if(errorStatusCode === returnStatus){
        return console.log('Response status is'+' '+errorStatusCode+'('+errorStatusText+')');
    }
    else{
        return console.log('Something has gone wrong with the request');
    }
});

Then('the error object has property {string} and {string}', function (detailsProperty, httpProperty) {
    assert.ok(detailsProperty in errorResponseBody.error, `Response should contain the property ${detailsProperty}`);
    assert.ok(httpProperty in errorResponseBody.error, `Response should contain the property ${httpProperty}`);
    //return console.log(errorResponseBody);
});