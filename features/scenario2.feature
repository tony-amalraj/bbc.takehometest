Feature: Verify if id value is not NULL or empty and type field is always episode

Scenario: Verify if id value is not NULL or empty and type field is always episode
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And the id field is never NULL
    And the id field is never ""
    And the type field is always "episode"
