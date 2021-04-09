Feature: Welcome Page

  Scenario: Should display the welcome message
    Given I am on the welcome page
    When I do nothing
    Then The welcome message should be shown