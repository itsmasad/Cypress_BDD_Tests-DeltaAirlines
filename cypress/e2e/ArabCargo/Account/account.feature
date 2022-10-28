# cypress/e2e/duckduckgo.feature
Feature: ArabCargo Accounts

  Scenario: 01 Verify that the add account form contains these fields
    Given I navigate to login page
    And Check if account form contains all the required fields and buttons
    Then This