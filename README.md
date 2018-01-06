# Simple Protractor Example

Project to learn [Protractor](http://www.protractortest.org) by example. 
A really simple minimal working example and an extended one, helps you learn it step by step.

## Setup
* Install [Node](http://nodejs.org) (v6.x.x or later)
* Clone repository `git clone https://github.com/ppasler/simple-protractor-example.git`
* Install packages `npm install`
* Update Webdriver `npm run update`

## Run Tests
* `npm run test-e2e` or
* `npm run test-e2e-todo`

## Structure
The root directory contains the `package.json`. The [package.json](https://docs.npmjs.com/files/package.json) is needed to install the required node packages and 
inherits the configuration for two scripts that you might have read in the previous section (`npm run update` and `test-e2e`).

Then there is a minimal working example within the `index/` folder and an extended one under `todo/`.
Both folders contain a HTML file, two specs and a page object.

### Index
The `index/conf.js` inherits the minimal working configuration for protractor to run.
 
`index.html` is a simple HTML file without any special elements.
The `index.spec.js` contains the smallest test setup with only one test case. 
The `indexPageObject.spec.js` does the same but uses a really simple page object to open the page.

### ToDo
The `todo/conf.js` extends the configuration with a better reporter, screenshots and further arguments to chrome.

The ToDo page (`todo.html`) uses an Angular example from [W3Schools](https://www.w3schools.com/angular/tryit.asp?filename=try_ng_todo_app). 
The `toDo.spec.js` uses different ways to select an element. 
`toDoPageObject.spec.js` uses page objects to wrap some functionality.

After `npm run test-e2e-todo` there will be a `screenshots` folder containing one image for each test case.

## Credits

Inspired by the [Protractor Example](https://github.com/qualityshepherd/protractor_example.git) from [Quality Shepherd](https://qualityshepherd.com)

See the [Protractor style guide](https://github.com/angular/protractor/blob/master/docs/style-guide.md) for further structural information.
