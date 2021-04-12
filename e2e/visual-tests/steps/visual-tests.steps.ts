import { BatchInfo, ClassicRunner, Configuration, Eyes, RectangleSize, Target } from '@applitools/eyes-protractor'
import { After, BeforeAll, setDefaultTimeout, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';

let runner: ClassicRunner;
let eyes: Eyes;

setDefaultTimeout(Number(20000));

BeforeAll(() => {
  runner = new ClassicRunner();
  eyes = new Eyes(runner);
  const configuration = new Configuration();
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
  configuration.setBatch(new BatchInfo('Applitools Demo'));
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
