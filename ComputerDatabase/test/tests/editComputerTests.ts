// Ranorex Webtestit Test File

import { browser } from 'protractor';
import { ComputerDatabase } from '../pageobjects/computerDatabase';
import { AddComputerPage } from '../pageobjects/addComputerPage';
import { EditComputerPage } from '../pageobjects/editComputerPage';

const computerDatabase = new ComputerDatabase();

describe('When we edit a computer', () => {
  beforeEach(async () => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;

    await computerDatabase.open();
  });

  it('should be able to change the computer name', async () => {
    // 1. Arrange
    const editComputerPage: EditComputerPage = await computerDatabase.selectComputerForEditAtRowNo(1);

    // 2. Act
    let newNameOfComuter: string = 'AAAAAA';
    await editComputerPage.enterName(newNameOfComuter);
    await editComputerPage.clickSaveComputer();

    // 3. Assert
    await expect(await computerDatabase.isComputerPresent(newNameOfComuter)).toBeTruthy();
  });
});
