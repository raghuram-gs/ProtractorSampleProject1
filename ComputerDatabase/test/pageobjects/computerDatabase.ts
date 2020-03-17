// Ranorex Webtestit Page Object File

import { browser, by, element, ExpectedConditions } from 'protractor';
import { AddComputerPage } from './addComputerPage';
import { EditComputerPage } from './editComputerPage';

export class ComputerDatabase {
  selectAComputerForEdit(): any {
    throw new Error("Method not implemented.");
  }
  public async isComputerPresent(name: string): Promise<boolean> {
    let computerName: string = await element(by.css('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')).getText();
    return computerName === name;
  }
  public async clickOnAddAComputer(): Promise<AddComputerPage> {
    await element(by.id('add')).click();
    return new AddComputerPage();
  }

  public async open(): Promise<ComputerDatabase> {
    await browser.get('http://computer-database.gatling.io/computers');
    return this;
  }

  public async isComputerListPresent(): Promise<boolean> {
    return element(by.css('#main > table')).isPresent();
  }

  public async getTitle(): Promise<string> {
    return await browser.getTitle();
  }

  public async selectComputerForEditAtRowNo(rownNo: number) {
    await element(by.css('#main > table > tbody > tr:nth-child(1) > td:nth-child(' + rownNo + ') > a')).click();
    return new EditComputerPage();
  }

  public async selectFirstComputer(): Promise<string> {
    const name: string = await element(by.css('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')).getText();
    await element(by.css('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')).click();
    return name;
  }
}
