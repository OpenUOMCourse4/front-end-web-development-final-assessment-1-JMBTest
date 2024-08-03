const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

fs.readFile('results/results-*.xml', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
  }

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      process.exit(1);
    }

    const testsuites = result.testsuites.testsuite;
    let totalTests = 0;
    let failures = 0;

    testsuites.forEach((suite) => {
      totalTests += parseInt(suite.$.tests, 10);
      failures += parseInt(suite.$.failures, 10);
    });

    console.log(`Total Tests: ${totalTests}`);
    console.log(`Failures: ${failures}`);

    if (failures > 0) {
      console.log('Some tests failed.');
      process.exit(1);
    } else {
      console.log('All tests passed.');
    }
  });
});
