Feature: Main Page Search Multi
    This feature verifies the search functionality on the main page for multiple search terms.
    It ensures that when a user searches for different keywords, the relevant results are displayed as expected.

    @multipleScenarios @Search
    Scenario Outline: Search nr "<scenarioID>" on the main page
        Given A web browser is at the main page
        When I click 'search' button
        When The user searches for "<searchWord>"
        Then The user should see relevant search results for "<searchAssert>"
        Examples:
            | scenarioID | searchWord                 | searchAssert               |
            | 1          | Test user-visible behavior | Test user-visible behavior |
            | 2          | Getting started - VS Code  | Getting started - VS Code  |