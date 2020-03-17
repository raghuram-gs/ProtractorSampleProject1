// Ranorex Webtestit Test File

import { browser } from 'protractor';
import { ComputerDatabase } from '../pageobjects/computerDatabase';
import { AddComputerPage } from '../pageobjects/addComputerPage';

const computerDatabase = new ComputerDatabase();

describe('When clicking on add computer', () => {
  beforeEach(async () => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;

    await computerDatabase.open();
  });

  it('should be able to add a computer with a name', async () => {
    // 1. Arrange
    const addComputerPage: AddComputerPage = await computerDatabase.clickOnAddAComputer();

    // 2. Act
    await addComputerPage.enterName('AAA');
    await addComputerPage.clickCreateComputer();

    // 3. Assert
    await expect(await computerDatabase.isComputerPresent('AAA')).toBeTruthy();
  });
});
