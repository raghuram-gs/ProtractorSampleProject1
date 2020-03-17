// Ranorex Webtestit Page Object File

import { browser, by, element, ExpectedConditions } from 'protractor';

export class EditComputerPage {

  /*
   * NOTE: Use Ranorex Selocity or the Elements Panel to generate element code
   */

  public async open(url: string): Promise<EditComputerPage> {
    await browser.get(url);

    return this;
  }

  public async getTitle(): Promise<string> {
    return await browser.getTitle();
  }

  /*
   * NOTE: Drag elements from the Elements panel into the code editor to generate
   * methods. Drag elements into existing methods to add steps.
   */

}
