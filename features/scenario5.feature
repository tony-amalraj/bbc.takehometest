Feature: Verify that the transmission_start date value is before the transmission_end date

Scenario: Verify that the transmission_start date value is before the transmission_end date
    When I send a GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And the "transmission_start" is before "transmission_end" date
