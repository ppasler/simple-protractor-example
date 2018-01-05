# Simple Protractor Example

Easy to setup and run Protractor example, with simple html page and small test cases.  

## Setup
* Install [Node](http://nodejs.org) (v6.x.x or later)
* Clone repository `git clone https://github.com/ppasler/simple-protractor-example.git`
* Install packages `npm install`
* Update Webdriver `npm run update`

## Run Tests
* `npm test`

## Structure
The `data/` folder contains a simple html and css file with static content.

`test/e2e/` contains the spec files and page objects. 

There are three spec files:
* `index.spec.js` contains the smallest test setup with only one test case.
* `toDo.spec.js` has some more tests with different ways to choose an element.
* `toDoPageObject.spec.js` uses page objects to wrap some functionality.

The `IndexPage.js` is a simple wrapper for the page itself and its elements (the todo list in this case)

After running `npm install` you'll find `node_modules` folder (as you surely know). 
After `npm test` there will be a `screenshots` folder containing one image for each test case.

## Credits

Inspired by the [Protractor Example](https://github.com/qualityshepherd/protractor_example.git) from [Quality Shepherd](https://qualityshepherd.com)

See the [Protractor style guide](https://github.com/angular/protractor/blob/master/docs/style-guide.md) for further structural information.
