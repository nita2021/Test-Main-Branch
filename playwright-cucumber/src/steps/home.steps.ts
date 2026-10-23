import{ Given,  Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/HomePage';

let homepage:HomePage;

Given('I am on the SDET unicorn home page', function () {
 homepage = new HomePage(this.page);
 await homepage.navigateToHomePage();
});

Then('I should see the home page {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see the special sale heading {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});