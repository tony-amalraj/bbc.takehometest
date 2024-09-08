Feature: Functional Manual Testing - 3 test cases

Scenario: Verify duration of the episodes
    Given I have a response body for the API with 200 status code
    Then I check the duration field for each of the episode returned
    And I confirm if the value field in duration is displayed in hours and minutes
    And I confirm if the value in the text field is displayed in minutes
    And I confirm both the values match when converted to minutes

Scenario: Verify mandatory fields
    Given I have a response body for the API with 200 status code
    Then I check if all the mandatory fields have a value when compared against the requirement
    And I confirm if the field is optional they either exist in the response or have NULL or blank against the field
    
Scenario: Verify the channel section of the response
    Given I have a response body for the API with 200 status code
    Then I check if the 1st section below schedule is channel
    And I confirm if the section has 6 fields in it
    And I confirm the field names are id, type, title, has_schedule, master_brand_id and master_brand_title
    And I confirm if the value against id is bbc_one_london
    And I confirm if the value against type is channel
    And I confirm if the value against title is BBC One
    And I confirm if the value against has_schedule is true and is a boolean value
    And I confirm if the value against master_brand_id is bbc_one
    And I confirm if the value against master_brand_title is BBC One
