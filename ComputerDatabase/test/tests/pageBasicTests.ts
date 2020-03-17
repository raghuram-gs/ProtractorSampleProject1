// Ranorex Webtestit Test File

import { browser } from 'protractor';
import { ComputerDatabase } from '../pageobjects/computerDatabase';

const computerDatabase = new ComputerDatabase();

describe('When the computer database website is opened', () => {
  beforeEach(async () => {
    // Make sure to set the ignoreSynchronization for every testrun
    // for non Angular applications
    browser.ignoreSynchronization = true;

    await computerDatabase.open();

  });

  it('should contain a list of computers', async () => {
    // Assert
    await expect(await computerDatabase.isComputerListPresent()).toBeTruthy();
  });
});
