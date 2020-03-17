// Ranorex Webtestit Test File

import { browser } from 'protractor';
import { ComputerDatabase } from '../pageobjects/computerDatabase';
import { EditComputerPage } from '../pageobjects/editComputerPage';

const computerDatabase = new ComputerDatabase();

describe('When we edit a computer', () => {
  beforeEach(async () => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;

    await computerDatabase.open();
  });

  it('should be able to delete the computer from the database', async () => {
    // 1. Arrange
    const nameOfComputer: string = await computerDatabase.selectFirstComputer();

    // 2. Act
    let editComputerPage: EditComputerPage = new EditComputerPage();
    await editComputerPage.deleteComputer();

    // 3. Assert
    await expect(await computerDatabase.isComputerPresent(nameOfComputer)).toBeFalsy();
  });
});
