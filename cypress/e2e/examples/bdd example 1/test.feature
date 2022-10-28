Feature: Login

  Scenario: TC_00001 Login to Railsfriend
    Given go to railsfriend page
    When click Sign in on menu bar
    And fill username with "test@gmail.com"
    And fill password with "password"
    And click Log in button
    Then sign out displayed on menu bar