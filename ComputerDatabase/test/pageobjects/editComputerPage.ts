// Ranorex Webtestit Page Object File

import { browser, by, element, ExpectedConditions } from 'protractor';

export class EditComputerPage {
  public async deleteComputer() {
    await element(by.css('#main > form.topRight > input')).click();
  }

  public async clickSaveComputer() {
    await element(by.css('#main > form > div > input')).click();
  }

  public async enterName(name: string) {
    await element(by.id('name')).clear();
    await element(by.id('name')).sendKeys(name);
  }
}
