Feature: Verify HTTP status code and response time

Scenario: Make a GET request to check status
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And the response time is below 1000 milliseconds
