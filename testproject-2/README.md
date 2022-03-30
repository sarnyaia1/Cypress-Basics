# Cypress Tesproject 2

clone repository

```
yarn

yarn start
```

## Install Cypress

- Open another terminal

```
yarn add cypress --dev

yarn cypress open
```

## Start testing

- Custom cypress.json (localhost, ignore)

- Custom package.json ("plugin:cypress/recommended")

- Create new test file (something.spec.js)

- Always start the files with:

```
/// <reference types="cypress" />
```

- If rows like this are automatically added delete them:

```
const { contains } = require("cypress/types/jquery");
```

- Create new command (support/commands.js)

```
Cypress.Commands.add("getByTestId", (testId) => {
    cy.get(`[data-cy='${testId}`)
})
```

### locator.spec.js

- Locating elements with GET
- Locating elements with CONTAINS
- Locating elements with FIND


### habit.spec.js

- Fill input
- Click buttons

### accomplishments.spec.js

- Fill inputs and checkboxes
- Show error message
- Fill with valid data and get a feedback