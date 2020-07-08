describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe('thermostat set to default value', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.default).toBe(20);
    });
  });

  describe('up function', function() {
    it('increases the temperature by 1', function() {
      expect(thermostat.up()).toEqual(21);
    });
  });

  describe('down function', function() {
    it('decreases the temperature by 1', function() {
      expect(thermostat.down()).toEqual(19);
    });
  });

  describe('setting a minimum temperature', function() {
    it('has a minimum temperature of 10 degrees', function() {
      expect(thermostat.minimumTemp).toEqual(10);
    });
    
    it('throws an error if temperature falls below 10 degrees', function() {
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      thermostat.down()
      expect(function() { thermostat.down(); }).toThrow(Error("Minimum temperature exceeded"))
    })
  });
});
