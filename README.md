# bbc.takehometest
Cucumber automation tests created using JavaScript as the step definition language, part of the BBC take home test.

<u>List of prerequisite:</u> <br> 
node.js (includes npm), cucumber-js, axios, assert and moment. 

### Installation

1. Create dir and clone repository
```
mkdir bbc.takehometest
cd bbc.takehometest
git clone https://github.com/tony-amalraj/bbc.takehometest.git .
```

2. Install node_modules
```
npm install
```

3. Execute tests

```
npm run bbctest

OR

./node_modules/.bin/cucumber-js features
```


Troubleshooting 
* To avoid installation conflict for Cucumber-js 
```
#Ensure global installation is uninstalled 
npm uninstall -g @cucumber/cucumber

#Install cucumber locally
npm install @cucumber/cucumber --save-dev

#Reinstall node_modules
rm -rf node_modules
npm install
```