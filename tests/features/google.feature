Feature: Main Page Search

  Scenario: Search for Playwright on the main page
    Given A web browser is at the main page
    When I click 'search' button
    When The user searches for 'Test user-visible behavior'
    Then The user should see relevant search results for 'Test user-visible behavior'