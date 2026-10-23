
Feature: Home page functionality

@Login
Scenario: Verify the home loads successfully
    Given I am on the SDET unicorn home page
    Then I should see the home page "Think different. Make different."
    And I should see the special sale heading "Special Sale: Elevate Your SDET Skills! "

