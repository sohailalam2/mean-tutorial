# Mean Tutorial (ShoppingKart)
-----------------------------

An awesome way of learning things is by doing it.

## Lessons

### Lesson 1: Intro to Node & Express
 
- Understand package.json
- Setup Nodejs + Express Application
- Setup templating library and using it
- Setup static resource directory

**Instructions**

- Clone the Lesson 1 branch
- Navigate to the root directory of the project and run

```js
npm install
```

- Once the dependencies are loaded, start the application as follows

```js
cd src && node app.js
```

- The application will start on http://127.0.0.1:8080

- You can test the demo as follows - 


    http://localhost:8080/      => Should serve be served from the indexRoute.js
    http://localhost:8080/home  => Should serve be served from statically from the public folder
    http://localhost:8080/users => Should show a stack trace, rendered using the HJS templating engine
 
