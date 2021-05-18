# QA Buddy Program - Diana Vázquez

## Todoist automation framework for QA Onboarding Challenge

This repository is meant to covered the checklist from the Onboarding QA Challenge and deliver a test automation solution for front-end, back-end, and performance testing with JS.

### Built With

* [Test Cafe](https://testcafe.io/)

### Getting Started

Follow below instructions to complete the prerequesites and stetup to be able to run the project on your local machine.

#### Prerequisites

* macOS BigSur 11.2.3 or later
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Postman](https://www.postman.com/)
* [Todoist Account](https://todoist.com/)
* [Node JS](https://nodejs.org/en/download/)

##### Instructions

1. In VS Code open a new terminal and clone the [repo](https://github.com/dianavazquezqa/qa-buddy-program-diana-vazquez) 

```bash
git clone https://github.com/dianavazquezqa/qa-buddy-program-diana-vazquez.git
```

2. Install NPM packages

```bash
npm install
```

3. Install Test Cafe Library

```bash
npm install -g testcafe
```

4. Install Dotenv 

```bash
npm install dotenv
```

5. Create a .env file in to the root and add the below variables

```bash
BASE_URL=[Todoist URL]
USERNAME=[Todoist User]
PASSWORD=[Todoist Password]
```

6. Install newman

```bash
 npm install -g newman
 ```

6. Install newman

```bash
 npm install -g newman-reporter-htmlextra
 ```