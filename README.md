# QA Buddy Program - Diana Vázquez

## Todoist automation framework for QA Onboarding Challenge

This repository is meant to covered the checklist from the Onboarding QA Challenge and deliver a test automation solution for front-end, back-end, and performance testing with JS.

### Folder Structure Conventions

#### Top level directory

```bash
. 
├── .github
├── Backend
├── Frontend
├── node_modules
├── .env
├── package-lock.json
├── package.json
└── README.md
 ```

#### Backend Tests

```bash
. 
├── ...
├── Frontend
│   ├── collection
│   │   └── Todoist.json
│   ├── envVariables
│   │   └── QA.json
│   └── reports
└── ...
 ```
 
 #### Frontend Tests

```bash
. 
├── ...
├── Backend
│   ├── data
│   │   └── Constants.js
│   ├── pages
│   │   ├── LoginPage.js
│   │   ├── MyTasksPage.js
│   │   └── WelcomePage.js
│   └── tests
│       ├── LoginTest.js
│       └── TasksTest.js
└── ...
 ```

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

###### Frontend

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
npm install testcafe
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

###### Backend

1. Install newman

```bash
 npm install newman
 ```

2. Install newman reporter

```bash
 npm install newman-reporter-htmlextra
 ```

 ###### Static Analysis

 1. Install eslint

 ```bash
 npm install eslint --save-dev
 ```

 2. Eslint configuration

```bash
 npx eslint --init
 ``` 

 ###### BrowserStack

 1. Install browserstack

 ```bash
 npm i testcafe-browser-provider-browserstack
 ```
