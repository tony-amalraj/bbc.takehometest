# bbc.takehometest

1. To allow this test to run the following extensions/libraries were installed:
    1. axios 
    2. assert
    3. cucumber

2. The feature files are stored under features folder
3. Step definitions are written using JavaScript and stored under features/stepDefinitions folder (file name: tahehometest.js)
4. I have split each scenario as a separate feature file to make it easier to read though in actual project implementation I would keep them all under one feature file as separate scenario sections. 
5. All the cucumber feature files can be run using this command: npm test (this is defined in package.json under scripts)
6. cucumber.js file was created for report generation which is current in JSON format
7. settings.json file was created to specify the folder structure of feature files and step definitions. 
8. When the test is completed successfully a JSON format report file will be generated and saved under the reports folder

9. 3 manual test cases are stored under ManualTest folder in a feature file named FunctionalManualTesting.feature
