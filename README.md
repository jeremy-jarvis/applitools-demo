# Applitools Demonstration

## Testing an Angular app using Applitools, Cucumber, Protractor, and Chai

The main purpose of this repository is to demonstrate how Applitools can be used to verify an application's visual appearance. As a secondary bonus, this repository also shows how Cucumber can be integrated with Protractor and Chai for the purpose of "standard" E2E testing.

The combination of these tools creates a useful tool set for verifying both the behavior of a web application as well as its visual appearance. The later of which can be a tedious and time-intensive manual process. Using Applitools, it is easy to perform visual testing frequently. This can help catch regressions or other issues early, leading to higher code quality.

Overall, this repository demonstrates three different types of testing:
- Unit testing
- Standard E2E testing
- Visual E2E testing

## Unit Tests
This is the standard unit testing suite that comes with a new Angular project.

Frameworks used: Jasmine and Karma.

> `npm run test`

## Standard E2E Tests
These tests interact with a running application and assert that the page's state is as expected.

Frameworks used: Cucumber, Protractor, and Chai

> `npm run e2e-standard-tests`

## Visual E2E Tests
These tests take visual "screenshots" of how an application looks, allowing the tester to review and approve the screenshots within the Applitools web UI. The purpose of doing so is to verify that the application matches the expected visual design, and inform the tester when pages stray from that design. 

Frameworks used: Applitools, Cucumber, Protractor, and Chai. 

> `npm run e2e-visual-tests`

## Additional Details

### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.