# A feature file is where you can define scenarios (test cases) for a
# given feature. In this case, this feature file tests the Welcome Page
# feature. Feature files are written using Gherkin syntax. 
# https://cucumber.io/docs/gherkin/

Feature: Welcome Page

  Scenario: Should display the welcome message
    Given I am on the welcome page
    When I do nothing
    Then The welcome message should be shown