Feature: Verify that only one episode in the list has "live" field in "episode" as true

Scenario: Verify that only one episode in the list has "live" field in "episode" as true
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And only one episode has "live" in the episode set to true
