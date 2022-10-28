# cypress/e2e/duckduckgo.feature
Feature: ArabCargo Login

  Scenario: 01 User try to sign in with valid credentials
    Given I navigate to login page
    When Login with valid credentials
    Then Landing page should appear

    Scenario: 02 User try to sign in with invalid Username
    Given I navigate to login page
    When Login with invalid Username
    Then User should get an error regarding wrong username

    Scenario: 03 User try to sign in with invalid password
    Given I navigate to login page
    When Login with invalid password
    Then User should get an error regarding wrong password

    Scenario: 04 User try to Sign in with Valid credentials and add some space in the end of Username
    Given I navigate to login page
    When Login with valid credentials but spaces after username
    Then Landing page should appear

  Scenario: 05 User try to Sign in with Valid credentials and add some space in the end of password
  Given I navigate to login page
  When Login with valid credentials but spaces after password
  Then User should get an error regarding wrong password

  Scenario: 06 User try to Sign in without Username
  Given I navigate to login page
  When Login with only password
  Then User should get an error for not entering username or password

  Scenario: 07 User try to Sign in without Password
  Given I navigate to login page
  When Login with only username
  Then User should get an error for not entering username or password

  Scenario: 08 User try to Sign in without Caps when password actually is in small and caps both
  Given I navigate to login page
  When Login with valid credentials but password in caps
  Then User should get an error regarding wrong password