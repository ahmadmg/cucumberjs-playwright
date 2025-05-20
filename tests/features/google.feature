Feature: Main Page
  Scenario: Successful Login
    Given A web browser is at the main page
    When The user Search for 'Playwright'
    Then The user should see the result
