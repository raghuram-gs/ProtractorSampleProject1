// Ranorex Webtestit Page Object File

import { browser, by, element, ExpectedConditions } from 'protractor';

export class AddComputerPage {
  public async clickCreateComputer() {
    await element(by.css('#main > form > div > input')).click();
  }

  public async enterName(name: string) {
    await element(by.id('name')).sendKeys(name);
  }

  public async getTitle(): Promise<string> {
    return await browser.getTitle();
  }

}
