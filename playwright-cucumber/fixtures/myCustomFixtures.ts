import {test as base, expect} from '@playwright/test';

type MyFixtures = {
  myCustomFixture: string;
};

export const test = base.extend<MyFixtures>({
    myCustomFixture: async ({}, use) => {
        // Setup code for the fixture
        const fixtureValue = 'Hello, this is my custom fixture!';
        await use(fixtureValue);
    }
}):
 export { expect } ; 
