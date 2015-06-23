describe("myBus", function(){

  it("should get the user's location", function(){
    expect(true).toEqual(true);
  })

})

describe("HomeController", function() {

  beforeEach(module('app'));
  
  it("should have a change page method", inject(function($controller) {
    var scope = {};
      ctrl = $controller('HomeController', {$scope:scope});
    
    expect(!!scope.changePage).toBe(true);
  }));

});