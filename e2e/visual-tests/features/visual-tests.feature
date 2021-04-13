# Similar to the standard E2E test suite, I am using Cucumber/Gherkin to write
# the visual tests. I am opting to have two test suites, to separate concerns
# between standard E2E tests which assert the state of the application, vs 
# visual tests that use Applitools to take snapshots of the application's
# appearance. One benefit of using Cucumber/Gherkin for both test suites is
# that the step definitions and page object functions can be reused from 
# the standard E2E test suite, with minimal step additions to capture 
# screenshots using Applitools.

Feature: Visual Testing (using Applitools)

  Scenario: Should have the expected design for the welcome page
    Given I am on the welcome page
    When I do nothing
    Then The welcome message should be shown
      And The design for the welcome page should be correct
