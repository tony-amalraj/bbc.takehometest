Feature: Verify if title field in episode is never null or empty

Scenario: Verify if title field in episode is never null or empty
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And the title field is never NULL
    And the title field is never ""
