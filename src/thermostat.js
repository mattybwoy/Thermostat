class Thermostat {

  constructor() {
    this.default = 20;
    this.temperature = this.default;
    this.minimumTemp = 10;
    this.maximumTemp = 25;
    this.maximumTemp2 = 32;
    this.powerSaver = true;
  };

  up() {
    if (this.maximumTemp < this.temperature) {throw new Error("Maximum temperature exceeded");}
    this.temperature++;
    return this.temperature;
  };

  down() {
    if (this.minimumTemp > this.temperature) {throw new Error("Minimum temperature exceeded");}
    this.temperature--;
    return this.temperature;
  };

  powerSaverOff() {
    return this.powerSaver = false
  }; 
}
