Feature: To automate Flipkart Comparison functionality

  Scenario Outline: To add the products for comparing

    Given I am on the home page
    When I enter product with name <productName>
    And click on First Product
    Then switch window to <window>
    And verify the product name as <productName>
    Then click on Compare Button

    Examples:
      | productName       | window |
      | iPhone 16 Pro Max | 1      |
      | iPhone 15 Pro Max | 2      |

  Scenario: Verify comparison of 2 items

    When user click on Comparison Button
    Then user clicks on Show Difference
