# Omnipresent New Employee Onboarding

In this project, the main concern was to provide performance throughout the form avoiding unnecessary renders with uncontrolled inputs. On the maintainance aspect of the code, the main focus was to have a codebase that is well organized and components that have as little responsabilities as possible to help the project scale and other developers implement new code easily.
The design was inspired on Omnipresent's app login page.

## Technical Proposal

### What problem are you trying to solve?
* With this structure the target is to have a scalable architecture that will allow us to implement more country specific validation while being easy to navigate and maintain code. Not only this, but also providing a application with great performance to the user and better experience with little loadings as possible.

### Why should we solve it?
* One of the biggest issues of working on something that has many customizable fields per data if the maintainance of the code. If we do not take this carefully, we may end up with some big problems in the future. Also, with many different implementations, keeping performance fast is very important to the value that the customer perceives on the company.

### How do you propose to solve it?
* Separating the validation and components with those validations according to each country and code responsability;
* Use React Hook Form to have uncontrolled inputs prevent re-rendering of multiple components;
* Use React Query to improve data fetching loading experience (reduce by a minimum) and caching the results, this will also save some costs on the server side;

### What other approaches did you consider?
* Controlled inputs;
* Validation without Yup;
* Context API for storing fetched results;
* Other State Management libraries for storing fetched results;

### What could go wrong?
* Too many custom validations, there may be need to review the current architecture to see if it supports the maintainance of all new cases;
* Missing tests: as build with the concept of having a MVP as fast as possible, there are currently no tests to assure scalability.
