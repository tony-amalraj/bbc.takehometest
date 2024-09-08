Feature: In the response headers, verify the "Date" value

Scenario: Verify the "Date" value in the response headers
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And the response header should have a valid "date"
