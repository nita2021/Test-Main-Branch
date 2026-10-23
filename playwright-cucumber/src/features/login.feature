Feature: HomePage functionality

  Scenario: Verify Home loads successfully
    Given I am on the SDET Unicorn home page
    Then I should see the  Home page Heading "Think different. Make different."
    And I should see the Special sale heading "Special Sale: Elevate Your SDET Skills!"
  