Feature: Visual Testing (using Applitools)

  Scenario: Should have the expected design for the welcome page
    Given I am on the welcome page
    When I do nothing
    Then The welcome message should be shown
      And The design for the welcome page should be correct
