Feature: Verify HTTP status code and error object properties

Scenario: Verify HTTP status code and error object properties
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest/2023-09-11"
    Then the failed response status code should be 404
    And the error object has property "details" and "http_response_code"
