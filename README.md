# Service Titan

### Tech
Service titan web uses a number of open source projects to work properly:
* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Typescript] - typed superset of javascript
* [MochaJS] - javaScript test framework
* [EJS] - view engine
* [Sass] - css preprocessor
* [Bootstrap] - great UI boilerplate for modern web apps
* [jQuery] - javaScript library

### Installation
Requires [Node.js] to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:servicetitan/public-website.git service-titan
$ cd service-titan
$ npm install
```

### Development
Open your favorite Terminal and run these commands. Your files changes are watched automatically.

```sh
$ npm run start:dev
```

#### Building
For production release:
```sh
$ npm run start
```
This command is going to create a dist folder on root with all files compiled, then the server will be started with dist as a source.

### Testing
To run all of your tests just run
```sh
$ npm run test
```

### Scaffolding

We follow MVC pattern to scaffold the project. All of the BE code is in **src** folder.

* src/config => Where constants needed in the BE are declared (not depending on environment).
* src/controllers => Where controllers are declared following MVC pattern.
* src/environments => Where environments variables are declared.
* src/helpers => Where helpers function are declared. functions to abstract logic and not repeat code.
* src/middlewares => Middlewares that don't apply to be inside a controller.
* src/models => Where models are declared following MVC pattern.
* src/public => Where files that must be static for client used are.
* src/routers => Where express routers are declared.
* src/services => Where services for service layer are declared.
* src/tests => Every test must be here.
* src/views => Where user views are.
* app.ts => Where server is declared.
* server.ts => Where server is started.
##### src/public details (FE)
###### Templates
* src/view => all main templates with .ejs extension should be here.
* src/views/includes => Where partial templates are. (e.x: navbar)
###### JS & CSS
* src/public/js => should not be **touched** because it's are processed by npm to improve performance.
* src/public/css => should not be **touched** because it's are processed by npm to improve performance.
* src/public/src => Files that are going to be processed in build (you can update code here).
* src/public/src/sass => .scss files goes here.
* src/public/src/js => .js files go here

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)
   [Node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [Typescript]: <https://www.typescriptlang.org/>
   [MochaJS]: <https://mochajs.org/>
   [EJS]: <https://ejs.co/>
   [Sass]: <https://sass-lang.com/>
   [Bootstrap]: <https://getbootstrap.com/>
   [jQuery]: <http://jquery.com>