## start a project

- npm init -y
- npm install express
- npm install nodemon
- vim package.json
- "scripts": {
  "start": "node index",
  "dev": "nodemon index"
  },
- npm install uuid
- npm i express-handlebars
- npm run dev

## for NOW

### static

- create now.json in root dir
- vim now.json
- {
  "name": "static-example",
  "version": 2,
  "builds" : [
  { "src": "*", "use": "@now/static" }
  ]
  }
- execute 'now' at shell.

### Vue

- vue create newProject/npx @vue-cli create yourProject(?)
- router with 'history setup' during installing(preset some staff)
- vim now.json

- {
  "name": "static-build-example",
  "version": 2,
  "builds" : [
  { "src": "package.json", "use": "@now/static-build" }
  ],
  "routes": [
  {"src": "/about", "dest": "index.html"},
  ],
  // this is for the save of when you visit the about directly from your browser,
  // a 404 rather than about page would show.
  // but the fix below would be better
  "routes": [
  {"handle": "/filesystem"},
  { "src": "/.*, "dest": "index.html"}
  ],
  }

- vim package.json

- {
  "name": "static-build-example",
  "version": "0.1.0",
  "private": true,
  "scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint",
  "now-build": "npm run build"
  }
  }

- npm run build

- execute 'now' at shell.

### node

- npx create-express-api node-server-express-example
  - why is not the normal comands? I don't know. But just let it be.
- vim now.json
- {
  "name": "node-server-express-example",
  "version": 2,
  "builds": [
  {
  "src": "src/index.js", // if src is not the directory that index.js is in, do it the right one.
  "use": "@now/node-server",
  }
  ],
  "routes": [
  {"src": "/.*", "dest": "src/index.js"}
  ]
  }
  // the route '/'should awlays set correct to be read by NOW, sometime it is good at local but not
  // at NOW.
