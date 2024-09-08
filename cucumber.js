{
    "default"; {
      "require"; ["features/stepDefinitions/*.js"],
      "format"; ["json:./reports/cucumber_report.json"],
      "timeout"; 60000
    }
  }
  