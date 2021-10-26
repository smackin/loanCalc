describe('Loan Calculator Testing', function(){

it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000,  years: 10,  rate: 4,}
  expect(calculateMonthlyPayment(values)).toEqual('101.25');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 11000,  years: 7,  rate: 4.556,}
  expect(calculateMonthlyPayment(values)).toEqual('153.19');
});

it("should return a rate with a large principle", function(){
  const values = {amount: 200000,  years: 15,  rate: 5.88,} 
  expect(calculateMonthlyPayment(values)).toEqual('1674.77')
});

it("should return a dollar amount", function(){
  const values = {amount: 200000,  years: 66,  rate: 40,}
  expect(calculateMonthlyPayment(values)).toEqual('6666.67');
})

});