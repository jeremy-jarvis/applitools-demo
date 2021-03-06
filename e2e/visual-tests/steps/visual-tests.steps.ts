// These steps are used by the visual tests, and are specific to capturing
// screenshots of the application using Applitools. For reference, see the 
// "Protractor tutuorial" in the Applitools documentation. 
// https://applitools.com/tutorials/protractor.html

import { BatchInfo, BrowserType, Configuration, Eyes, RectangleSize, Target, VisualGridRunner } from '@applitools/eyes-protractor'
import { After, BeforeAll, setDefaultTimeout, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';

let runner: VisualGridRunner;
let eyes: Eyes;

// Cucumber's default timeout is 5000 ms. This isn't enough to avoid timing out
// during testing. So, I increased the timeout to avoid this issue. Your mileage
// may vary.
setDefaultTimeout(Number(30000));

BeforeAll(() => {
  runner = new VisualGridRunner();
  eyes = new Eyes(runner);
  const configuration = new Configuration();
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
  configuration.setBatch(new BatchInfo('Applitools Ultrafast Test Cloud Demo'));
  configuration.addBrowser(1024, 768, BrowserType.FIREFOX);
  configuration.addBrowser(1024, 768, BrowserType.CHROME);
  eyes.setConfiguration(configuration);
});

After(async () => {
  if(eyes) {
    // If the test was aborted before eyes.close was called, ends the test as aborted.
    await eyes.abortAsync();
  }
});

Then('The design for the welcome page should be correct', async () => {
  // Start the test 
  await eyes.open(browser, 'Applitools Demo', 'Angular Welcome Page', new RectangleSize(1024, 768));
  
  // Take a visual checkpoint (screenshot) of the page
  await eyes.check("Angular Welcome Page", Target.window().fully());
  
  // End the test.
  await eyes.close();
});
