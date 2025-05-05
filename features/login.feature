Feature: To automate Flipkart application's Login Page

Scenario: To verify login functionality
    Given I am on the home page
    Then switch window to 0
    When user clicks on Login Button

Scenario Outline: Verify with invalid user credentials

    Given user provides value as <userCreds>
    Then click on Request OTP
    And verify error message as <message>

    Examples:
      | userCreds                 | message                                   |
      |                           | Please enter valid Email ID/Mobile number |
      | 123                       | Please enter valid Email ID/Mobile number |
      | 111111111111111           | Please enter valid Email ID/Mobile number |
      | !~@#$%^&*()_+-={}[]:";'\  | Please enter valid Email ID/Mobile number |
      | null                      | Please enter valid Email ID/Mobile number |
      | testing@gm23              | Please enter valid Email ID/Mobile number |

