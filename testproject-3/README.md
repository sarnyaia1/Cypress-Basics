# Cypress Testproject 3

- Clone the repo

```
cd server

yarn

node index.js
```

- Open another terminal

```
cd client

yarn

yarn start
```

- Open a third terminal

```
cd client

yarn add cypress --dev

yarn cypress open
```

- Custom cypress.json:

```
{
    "baseUrl": "http://localhost:3000",
    "ignoreTestFiles": "*/examples/**"
}
```

- Create new test files (rewards.spec.js, accomplishments.spec.js)

- Create a fixture (rewards.json)