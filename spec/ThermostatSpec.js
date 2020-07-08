describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe('thermostat set to default value', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.default()).toBe(20);
    });
  });
});