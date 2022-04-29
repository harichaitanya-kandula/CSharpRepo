describe("TestD", function() {
  var GetCurrentDate = require('../../lib/jasmine_examples/getCurrentDate');
 
  it("test testd", function() {
  console.log(GetCurrentDate());
  expect(GetCurrentDate()).toEqual('2022-04-25');
  });
  
});
