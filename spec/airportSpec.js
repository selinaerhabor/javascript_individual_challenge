'use strict';

describe("Airport", function(){

  var airport;

//Before each it block reload a new instance
  beforeEach(function(){
    airport = new Airport();
  });

  it("Instructs plane to land at airport", function(){
    expect(airport.land).toHaveBeenCalled();
  });

});
